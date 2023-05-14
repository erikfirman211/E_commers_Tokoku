import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Semua from "./Semua";

const Beli = () => {
  const [avatar, setImage] = useState("");
  const [name, setName] = useState("");
  const [price, setprice] = useState("");
  const [retting, setRetting] = useState("");
  const [bahasa, setBahasa] = useState("");
  const [rilis, setRilis] = useState("");
  const [promo, setPromo] = useState("");
  const { id } = useParams();

  useEffect(() => {
    getProductsById();
  }, []);
  const getProductsById = async () => {
    const response = await fetch(`http://localhost:8888/products/${id}`);
    const data = await response.json();
    setImage(data.avatar);
    setName(data.name);
    setprice(data.price);
    setRetting(data.retting);
    setBahasa(data.bahasa);
    setRilis(data.rilis);
    setPromo(data.promo);
  };

  return (
    <div>
      <Semua />
      <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm z-30 flex items-center justify-center">
        <div className="container max-w-6xl ">
          <div className="my-32 justify-center p-10 bg-slate-100 rounded-xl shadow-xl z-30">
            <div className="w-full ">
              <div className="flex">
                <img
                  src={avatar}
                  className="w-[600px] justify-center rounded-lg"
                  alt="img"
                />
                <div className="w-full mx-10">
                  <Link
                    to={"/terbaru"}
                    className="flex justify-end hover:text-slate-600"
                  >
                    Close
                  </Link>
                  <div className="flex gap-6">
                    <p className=" text-2xl text-red-500 font-semibold">
                      Rp. {price}
                    </p>
                    <p className="flex items-center">
                      <del>
                        <i> Rp. {promo} </i>
                      </del>
                    </p>
                  </div>
                  <p className="text-2xl">{name}</p>
                  <p className="text-2xl">Retting : {retting}</p>
                  <p className="text-2xl">Bahasa : {bahasa}</p>
                  <p className="text-2xl">Tanggal Terbit : {rilis}</p>
                  <button className="px-8 my-4 py-2 rounded-md shadow-lg shadow-yellow-500 bg-blue-500 hover:bg-blue-600">
                    Beli
                  </button>
                  <button className="px-8 mx-4 py-2 my-4 bg-yellow-500 rounded-lg shadow-xl hover:bg-yellow-600">
                    Tambah Keranjang
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Beli;
