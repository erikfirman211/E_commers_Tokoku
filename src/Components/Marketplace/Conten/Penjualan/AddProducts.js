import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddProducts = () => {
  const [avatar, setImage] = useState("");
  const [name, setName] = useState("");
  const [price, setprice] = useState("");
  const [retting, setRetting] = useState("");
  const [promo, setPromo] = useState("");
  const history = useNavigate();

  const saveProduct = async (e) => {
    e.preventDefault();
    const product = { name, avatar, price, retting, promo };

    await fetch("http://localhost:8888/products", {
      method: "POST",
      body: JSON.stringify(product),
      headers: {
        "Content-type": "application/json",
      },
    });
    history("/semua");
  };

  return (
    <div className="container max-w-6xl">
      <form onSubmit={saveProduct}>
        <div className="my-20  justify-center p-10 bg-slate-200 rounded-xl shadow-xl">
          <div className="w-full">
            <p className="text-2xl font-bold text-slate-700 py-3 px-2">Title</p>
            <input
              className="w-full rounded-md border-none active:border-none py-1 px-3"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Title"
            />
          </div>
          <div className="w-full">
            <p className="text-2xl font-bold text-slate-700 py-3 px-2">Image</p>
            <input
              className="w-full rounded-md border-none active:border-none py-1 px-3"
              type="text"
              onChange={(e) => setImage(e.target.value)}
              value={avatar}
              placeholder="image"
            />
          </div>
          <div className="w-full">
            <p className="text-2xl font-bold text-slate-700 py-3 px-2">Price</p>
            <input
              className="w-full rounded-md border-none active:border-none py-1 px-3"
              type="number"
              onChange={(e) => setprice(e.target.value)}
              value={price}
              placeholder="Price"
            />
          </div>
          <div className="w-full">
            <p className="text-2xl font-bold text-slate-700 py-3 px-2">
              Retting
            </p>
            <input
              className="w-full rounded-md border-none active:border-none py-1 px-3"
              type="text"
              onChange={(e) => setRetting(e.target.value)}
              value={retting}
              placeholder="retting"
            />
          </div>
          <div className="w-full">
            <p className="text-2xl font-bold text-slate-700 py-3 px-2">
              Harga Promo
            </p>
            <input
              className="w-full rounded-md border-none active:border-none py-1 px-3"
              type="number"
              onChange={(e) => setPromo(e.target.value)}
              value={promo}
              placeholder="Harga Promo"
            />
          </div>
          <div className="pt-6 ">
            <button className="px-8 py-1 bg-blue-500 rounded-lg shadow-xl shadow-slate-400 ">
              Save
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddProducts;
