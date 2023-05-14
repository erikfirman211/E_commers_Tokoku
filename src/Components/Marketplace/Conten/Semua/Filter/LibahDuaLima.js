import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NavBars from "../../../Navbar/NavBars";
import "../../Terbaru/Terbaru.css";
import Section from "../../Terbaru/Section";
import Filter from "../../Terbaru/Filter";

const lebihDuaLima = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fectData();
  }, []);

  const terbaruList = products.filter((product) => product.price >= 250.0);

  const fectData = async () => {
    const response = await fetch("http://localhost:8888/products/");
    const data = await response.json();
    setProducts(data);
  };

  return (
    <div className="h-[1000px]">
      <NavBars />
      <div className="container  max-w-6xl rounded-lg lg:pt-20 mx-auto">
        <Section />
        <div className="pt-10  ">
          <div className="flex flex-wrap gap-3 p-2 justify-center w-10/12 ">
            {terbaruList.map((product) => (
              <Link
                key={product.id}
                to={`/beli/${product.id}`}
                className=" p-3 w-[170px] rounded-lg bg-white shadow-md hover:shadow-lg hover:duration-300 hover:shadow-slate-400  duration-300 hover:scale-105"
              >
                <img
                  className=" h-[150px] rounded-md"
                  src={product.avatar}
                  alt=""
                />
                <p className="text-[10px] font-semibold py-1">{product.name}</p>
                <div className="flex justify-between">
                  <div className="px-4 py-1 text-[12px] flex items-center justify-center bg-white rounded-md border border-blue-300">
                    {product.kategori}
                  </div>
                  <div className="items-center justify-center">
                    <p className="text-[10px] text-yellow-600">
                      <ion-icon name="star-outline"></ion-icon>
                      <ion-icon name="star-outline"></ion-icon>
                      <ion-icon name="star-outline"></ion-icon>
                      <ion-icon name="star-outline"></ion-icon>
                      <ion-icon name="star-outline"></ion-icon>
                    </p>
                    <p className="font-semibold text-center text-[12px] text-blue-400">
                      {product.retting}
                    </p>
                  </div>
                </div>
                <div className="flex justify-between py-2">
                  <p className="text-red-400 text-[15px] ">
                    Rp.{product.price}
                  </p>
                  <p className="text-[10px]">
                    <del>
                      <i>Rp.{product.promo}</i>
                    </del>
                  </p>
                </div>
                <div className="flex items-center ">
                  <div>
                    <ion-icon name="location-outline"></ion-icon>
                  </div>
                  <p className="mt-[-3px] text-[13px]">{product.lokasi}</p>
                </div>
              </Link>
            ))}
            <Filter />
          </div>
        </div>
      </div>
    </div>
  );
};

export default lebihDuaLima;
