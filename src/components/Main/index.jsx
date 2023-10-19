import React from "react";
import Main from "./../../ui/Slide/index";
import Img2 from "./../../ui/HeroImg";
import Warant from "./../../ui/Warranty";
import Recamendation from "./../../ui/Recomendation";
import Category from "./../../ui/PopularCategory";
import Brand from "./../../ui/Brand/index";
import Slick from "./../../lib/index";
import XitProduct from "./../../ui/XitProduct/index";
// import { Outlet, Link } from "react-router-dom";
import "./style.scss";
import { CartState } from "../../context/Auth";
const index = () => {
  const {
    state: { cart },
  } = CartState();
  return (
    <>
      <section className="main__section bg-white">
        <div className="container">
          <div className="hero">
            <div className="hero_left">
              <Main />
            </div>
            <div className="d-flex w-50 hero__right align-items-center justify-content-between gap-3">
              <Img2 />
            </div>
          </div>
          <div className="hero__recomendation d-flex flex-column justify-content-center w-100 align-items-center py-4">
            <Recamendation />
          </div>
        </div>
        <div className="site-waranty w-100">
          <div className="container">
            <Warant />
          </div>
        </div>
        <div className="popular-category w-100 ">
          <div className="container">
            <Category />
          </div>
        </div>
        <div className="">
          <div className="container">
            <XitProduct />
          </div>
        </div>
        <div className="my-4">
          <div className="container">
            <Slick />
          </div>
        </div>
        <div>
          <Brand />
        </div>
        <div className="container">
          <div className="d-flex w-75 py-4 mx-auto justify-content-center align-items-center flex-column gap-1">
            <h3 className="about-title text-center">
            "Trend_elektronic" onlayn-do'koni
            </h3>
            <p className="text-secondary my-2 p-0 text-center">
              Biz 2023 yildan beri ishlayapmiz va 1 yildan beri barqarorlikni ko'rsatmoqdamiz
              yuqori sifatli xizmat, biz tobora ko'proq ishonch qozonamiz
              butun O'zbekiston bo'ylab xaridorlar soni. Bizning asosiy mukofotimiz
              jamoalar - yana qaytib kelib, bizga tavsiya qiladigan mijozlar
              do'stlarimga. Sharhlar shuni ko'rsatadiki, xaridorlarning 95 foizi qoniqish hosil qiladi
              "rend_elektronic" ning ishi. <br /> <br /> Biz faqat "oq" sotamiz
              to'liq hujjatlar to'plami bilan jihozlar, biz hamma bilan shartnomalar tuzamiz
              O'zbekiston yirik etkazib beruvchilar, biz yollanma xizmatlaridan foydalanmaymiz
              haydovchilar va biz o'zimiz omborlardagi tovarlarni minimallashtirish uchun tekshiramiz
              nuqson darajasi. Har bir do'kon xodimi manfaati uchun ishlaydi
              mijoz. Biz mahsulotlarimiz assortimentini doimiy ravishda kengaytiramiz va bunga intilamiz
              uyingiz, yozgi uyingiz, bog'ingiz va sizga kerak bo'lgan hamma narsani taklif qilish
              dam olish. Agar siz hamyonbop narxlarda ishonchli do'kon qidirayotgan bo'lsangiz -
              "Trend_elektronic" ga murojaat qiling. Biz sizniki bo'lishdan xursand bo'lamiz
              yoqimli xaridlar dunyosi uchun qo'llanma.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default index;
