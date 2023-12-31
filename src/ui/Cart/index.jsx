import React from "react";
import "./style.scss";

import Img from "./../../assets/images/car.png";
import { Link } from "react-router-dom";
import { BiTrash } from "react-icons/bi";
import { IoMdClose } from "react-icons/io";
import { CartState } from "./../../context/Auth";

const index = () => {
  const {
    state: { cart, cartCount, totals, opencart },
    dispatch,
  } = CartState();

  return (
    <>
      <div className={`layer-cart ${opencart ? "show" : "hides"}`}>
        <div className="cart d-flex justify-content-start flex-column align-items-start ">
          <div className="cart__head d-flex justify-content-between flex-column align-items-end">
            <div className="d-flex justify-content-between align-items-center w-100">
              <h2 className="cart__title my-2 p-0">
              Savatda {cartCount} tovarlar
              </h2>
              <IoMdClose
                className={`position-fixed close-arrow ${
                  opencart ? "show" : "hide"
                }`}
                onClick={() => dispatch({ type: "SHOW", payload: false })}
              />
            </div>
          </div>
          <div className="cart__body w-100 d-flex  flex-column align-items-start justify-content-start">
            {cart.length > 0 ? (
              cart.map((e) => {
                return (
                  <div
                    key={e.id}
                    className="cart__body--card w-100 gap-2  d-flex justify-content-between align-items-start"
                  >
                    <div className="d-flex justify-content-start gap-2 align-items-start">
                      <img
                        src={e.image}
                        alt="images"
                        className="product__img"
                      />
                      <div className="d-flex  flex-column gap-3 h-100 align-items-start justify-content-between">
                        <div>
                          <h3 className="order__title m-0">{e.title}</h3>
                        </div>
                        <div className="btn btn-white d-flex justify-content-between flex-row align-items-center fw-medium p-1">
                          <BiTrash
                            onClick={() =>
                              dispatch({
                                type: "REMOVE__TO__PRODUCT",
                                payload: e,
                              })
                            }
                          />
                        </div>
                      </div>
                    </div>
                    <div className="d-flex flex-column h-100 align-items-start justify-content-between">
                      <span className="fw-bold price-cart"> {e.price} $</span>
                      <div className="count border rounded m-0 p-0  d-flex flex-row align-items-center justify-content-between">
                        <button
                          className="btn btn-outline-dark p-0 py-0 px-2 text-danger w-100 rounded-start rounded-0 fw-bold"
                          onClick={() => {
                            if (e.quantity > 1) {
                              dispatch({
                                type: "DECREASE",
                                payload: e,
                              });
                            } 
                            else {
                              dispatch({
                                type: "REMOVE__TO__PRODUCT",
                                payload: e,
                              });
                            }
                          }}
                        >
                          -
                        </button>
                        <p className="rounded-0 m-0 mx-2">{e.quantity}</p>
                        <button
                          className="btn m-0  p-0 py-0 px-2 btn-outline-dark rounded-end rounded-0  text-danger fw-bold"
                          onClick={() =>
                            dispatch({ type: "INCREASE", payload: e })
                          }
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="w-100 h-100 d-flex justify-content-center align-items-center">
                <img src={Img} className="w-100" alt="images" />
              </div>
            )}
          </div>
          <div className="cart__footer w-100 p-2 gap-2 d-flex align-items-end flex-column">
            <div className="d-flex justify-content-between align-items-center w-100">
              <h3 className="cart__price">Jami:</h3>
              <p className="p-0 m-0 fw-bold"> {totals} $</p>
            </div>
            <div>
              <button
                className="btn btn-warning"
                disabled={cart.length === 0}
                onClick={() => dispatch({ type: "SHOW", payload: false })}
              >
                <Link to={"/check"} className="p-0 text-black underline-none">
                Ro'yxatdan o'chirilish
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default React.memo(index);
