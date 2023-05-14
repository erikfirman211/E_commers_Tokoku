import React from "react";
import "./Semua.css";
import { useState, useEffect } from "react";

const Hero1 = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fectData();
  }, []);

  const fectData = async () => {
    const response = await fetch("http://localhost:8888/kategori");
    const data = await response.json();
    setProducts(data);
  };
  return (
    <div>
      <div className="p-10 flex">
        <div className="bg-white hero-semua h-[200px] w-8/12 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 mr-7">
          <div className="h-full bg-gradient-to-r  rounded-lg from-yellow-500 to-transparent"></div>
        </div>
        <div className="bg-white hero-semua2 h-[200px] w-4/12 rounded-lg"></div>
      </div>
      <div className=" px-20 ">
        <p className="pb-4 text-bold text-slate-600 text-2xl font-bold">
          Kategori Buku
        </p>
        <div className="flex gap-5 flex-wrap">
          {products.map((kategori) => (
            <div className="w-[80px] rounded-full  justify-center ">
              <div>
                <img
                  className="rounded-full w-[80px] h-[80px]  bg-yellow-500"
                  src={kategori.gambar}
                  alt="pages"
                />
                <p className="text-center pt-2 text-yellow-500 text-[15px]">
                  {kategori.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero1;
