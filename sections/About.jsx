import Image from "next/image";
import Me from "@/public/assets/Me.png";

const About = () => {
  return (
    <div className="w-4/5 mx-auto">
      <h1>About</h1>
      <div className="flex justify-evenly items-center mt-24">
        <div>
          <Image
            src={Me}
            alt="Musfikur"
            width={250}
            height={250}
            className="rounded-full border-[2px] border-text shadow-lg shadow-text"
          />
        </div>

        <div className=" w-1/3 text-justify">
          Hello, I'm <span className=" font-bold">Md Musfikur Rahman </span> I
          am a passionate Computer Science and Engineering (CSE) student at
          Green University of Bangladesh, dedicated to honing my skills in web
          development for the past two years. Proficient in HTML, CSS,
          JavaScript, and more, I am committed to creating dynamic and engaging
          web experiences. With a strong foundation in coding and an
          unquenchable curiosity for the digital world, I am eager to embark on
          exciting web projects and contribute to the ever-evolving landscape of
          technology. Explore my portfolio to witness my journey in crafting
          innovative web solutions.
        </div>
      </div>
    </div>
  );
};

export default About;
