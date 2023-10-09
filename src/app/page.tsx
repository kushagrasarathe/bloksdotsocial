import Image from "next/image";
import {
  hexagonGradient,
  partner1,
  partner2,
  partner3,
  partner4,
  partner5,
  partner6,
  partner7,
  partner8,
  partner9,
  partner10,
} from "../assets/index";
import Marquee from "react-fast-marquee";
import Navbar from "@/components/ui/Navbar";
import { PrimaryBtn, SecondaryBtn } from "@/components/ui/Buttons";

const partners = [
  partner1,
  partner2,
  partner3,
  partner4,
  partner5,
  partner6,
  partner7,
  partner8,
  partner9,
  partner10,
];

export default function Home() {
  return (
    // <main className=" min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#3c988d] via-black to-black">
    <main className=" z-50 min-h-screen flex flex-col items-stretch justify-noraml gradient">
      <div className=" z-50 absolute top-8 w-full">
        <Navbar />
      </div>
      <div className=" group z-20 relative hexagonGradient tab:mt-64 desktop:mt-80 flex flex-col items-center justify-center w-full">
        <Image
          className="  absolute w-[43vw] laptop:-top-[33.5vh] desktop:-top-[37vh] z-10"
          src={hexagonGradient}
          alt="hexagonGradient"
        />
        <Image
          className="  absolute w-[43vw] laptop:-top-[33.5vh] desktop:-top-[37vh] z-10"
          src={hexagonGradient}
          alt="hexagonGradient"
        />
        <span className=" z-20 mb-3 text-[#54C0A0] font-normal text-sm">
          JET PROTOCOL
        </span>
        <h1 className=" z-20 tab:text-5xl laptop:text-6xl desktop:text-7xl text-center leading-[80px]">
          the next generation of <br />{" "}
        </h1>
        <div className=" z-10 tab:text-5xl laptop:text-6xl desktop:text-7xl text-center leading-[80px] pt-3 -mt-2 italic playfair w-6/12 gradient2">
          defi governance
        </div>
        <p className=" bg-black pt-5 w-full tracking-wider max-w-2xl leading-8 font-[400] text-center text-[#ffffff99] text-xl ">
          experience open source, transparent and efficient borrowing and
          lending on solana.
        </p>
        <div className=" self-center space-x-5 mt-12">
          <PrimaryBtn title="read docs" />
          <SecondaryBtn title="how it works" />
        </div>
      </div>
      <div className=" laptop:mt-24 desktop:mt-28">
        <Partners />
      </div>
    </main>
  );
}

const Partners = () => {
  return (
    <div className=" relative w-11/12 flex items-center gap-x-10 justify-between w-ful mx-auto">
      <div className="  absolute bg-green-300 left-0 h-10 z-10 bg-opacity-3 fade w-full max-w-[60px]"></div>
      <Marquee loop={0} autoFill speed={50}>
        {partners.map((partner, idx) => (
          <Image className=" mx-12" key={idx} src={partner} alt={"partner"} />
        ))}
      </Marquee>
      <div className=" w-10 absolute bg-green-300 rotate-180 right-0 h-10 z-10 bg-opacity-3 fade"></div>
    </div>
  );
};
