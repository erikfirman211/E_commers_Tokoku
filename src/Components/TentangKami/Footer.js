import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const links = [
    { name: "Home", link: "/" },
    { name: "Edukasi", link: "/edukasi" },
    { name: "Tentang Kami", link: "/tentangkami" },
    { name: "Kontak", link: "/kontak" },
    { name: "Marketplace", link: "/marketplace" },
  ];
  const bantuan = [{ name: "FAQ" }, { name: "Hubungi Kami", link: "/kontak" }];

  const socialMedia = [
    { logo: <ion-icon name="logo-instagram"></ion-icon>, name: "@TokoKu" },
    {
      logo: <ion-icon name="logo-whatsapp"></ion-icon>,
      name: "+089 636 687 987",
    },
    { logo: <ion-icon name="logo-twitter"></ion-icon>, name: "TokoKu" },
  ];

  return (
    <div className="flex flex-wrap justify-between lg:py-10 lg:px-10 bg-gray-400 w-full ">
      <div className="flex flex-wrap mx-3">
        <div className="mx-2 lg:mx-16 w-[100px] py-4">
          <h1 className="text-yellow-500 font-bold lg:text-xl lg:mb-2 text-[10px]  md:mb-2">
            Toko Ku
          </h1>
          {links.map((link) => (
            <p className="lg:py-2  text-[10px]">
              <Link to={link.link}>{link.name}</Link>
            </p>
          ))}
        </div>
        <div className="mx-2 lg:mx-16 w-[100px] py-4">
          <h1 className="text-yellow-500 font-bold lg:text-xl lg:mb-2 text-[10px]  md:mb-2">
            Bantuan
          </h1>
          {bantuan.map((bantu) => (
            <p className="lg:py-2  text-[10px]">
              <Link to={bantu.link}>{bantu.name}</Link>
            </p>
          ))}
        </div>
        <div className="mx25 lg:mx-16 w-[100px] py-4">
          <h1 className="text-yellow-500 font-bold lg:text-xl lg:mb-2 text-[10px] md:mb-2">
            Social Media
          </h1>
          {socialMedia.map((social) => (
            <p className="lg:py-2 text-[10px]">
              <Link to={social.link}>
                {social.logo}
                {social.name}
              </Link>
            </p>
          ))}
        </div>
      </div>
      <div className=" lg:px-20 lg:py-10 md:py-6">
        <h1 className="font-bold flex items-center justify-center">
          <span className="bg-yellow-500 text-w py-1 px-3 lg:px-5 lg:py-4 md:px-3 md:py-2 shadow-lg rounded-md font-bold mx-2">
            E
          </span>
          Toko ku
        </h1>
        <div className="lg:py-4 text-sm ">
          <p className="w-[400px] text-sm px-4 pt-4 pb-10 text-[10px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque,
            illo. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Eaque, illo. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Eaque, illo.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
