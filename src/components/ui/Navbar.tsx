import { useAuth } from "@/context/AuthContext";
import React from "react";

export default function Navbar() {
  // @ts-ignore
  const { logoutUser } = useAuth();
  return (
    <div className=" fixed top-0 w-full flex items-center justify-between px-12 py-3 text-white">
      <h1>Hello</h1>
      <button className=" text-white" onClick={logoutUser}>
        logoutUser
      </button>
    </div>
  );
}
