import React from "react";
import { BsCreditCard2Back, BsCalendarCheck } from "react-icons/bs";
import { RiTakeawayLine } from "react-icons/ri";
import { AiOutlineFileProtect } from "react-icons/ai";
import "./style.scss"
import Img from "./../../assets/images/Calendar.svg"
import Img2 from "./../../assets/images/Cost.svg"
import Img3 from "./../../assets/images/warran.svg"
import Img5 from "./../../assets/images/Delivery.svg"
import Img4 from "./../../assets/images/yandex.svg"
import { FaYandex } from "react-icons/fa";
const index = () => {
  return (
    <>
      <div className="mb-3 warranty w-100 d-flex justify-content-between align-items-center gap-3">
        <div className="warrant d-flex justify-content-between flex-column aligm-items-start gap-2">
          {/* <BsCreditCard2Back className="warant-icon" /> */}
          <img src={Img} className="warant-icon" alt="icon" />
          <p className=" p-0">
          Eng past narxlar va olingandan keyin to'lov
          </p>
        </div>
        <div className="warrant d-flex justify-content-between flex-column aligm-items-start gap-2">
          {/* <RiTakeawayLine className="warant-icon"/>\ */}
          <img src={Img5} className="warant-icon" alt="icon" />       
          <p>Ertasi kuni mahsulotingizni yetkazib beramiz</p>
        </div>
        <div className="warrant d-flex justify-content-between flex-column aligm-items-start gap-2">
          {/* <BsCalendarCheck className="warant-icon"/> */}
          <img src={Img} className="warant-icon" alt="icon" />
          <p>Tovarlarni tekshirish va qaytarish uchun 10 kun</p>
        </div>
        <div className="warrant d-flex justify-content-between flex-column aligm-items-start gap-2 ">
          {/* <AiOutlineFileProtect className="warant-icon" /> */}
          <img src={Img3} className="warant-icon" alt="icon" />
          <p>Ishlab chiqaruvchidan rasmiy kafolat</p>
        </div>
        <div className="warrant d-flex justify-content-between flex-column aligm-items-start gap-2">
        <img src={Img4} className="warant-icon" alt="icon" />
          {/* <FaYandex className="warant-icon"/> */}
          <p>Biz 10 yildan beri Yandex.Marketda mahsulotlarni joylashtiramiz</p>
        </div>
      </div>
    </>
  );
};

export default index;
