import React from "react";
import { RiErrorWarningLine } from "react-icons/ri";
import { useState } from "react";
import { CartState } from "../../../context/Auth";

const OrderCard = () => {
  const {
    state: { cart, cartCount, totals },
    dispatch,
  } = CartState();
  const [money, setMoney] = useState(5);

  return (
    <>
      <div className="check-card py-4">
        <ul
          className="m-0 p-0 flex-wrap d-flex justify-content-between gap-3"
          style={{ listStyle: "none" }}
        >
          <li className="border check-list-cart p-2 fw-bold text-black">
            Yetkazib berish
            <ul
              className="my-2 p-0 d-flex jsutify-content-between align-items-start flex-column"
              style={{ listStyle: "none" }}
            >
              <li className="fw-bold text-black">
                Shahar ichida yetkazib berish
              </li>
              <li className="text-secondary fw-normal">
                Kirish joyiga yetkazib berish: 5 $
              </li>
              <li className="text-secondary fw-normal">
                keyingi yetkazib berish ertaga, 10/13/2023
              </li>
            </ul>
          </li>
          <li className="border p-2 fw-bold check-list-cart text-black">
            Qo'shimcha xizmatlar
            <div className="form-check my-2 m-0 p-0 w-100 ">
              <label
                className="w-100 form-check-label d-flex justify-content-between align-items-start fw-normal m-0 p-0"
                htmlFor="chek"
              >
                Eski narsalarni yo'q qilish <br />
                texnologiya
                <input
                  className="form-check-input"
                  type="checkbox"
                  readOnly
                  id="chek"
                />
              </label>
            </div>
            <div className="form-check w-100 m-0 p-0">
              <label
                className="form-check d-flex w-100 justify-content-between align-items-start fw-normal m-0 p-0"
                htmlFor="control-check"
              >
                Uskunani o'rnatish
                <input
                  className="form-check-input"
                  type="checkbox"
                  readOnly
                  id="control-check"
                />
              </label>
            </div>
          </li>
          <li className="border check-list-cart bg-light p-2 fw-bold text-black">
            <ul
              className="my-2 p-0 d-flex jsutify-content-between align-items-start gap-2 flex-column"
              style={{ listStyle: "none" }}
            >
              <li className="text-black w-100 d-flex justify-content-between align-items-start">
                <p className="fw-bold text-secondary ">
                  Tovarlar ({Number(cartCount)}):
                </p>
                <p className="text-secondary fw-normal">{Number(totals)} $</p>
              </li>
              <li className="text-black w-100 d-flex justify-content-between align-items-start">
                <p className="fw-bold text-secondary">Yetkazib berish:</p>
                <p className="text-secondary fw-normal"> {money} $</p>
              </li>
              <li className="text-black w-100 d-flex justify-content-between align-items-start">
                <p className="fw-bold">Jami:</p>
                <p className="text-secondary fw-normal">
                  {money + Number(totals)} $
                </p>
              </li>
            </ul>
          </li>
        </ul>
        <div className="d-flex justify-content-between align-items-center flex-column">
          <p className="my-3 mx-auto">
            “Buyurtma berish” tugmasini bosish orqali siz shartlarga rozilik
            bildirasiz "Trend_elektronic" onlayn-do'konining sotuvi.
          </p>
          <button className="btn btn-warning">Buyurtmani tekshiring</button>
        </div>
      </div>
    </>
  );
};

export default OrderCard;
