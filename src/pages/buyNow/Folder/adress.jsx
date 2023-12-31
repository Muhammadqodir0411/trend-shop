import React from "react";
import { BiPrinter } from "react-icons/bi";

const adress = () => {
  return (
    <>
      <div className="adress w-75 bg-white p-3 rounded-2 my-3">
        <div className="form-top my-3 gap-2 d-flex flex-column align-items-start justify-content-between">
          <h4>Qabul qilish usuli</h4>
          <div className="m-0 p-0">
            <p className="rounded-0 m-0">Yetkazib berish</p>
          </div>
        </div>
        <form className="adreess-form w-100 d-flex flex-column align-items-start gap-3">
          <div className="mb-3 d-flex select-region justify-content-between align-items-center w-75">
            <label htmlFor="userLocation" className="form-label text-secondary">
              <span className="text-danger mx-1">*</span>
              Shahar
            </label>
            <select
              className="form-select form-select-lg w-50  border-warning"
              id="userLocation"
            >
              <option>Hududni tanlash</option>
              <option value="Andijon">Andijon</option>
              <option value="Namangan">Namangan</option>
              <option value="Farg'ona">Farg'ona</option>
            </select>
          </div>
          <label
            htmlFor="userName"
            className="form-label w-75 d-flex justify-content-between align-items-center gap-1"
          >
            <h6 className="fw-normal text-secondary">
              <span className="text-danger mx-1">*</span>
              Manzil
            </h6>
            <input
              type="text"
              className="form-control w-50 py-2 border-warning"
            />
          </label>
          <label
            htmlFor="userName"
            className="form-label w-75 d-flex justify-content-between align-items-center gap-1"
          >
            <h6 className="fw-normal text-secondary">
              <span className="text-danger mx-1">*</span>
              Uy/ofis raqami
            </h6>
            <input
              type="number"
              className="form-control py-2 w-50 border-warning"
            />
          </label>

          <label
            htmlFor="userName"
            className="form-label w-75 d-flex justify-content-between align-items-center gap-1"
          >
            <h6 className="fw-normal text-secondary">
              Buyurtma bo'yicha sharhlar
            </h6>
            <textarea
              rows={5}
              className="form-control py-2 w-50 border-warning"
              placeholder="Agar bilsangiz, bu yerda izoh va kod so'zini qo'shishingiz mumkin."
            ></textarea>
          </label>
        </form>
        <div className="p-3 order-bottom w-100">
          <h5>Shahar chegaralarida yetkazib berish (Тarif zonasi №1)</h5>
          <ul className="w-100 list-order-bottom">
            <li className="d-flex jsutify-content-between align-items-center w-100">
              <p className="p-0 m-0">Yetkazib berish narxi:</p>
              <div className="p-0 m-0">3 $</div>
            </li>
            {/* <li className="d-flex jsutify-content-between align-items-center w-100">
              <p className="m-0 p-0">Подъём на этаж:</p>
              <div>0 $</div>
            </li> */}
          </ul>
        </div>
      </div>
    </>
  );
};

export default adress;
