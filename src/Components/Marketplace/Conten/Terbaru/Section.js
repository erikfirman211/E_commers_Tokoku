import React from "react";
import satu from "../Semua/img/4.jpg";

const Section = () => {
  return (
    <div>
      <div className="bg-hero  h-[180px] mx-14 my-10 rounded-xl">
        <div className="bg-gradient-to-r from-yellow-500 to-transparent h-full rounded-xl"></div>
      </div>
      <div className="bg-white h-[160px] mx-14 rounded-lg flex">
        <div className=" mx-4 my-2">
          <p className="text-xl font-semibold ">Kategori Pilihan</p>
          <div className="flex p-3 gap-5">
            <div className="w-[100px] border border-sky-200 p-2 rounded-md">
              <img src={satu} alt="satu" />
              <p className="text-center">Materi</p>
            </div>
            <div className="w-[100px] border border-sky-200 p-2 rounded-md">
              <img src={satu} alt="satu" />
              <p className="text-center">Cerita</p>
            </div>
          </div>
        </div>
        <div className=" mx-5 mt-2 w-full rounded-lg">
          <p className="text-xl font-semibold mb-2">Edukasi</p>
          <div className="border border-slate-200 rounded-lg p-2">
            <p className="text-[16px] font-semibold ">Edukasi Umum</p>
            <p className="text-[12px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos,
              repellat facilis porro perferendis alias quasi voluptates mollitia
              saepe distinctio est. Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Soluta non commodi corrupti nisi odit deleniti
              accusantium et id, tenetur facere! Lorem, ipsum dolor sit amet
              consectetur adipisicing elit. Qui sunt id, voluptate
              <button className="text-[12px] px-3 text-yellow-500 ">
                Bacaselengkapnya...
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;
