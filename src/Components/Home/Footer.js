import React from "react";

const Footer = () => {
  return (
    <div className="bg-slate-500  w-full  shadow-lg py-10 pt-6 flex items-center justify-center">
      <div className="px-[50px] sm:px-[100px] sm:flex-wrap md:px-[140px] flex flex-wrap md:flex-nowrap">
        <div className="px-3 text-center mt-4 text-white hover:scale-105 hover:text-slate-300">
          <ion-icon name="logo-instagram"></ion-icon>
          <p>Instagram</p>
        </div>
        <div className="px-3 text-center mt-4 text-white hover:scale-105 hover:text-slate-300">
          <ion-icon name="logo-whatsapp"></ion-icon>
          <p>WhatSapp</p>
        </div>
        <div className="px-3 text-center mt-4 text-white hover:scale-105 hover:text-slate-300">
          <ion-icon name="logo-tiktok"></ion-icon>
          <p>Tiktok</p>
        </div>
        <div className="px-3 text-center mt-4 text-white hover:scale-105 hover:text-slate-300">
          <ion-icon name="logo-youtube"></ion-icon>
          <p>Youtube</p>
        </div>
        <div className="px-3 text-center mt-4 text-white hover:scale-105 hover:text-slate-300">
          <ion-icon name="logo-facebook"></ion-icon>
          <p>Facebook</p>
        </div>
        <div className="px-3 text-center mt-4 text-white hover:scale-105 hover:text-slate-300">
          <ion-icon name="logo-google"></ion-icon>
          <p>Google</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
