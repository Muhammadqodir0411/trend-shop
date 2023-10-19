import React from "react";

const Call = () => {
  return (
    <>
      <div className="header__call">
        <a
          href="tel:+998932502719"
          className="fw-bold header__call--tel text-black"
        >
          +998918017575
        </a>
        <div className="d-flex flex-column align-items-start justify-content-center">
          <p className="m-0 p-0 text-secondary call__text">
          +998996080090
          </p>
          <p className="m-0 p-0 text-secondary call__text">
          Dushanba-Jum, 10:00-19:00
          </p>
        </div>
      </div>
    </>
  );
};

export default Call;
