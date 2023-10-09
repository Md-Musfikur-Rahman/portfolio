import { Wave } from "@/components";
import {
  About,
  Contact,
  Education,
  Hero,
  Testimonials,
  Work,
} from "@/sections";
import Image from "next/image";
import Waves from "@/public/assets/wave2.svg";
export default function Home() {
  return (
    <div>
      <div className="gred w-full h-[50px]" />
      <Hero />
      <Wave />
      <About />
      <Education />
      <Image src={Waves} alt="wave" style={{ width: "100%" }} />
      <div className=" bg-secondary">
        <Work />
      </div>
      <div className="gredR w-full h-[50px]" />
      <Testimonials />
      <Contact />
    </div>
  );
}
