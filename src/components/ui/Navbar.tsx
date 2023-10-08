import { PrimaryBtn } from "@/app/page";
import { logo } from "../../assets/index";
import Image from "next/image";
import React from "react";

const paths = ["products", "dao", "build", "docs"];

export default function Navbar() {
  // @ts-ignore
  return (
    <div className=" mt- py-5 px-10 bg-black bg-opacity-70 backdrop-blur-md rounded-full border border-[#ffffff2e] w-10/12 mx-auto flex items-center justify-between text-white">
      <Image src={logo} alt="logo" />
      <div className=" flex gap-x-8">
        {paths.map((path, idx) => (
          <div className=" cursor-pointer hover:underline" key={idx}>{path}</div>
        ))}
      </div>
      <PrimaryBtn title="launch app" />
    </div>
  );
}
