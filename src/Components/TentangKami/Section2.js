import React from "react";

const Section2 = () => {
  const names = [
    {
      id: 1,
      name: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolo Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab debitis fugit ex rem assumenda, fugiat atque dolor saepe at itaque? ",
    },
    {
      id: 2,
      name: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolo Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab debitis fugit ex rem assumenda, fugiat atque dolor saepe at itaque? ",
    },
    {
      id: 3,
      name: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolo Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab debitis fugit ex rem assumenda, fugiat atque dolor saepe at itaque? ",
    },
    {
      id: 4,
      name: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolo Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab debitis fugit ex rem assumenda, fugiat atque dolor saepe at itaque? ",
    },
  ];

  return (
    <div className="hero1 w-full h-[600px] md:flex md:px-32">
      <p className="text-white md:text-3xl font-bold md:mt-20 text-center pt-7 ">
        Our Mision
      </p>
      <tbody className="md:ml-[80px] md:my-20">
        {names.map((name) => (
          <ol className="text-white flex items-center justify-center mx-1 mt-3 text-[10px]">
            <li key={name.id} className="md:mt-5 md:text-[10px] sm:text-[10px]">
              {name.name}
            </li>
          </ol>
        ))}
      </tbody>
    </div>
  );
};

export default Section2;
