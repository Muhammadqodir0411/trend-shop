import React from "react";
import { useState, useEffect } from "react";
import { GiSettingsKnobs } from "react-icons/gi";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { NavLink, Link } from "react-router-dom";
import { CartState } from "../../context/Auth";
const Modal = () => {
  const {
    state: { modal },
    dispatch,
  } = CartState();
  useEffect(() => {
    const body = document.querySelector("body");
    body.style.overflow = modal ? "hidden" : "auto";
  }, [modal]);

  useEffect(() => {
    const body = document.querySelector("body");
    body.style.overflow = modal ? "hidden" : "auto";
  }, [modal]);

  return (
    <>
      <ul className="flex-row list-group d-flex justify-content-between nav-list align-items-center">
        <li className="list-items">
          <button
            href="#li"
            className="underline-none btn fw-bold btn btn-warning rounded-0 d-flex text-black gap-2 align-items-center"
            onClick={(e) =>
              dispatch({ type: "MODAL", payload: modal ? false : true })
            }
          >
            {modal ? (
              <IoMdClose className="menu__category" />
            ) : (
              <GiHamburgerMenu className="menu__category" />
            )}
            Katalog&nbsp; tovarlar
          </button>
        </li>
        <li className="list-items">
          <a href="#li" className="underline-none fw-bold">
            Aksiya
          </a>
        </li>
        <li className="list-items">
          <a href="#li" className="underline-none fw-bold">
            To'lov
          </a>
        </li>
        <li className="list-items">
          <a href="#li" className="underline-none fw-bold">
            O'rnatish
          </a>
        </li>
        <li className="list-items">
          <a href="#li" className="underline-none text-capitalize fw-bold">
            qaytish
          </a>
        </li>
        <li className="list-items">
          <a href="#li" className="underline-none text-capitalize fw-bold">
            Biznes
          </a>
        </li>
        <li className="list-items">
          <a href="#li" className="underline-none fw-bold">
            Kontaktlar
          </a>
        </li>
        <li className="list-items">
          <a href="#li" className="underline-none fw-bold text-capitalize">
            Buyurtma
          </a>
        </li>
        <li className="list-items">
          <a href="#l" className="underline-none fw-bold">
            Yetkazib berish
          </a>
        </li>
        <li className="list-items">
          <NavLink to={"/admin"} className="underline-none fw-bold">
            <GiSettingsKnobs
              style={{ width: "25px", height: "25px" }}
              className="text-warning mx-1"
            />
            Kabinet
          </NavLink>
        </li>
      </ul>
    </>
  );
};

export default Modal;
