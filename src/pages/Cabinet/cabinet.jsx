import React from "react";
import { CgProfile } from "react-icons/cg";
import { CgAdd } from "react-icons/cg";
import Img from "./../../assets/images/df.png";
import "./style.scss";
const cabinet = () => {
  return (
    <>
      <h2 className="cabinet-title">Shaxsiy ma'lumotlar</h2>
      <div className="cabinet-card d-flex justify-content-between align-items-start flex-column position-relative">
        {" "}
        <img
          src={Img}
          alt="avatar"
          width={150}
          height={150}
          className="rounded-5 mb-2"
        />
        <CgAdd
          className="avatar-icon-edit position-absolute rounded-5"
          style={{ width: "30px", height: "30px" }}
        />
        <input type="file" className="avatar position-absolute" />
        <div className="cabinet-card-body w-100 flex-column d-flex justify-content-start gap-3 align-items-start">
          <div style={{ width: "300px" }}>
            <span className="card-name-span text-secondary fw-bold">Ism</span>
            {/* <h5 className="card-name-title border rounded-2 p-2 w-100 text-secondary">
              Asadbek
            </h5> */}
            <input className="form-control" type="text" placeholder="name"/>
          </div>
          <div style={{ width: "300px" }}>
            <span className="card-name-span text-secondary fw-bold">
              Telfon
            </span>
            {/* <h5 className="card-name-title border rounded-2 p-2 w-100 text-secondary">
              +9989
            </h5> */}

            <input className="form-control" type="number" placeholder="+9989" />
          </div>
        </div>
      </div>
    </>
  );
};

export default cabinet;
