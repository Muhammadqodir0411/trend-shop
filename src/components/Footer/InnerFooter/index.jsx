import React from "react";
import { Form, InputGroup } from "react-bootstrap";
import Img from "../../../assets/images/rating.png";
import "./style.scss";
const index = () => {
  return (
    <>
      <div className="page-footer bg-warning">
        <div className="container">
          <div className="page-footer-sub py-4 d-flex justify-content-between align-items-start gap-2">
            <div className="page-sub d-flex justify-content-between align-items-start gap-2">
              <div className="d-flex justify-content-between align-items-start gap-3 flex-column">
                <h3 className="fw-bold ">Yangilanib turing</h3>
                <p className="">
                  Yangilanishlarimizga obuna bo'ling va yangi mahsulotlar va aktsiyalar haqida bilib oling
                  va birinchi navbatda maxsus takliflar
                </p>
              </div>
              <div className="d-flex justify-content-between flex-column align-items-start gap-3">
                <InputGroup className="">
                  <Form.Control
                    placeholder=""
                    aria-label=""
                    aria-describedby="basic-addon2"
                    className="footer-sub-form"
                  />
                    <button className="btn btn-danger btn-submits">Submit</button>
                </InputGroup>
                <p className="text-secondary">
                "Obuna bo'lish" tugmasini bosish orqali siz qayta ishlashga rozilik bildirasiz
                  shaxsiy ma'lumotlar va taklifga rozilik bildirasiz
                </p>
              </div>
            </div>
            <div>
              <img width={200} height={125} src={Img} alt="images yandex" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
