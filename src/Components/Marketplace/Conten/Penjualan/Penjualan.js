import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NavBars from "../../Navbar/NavBars";

const Penjualan = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fectData();
  }, []);

  const fectData = async () => {
    const response = await fetch("http://localhost:8888/products");
    const data = await response.json();
    setProducts(data);
  };
  return (
    <div className="h-[1000px]">
      <NavBars />

      <div className="container  max-w-6xl">
        <div className="pt-20  ">
          <div className=" rounded-lg shadow-lg lg:pt-20 mx-auto">
            <div className="p-10">
              <Link
                className="text-center px-8 py-2 bg-green-600 rounded-md "
                to={"/add"}
              >
                Add
              </Link>
            </div>
            <div className="flex flex-wrap gap-3 p-2 justify-center">
              {products.map((product) => (
                <div className="w-[180px] rounded-md bg-slate-200">
                  <div className="p-2">
                    <img
                      className=" h-[190px]"
                      src={product.avatar}
                      alt="img"
                    />
                    <p className="text-[16px] font-semibold py-1">
                      {product.name}
                    </p>
                    <p>Rp.{product.price}</p>
                    <p className="font-bold text-center">{product.retting}</p>
                    <div className="py-2 justify-between flex">
                      <Link
                        to={`/edit/${product.id}`}
                        className="px-4 py-1 font-semibold text-[14px] hover:bg-yellow-600  bg-yellow-500 rounded-md"
                      >
                        Edit
                      </Link>
                      <button className="px-4 py-1 font-semibold text-[14px] hover:bg-red-600  bg-red-500 rounded-md">
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Penjualan;
