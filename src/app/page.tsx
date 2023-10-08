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
    <main className=" min-h-screen flex flex-col items-stretch justify-noraml gradient">
      <div className=" absolute top-8 w-full">
        <Navbar />
      </div>
      <div className="hexagonGradient mt-72 flex flex-col items-center justify-center w-full">
        <span className=" text-[#54C0A0] font-normal text-sm">
          JET PROTOCOL
        </span>
        <h1 className=" text-7xl text-center leading-[80px]">
          the next generation of <br />{" "}
          <span className=" italic playfair"> defi governance</span>
        </h1>
        <p className=" tracking-wider max-w-2xl leading-8 font-[400] text-center text-[#ffffff99] text-xl mt-5">
          experience open source, transparent and efficient borrowing and
          lending on solana.
        </p>
        <div className=" self-center space-x-5 mt-12">
          <PrimaryBtn title="read docs" />
          <SecondaryBtn title="how it works" />
        </div>
      </div>
      <div className=" mt-40">
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

export const PrimaryBtn = ({ title }: { title: string }) => {
  return (
    <button className=" rounded-full  border shadow-[0px_2px_2px_0px_rgba(255,255,255,0.48)_inset,0px_-2px_2px_0px_rgba(0,0,0,0.48)_inset] border-solid border-[rgba(255,255,255,0.24)] bg-[#64ae9d] text-black font-[500] px-4 py-2">
      {title}
    </button>
  );
};

const SecondaryBtn = ({ title }: { title: string }) => {
  return (
    <button className=" rounded-full  border shadow-[0px_2px_2px_0px_rgba(255,255,255,0.48)_inset,0px_-2px_2px_0px_rgba(0,0,0,0.48)_inset] border-solid border-[rgba(255,255,255,0.24)] text-white font-[500] px-4 py-2">
      {title}
    </button>
  );
};
