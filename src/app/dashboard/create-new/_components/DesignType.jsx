import Image from "next/image";
import React, { useState } from "react";

function DesignType() {
  const Design = [
    {
      name: "Modern",
      image: "/modern.jpg",
    },
    {
      name: "Bohemian",
      image: "/Bohemian.png",
    },
    {
      name: "Industrial",
      image: "/industrial.jpg",
    },
    {
      name: "Rustic",
      image: "/rustic.jpg",
    },
    {
      name: "Traditional",
      image: "/traditional.png",
    },
    {
      name: "Minimilistic",
      image: "/minimilistic.jpeg",
    },
  ];

  const [selectedOption, setSelectedOption] = useState();
  return (
    <div className="mt-5">
      <label htmlFor="" className="text-gray-500">
        Select Interior Design Type
      </label>
      <div className="grid grid-cols-2 mt-3 md:grid-cols-3 gap-2">
        {Design.map((design, index) => (
          <div key={index} onClick={() => setSelectedOption(design.name)}>
            <Image
              src={design.image}
              width={100}
              height={100}
              alt=""
              className="h-[60px] rounded-md hover:scale-105 transition-all cursor-pointer"
            />
            <h2>{design.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DesignType;
