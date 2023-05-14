import React, { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const links = [
    { name: "Home", link: "/" },
    { name: "Edukasi", link: "/edukasi" },
    { name: "TentangKami", link: "/tentangkami" },
    { name: "Kontak", link: "/kontak" },
    { name: "Marketplace", link: "/semua" },
  ];

  const [open, setOpen] = useState(false);
  return (
    <div className="shadow-2xl w-full fixed  top-0 z-40">
      <div className="md:flex items-center justify-between w-full bg-white py-2 lg:pr-[230px] lg:pl-[230px]  md:py-1 px-10">
        <div className="font-bold  cursor-pointer flex items-center ">
          <span className="flex items-center justify-center font-bold bg-yellow-500 mr-3 w-6 h-6 rounded-md shadow-md">
            E
          </span>
          TokoKu
        </div>

        <ul
          className={`md:flex md:items-center absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-10 transition-all duration-500 ease-in pb-14 md:pb-0 ${
            open ? "top-10 md:opacity-100" : "top-[-490px] "
          } md:opacity-100 bg-opacity-80`}
        >
          {links.map((link) => (
            <li
              key={link.name}
              className="mr-2 md:mr-4 text-[12px] md:text-[15px] text-slate-500 font-semibold  hover:text-yellow-400 my-5 md:my-2 "
            >
              <Link to={link.link}>{link.name}</Link>
            </li>
          ))}
        </ul>
        <div
          onClick={() => setOpen(!open)}
          className="text-2xl absolute right-4 top-2 cursor-pointer md:hidden"
        >
          <ion-icon name={open ? "close" : "menu"}></ion-icon>
        </div>
        <div
          className={`mt-52 md:mt-0 flex items-center mb-3 md:mb-0  md:pt-0 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-10 transition-all duration-500 ease-in ${
            open ? "top-10" : "top-[-490px]"
          } md:opacity-100`}
        >
          <Link className="px-8 py-[2px] border border-yellow-400 rounded-lg text-yellow-400 mr-2 hover:bg-yellow-400 hover:text-white ">
            Masuk
          </Link>
          <Link className="px-8 py-[2px] border border-yellow-400 bg-yellow-400 rounded-lg text-white ml-2 hover:bg-transparent hover:text-yellow-400 font-semibold ">
            Daftar
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
