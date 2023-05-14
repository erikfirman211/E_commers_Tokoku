import React from "react";
import satu from "../Assets/bg/3.jpg";

const Hero6 = () => {
  return (
    <div className="w-full md:flex mb-10">
      <div className="md:my-auto flex items-center justify-center md:mx-10 md-10 py-6">
        <img
          className="shadow-xl rounded-xl  w-[300px] md:w-[500px]"
          src={satu}
          alt="satu"
        />
      </div>
      <div className="w-full">
        <p className="text-center md:mt-7 font-bold md:text-3xl">
          Membaca Adalah gerbang ilmu
        </p>
        <p className="text-center md:text-[16px] md:mt-2 text-[15px] px-10">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium,
          voluptatibus!
        </p>
        <div className="flex">
          <div className="flex flex-wrap md:mx-10 md:my-3 mx-7 mt-10">
            <div className="w-[160px] sm:w-[100px] md:w-[150px] lg:w-[300px] lg:mx-6 lg:my-6  md:ml-4 md:mt-2 ">
              <span className="h-4 w-4 bg-yellow-300 flex items-center justify-center rounded-full">
                1
              </span>
              <p className="text-[10px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
                accusantium minima natus incidunt sint harum, optio error totam
                nisi? Ipsum.
              </p>
            </div>
            <div className="w-[160px] sm:w-[100px] md:w-[150px] lg:w-[300px] lg:mx-6 lg:my-6  md:ml-4 md:mt-2 ">
              <span className="h-4 w-4 bg-yellow-300 flex items-center justify-center rounded-full">
                2
              </span>
              <p className="text-[10px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
                accusantium minima natus incidunt sint harum, optio error totam
                nisi? Ipsum.
              </p>
            </div>
            <div className="w-[160px] sm:w-[100px] md:w-[150px] lg:w-[300px] lg:mx-6 lg:my-6  md:ml-4 md:mt-2 ">
              <span className="h-4 w-4 bg-yellow-300 flex items-center justify-center rounded-full">
                3
              </span>
              <p className="text-[10px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
                accusantium minima natus incidunt sint harum, optio error totam
                nisi? Ipsum.
              </p>
            </div>
            <div className="w-[160px] sm:w-[220px] md:w-[150px] lg:w-[300px] lg:mx-6 lg:my-6  md:ml-4 md:mt-2 ">
              <span className="h-4 w-4 bg-yellow-300 flex items-center justify-center rounded-full">
                4
              </span>
              <p className="text-[10px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
                accusantium minima natus incidunt sint harum, optio error totam
                nisi? Ipsum.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero6;
