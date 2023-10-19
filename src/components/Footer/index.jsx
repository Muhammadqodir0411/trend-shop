import React from "react";
import { IoMdNavigate } from "react-icons/io";
import { IoMdCall } from "react-icons/io";
import { IoMdMail } from "react-icons/io";
import { IoMdCalendar } from "react-icons/io";
import Bottom from "./../Footer/FooterBottom";
import "./style.scss";
const index = () => {
  return (
    <>
      <footer className="w-100 py-3">
        <div className="container">
          <div className="footer py-3">
            <ul className="footer-list flex-column my-2 justify-content-between align-items-start footer-list-3">
              <li className="footer__list--item">
                <a href="#li" className="footer__link">
                Do'kon haqida
                </a>
              </li>
              <li className="footer__list--item">
                <a href="#li" className="footer__link">
                O'rnatish
                </a>
              </li>
              <li className="footer__list--item">
                <a href="#li" className="footer__link">
                Almashtirish va qaytarish
                </a>
              </li>
              <li className="footer__list--item text-white">
                <IoMdNavigate className="text-danger fw-bold me-1" />
                Sizning shahringiz <br />
                <span className="fw-small">Farg'ona</span>
              </li>
            </ul>
            <ul className="d-flex justify-content-between w-75 py-2 align-items-start gap-5 footer__list--inner">
              <li className="text-white fw-bolder footer-item">
              Kompaniya haqida
                <ul className="footer-list flex-column my-2 justify-content-between align-items-start">
                  <li className="footer__list--item">
                    <a href="#li" className="footer__link">
                    Do'kon haqida
                    </a>
                  </li>
                  <li className="footer__list--item">
                    <a href="#li" className="footer__link">
                    O'rnatish
                    </a>
                  </li>
                  <li className="footer__list--item">
                    <a href="#li" className="footer__link">
                    Almashtirish va qaytarish
                    </a>
                  </li>
                </ul>
              </li>
              <li className="fw-bolder text-white footer-item">
              Kompaniya haqida
                <ul className="footer-list flex-column my-2 justify-content-between align-items-start">
                  <li className="footer__list--item">
                    <a href="#li" className="footer__link">
                    Do'kon haqida
                    </a>
                  </li>
                  <li className="footer__list--item">
                    <a href="#li" className="footer__link">
                    O'rnatish
                    </a>
                  </li>
                  <li className="footer__list--item">
                    <a href="#li" className="footer__link">
                    Almashtirish va qaytarish
                    </a>
                  </li>
                </ul>
              </li>
              <li className="text-white fw-bolder footer-item">
                Call Centre
                <ul className="footer-list flex-column my-2 justify-content-between align-items-start">
                  <li className="footer__list--item">
                    <a href="tel:+8659895" className="footer__link fw-normal">
                      <IoMdCall className="footer-icon" />
                      +998918017575
                    </a>
                  </li>
                  <li className="footer__list--item">
                    <a href="#li" className="footer__link fw-normal">
                      <IoMdMail className="footer-icon" />
                      Trend_elektronic
                    </a>
                  </li>
                  <li className="footer__list--item">
                    <p href="#li" className="footer__link fw-normal">
                      <IoMdCalendar className="footer-icon" />
                      Dushanba-Jum, 10:00-19:00
                    </p>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className="" style={{ background: "#e4e4e4" }}>
        <div className="container">
          <Bottom />
        </div>
      </div>
    </>
  );
};

export default index;
