import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import NavBars from "../../Navbar/NavBars";

const Test = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetct();
  }, []);

  const fetct = async () => {
    const response = await fetch("http://localhost:8888/products");
    const data = await response.json();
    setProducts(data);
  };

  return (
    <div>
      <NavBars />
      <div className="container pt-32 mx-auto ">
        <Link
          className="px-8 py-2 mb-4  bg-green-500 hover:bg-green-600 rounded-md text-lg font-semibold "
          to={"/add"}
        >
          Add New
        </Link>
        <div className="mt-6">
          <table>
            <thead className="bg-slate-300">
              <tr>
                <th className="border-r border-slate-700">No</th>
                <th className="border-r border-slate-700">Title</th>
                <th className="border-r border-slate-700">img</th>
                <th className="border-r border-slate-700">price</th>
                <th className="border-r border-slate-700 p-2">retting</th>
                <th className="border-r border-slate-700">Bahasa</th>
                <th className="border-r border-slate-700">Rilis</th>
                <th className="border-r border-slate-700">lokasi</th>
                <th className="border-r border-slate-700">kategori</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody className="bg-slate-100 + 1">
              {products.map((product, index) => (
                <tr className="border-y border-slate-700 b">
                  <td className="p-2 border-r  border-slate-700 b">
                    {index + 1}
                  </td>
                  <td className="p-2 border-r border-slate-700">
                    {product.name}
                  </td>
                  <td className="p-2 border-r border-slate-700">
                    {product.avatar}
                  </td>
                  <td className="p-2 border-r border-slate-700">
                    {product.price}
                  </td>
                  <td className="p-2 border-r border-slate-700">
                    {product.retting}
                  </td>
                  <td className="p-2 border-r border-slate-700">
                    {product.bahasa}
                  </td>
                  <td className="p-2 border-r border-slate-700">
                    {product.rilis}
                  </td>
                  <td className="p-2 border-r border-slate-700">
                    {product.lokasi}
                  </td>
                  <td className="p-2">{product.kategori}</td>
                  <td className=" border-l border-slate-700 px-3">
                    <Link
                      to={`/edit/${product.id}`}
                      className="px-5 py-1 rounded-l-md shadow-md   bg-yellow-500"
                    >
                      Edit
                    </Link>
                    <Link className="px-5 py-1 rounded-r-md shadow-md   bg-red-500">
                      Delete
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Test;
