import React from "react";
import Image from "next/image";
import HeroImage from "@/public/assets/heroImage.svg";

const Hero = () => {
  return (
    <div className="bg-secondary relative">
      <h1 className="text-6xl gredText">Front-end web developer</h1>

      <Image
        src={HeroImage}
        alt="Hero Image"
        width="500"
        style={{
          margin: "auto",
        }}
      />
    </div>
  );
};

export default Hero;
