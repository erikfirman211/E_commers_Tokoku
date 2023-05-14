import React from "react";
import { Link } from "react-router-dom";

const Filter = () => {
  return (
    <div className="m-2 mx-7 w-44 z-10 h-96 bg-white border rounded-md shadow-md">
      <div className="px-5 py-3">
        <p className="text-center font-semibold">
          <span>
            <ion-icon name="caret-forward-outline"></ion-icon>
          </span>{" "}
          Filter
        </p>
        <p className="pt-5 font-bold text-blue-500">Terbit</p>
        <ul className="pb-5 text-[17px] ">
          <li className="">
            <Link className="text-slate-500 font-semibold">2010 {">"}</Link>
          </li>
          <li>
            <Link className="text-slate-500 font-semibold">2015 {">"}</Link>
          </li>
          <li>
            <Link className="text-slate-500 font-semibold">2020 {">"}</Link>
          </li>
        </ul>
        <hr />
        <p className="pt-5 pb-2 font-bold text-red-500">Kisaran Harga</p>
        <ul>
          <li className="hover:scale-105">
            <Link className="text-slate-500 font-semibold" to={"/seratus"}>
              <div
                className="h-4 w-4 rounded-full bg-slate-300 border inline-block 
             "
              ></div>
              <span className="pl-3 pt-3 ">0 - Rp.100.00</span>
            </Link>
          </li>
          <li className="hover:scale-105">
            <Link
              className="text-slate-500 font-semibold"
              to={"/seratuslimapuluh"}
            >
              <div
                className="h-4 w-4 rounded-full bg-slate-300 border inline-block 
             "
              ></div>
              <span className="pl-3 pt-3 ">0 - Rp.150.00</span>
            </Link>
          </li>
          <li className="hover:scale-105">
            <Link className="text-slate-500 font-semibold" to={"/duaratus"}>
              <div
                className="h-4 w-4 rounded-full bg-slate-300 border inline-block 
             "
              ></div>
              <span className="pl-3 pt-3 ">0 - Rp.200.00</span>
            </Link>
          </li>
          <li className="hover:scale-105">
            <Link
              className="text-slate-500 font-semibold"
              to={"/duaratuslimpuluh"}
            >
              <div
                className="h-4 w-4 rounded-full bg-slate-300 border inline-block 
             "
              ></div>
              <span className="pl-3 pt-3 ">0 - Rp.250.00</span>
            </Link>
          </li>
          <li className="hover:scale-105">
            <Link
              className="text-slate-500 font-semibold"
              to={"/lebihdariduaratuslima"}
            >
              <div
                className="h-4 w-4 rounded-full bg-slate-300 border inline-block 
             "
              ></div>
              <span className="pl-3 pt-3 ">{">"} Rp.250.00</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Filter;
