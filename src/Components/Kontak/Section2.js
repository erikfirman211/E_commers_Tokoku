import React from "react";

const Section2 = () => {
  return (
    <div className="flex flex-wrap md:flex-nowrap  w-full  justify-between pb-8 lg:px-10 lg:py-10 bg-slate-100">
      <div className="px-4">
        <h1 className="lg:pb-3 lg:text-xl text-slate-600 font-bold pt-4 text-xl">
          Get in touch
        </h1>
        <p className="lg:text-[12px] lg:mb-5 text-[12px] pb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
          dolorum natus enim fugit sint, quasi autem cupiditate! Quod, minus.
          Pariatur cumque similique voluptates soluta, ipsa est natus. Quisquam,
          veritatis harum.
        </p>
        <input
          className="bg-slate-200 w-full lg:mb-2 text-[12px] py-1 px-2 border border-slate-400 rounded-md mb-2"
          type="text"
          placeholder="Nama Lengkap"
        />
        <br />
        <input
          className="bg-slate-200 w-full lg:mb-2 text-[12px] py-1 px-2 border border-slate-400 rounded-md mb-2"
          type="text"
          placeholder="No Ponsel"
        />
        <br />
        <input
          className="bg-slate-200 w-full lg:mb-2 text-[12px] py-1 px-2 border border-slate-400 rounded-md mb-2"
          type="email"
          placeholder="Email"
        />
        <br />
        <input
          className="bg-slate-200 pb-[70px] lg:pb-[200px] w-full text-[12px] py-1 px-2 border border-slate-400 rounded-md"
          type="text"
          placeholder="Pesan Anda"
        />
        <button
          type="button"
          className="px-8 py-1 bg-yellow-400 my-2 rounded-lg font-bol d"
        >
          Kirim
        </button>
      </div>
      <div className="px-4 ">
        <h1 className="lg:pb-3 lg:text-xl text-slate-600 font-bold  pt-4 text-xl">
          Hubungi Kami
        </h1>
        <p className="lg:text-[12px] lg:mb-5  text-[12px] pb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
          dolorum natus enim fugit sint, quasi autem cupiditate! Quod, minus.
          Pariatur cumque similique voluptates soluta, ipsa est natus. Quisquam,
          veritatis harum.
        </p>
        <div className="bg-white lg:p-6 p-4 rounded-lg">
          <h1 className="font-semibold text-slate-500 lg:text-xl lg:pb-2">
            kantor TokoKu
          </h1>
          <p className="text-sm lg:mb-2">
            <span className="font-bold lg:text-xl lg:mr-2">
              <ion-icon name="location-outline"></ion-icon>
            </span>
            Jl.pemuda1 kec.pucakwangi kabpaten pati
          </p>
          <p className="text-sm lg:mb-2">
            <span className="font-bold lg:text-xl lg:mr-2">
              <ion-icon name="mail-outline"></ion-icon>
            </span>
            TokoKu.email.com
          </p>
          <p className="text-sm lg:mb-2">
            <span className="font-bold lg:text-xl lg:mr-2">
              <ion-icon name="logo-whatsapp"></ion-icon>
            </span>
            +089 636 687 987
          </p>
          <h1 className="font-semibold text-slate-500 lg:text-xl lg:pb-2 py-3">
            Secial Media
          </h1>
          <div className="flex flex-wrap ">
            <div className="lg:mr-32 mr-20">
              <p className="text-sm lg:mb-2 pb-2">
                <span className="font-bold lg:text-xl lg:mr-2 pb-1">
                  <ion-icon name="logo-instagram"></ion-icon>
                </span>
                Tokoku
              </p>
              <p className="text-sm lg:mb-2 text-[12px] pb-4">
                <span className="font-bold lg:text-xl lg:mr-2">
                  <ion-icon name="logo-tiktok"></ion-icon>
                </span>
                @tokoKu
              </p>
            </div>
            <div className="lg:mr-32 ">
              <p className="text-sm lg:mb-2 lg:mr-2  text-[12px] pb-1">
                <span className="font-bold lg:text-xl lg:mr-2">
                  <ion-icon name="logo-twitter"></ion-icon>
                </span>
                Tokoku
              </p>
              <p className="text-sm lg:mb-2  text-[12px] pb-4">
                <span className="font-bold lg:text-xl lg:mr-2">
                  <ion-icon name="logo-facebook"></ion-icon>
                </span>
                @tokoKu
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
