"use client";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useAuth } from "@/context/AuthContext";
import Link from "next/link";
import { ChangeEvent, useState } from "react";
import { Toaster } from "react-hot-toast";
// import { Database } from "./database.types";

export default function AuthForm() {
  // const supabase = createClientComponentClient<Database>();
  // @ts-ignore
  const { supabase, user, loginUser, sessionKey } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  // if (user && sessionKey) {
  //   return <div>You are already signed in</div>;
  // }

  return (
    <div className=" min-h-screen flex flex-col items-center justify-center">
      <Toaster position="bottom-center" reverseOrder={false} />
      <h1 className=" text-2xl font-semibold tracking-wide mb-6">Login</h1>
      <div className=" flex  flex-col gap-y-4 md:w-5/12 border border-gray-700 p-10 rounded-xl">
        <label htmlFor="" className=" -mb-2 text-gray-300">
          Email
        </label>
        <input
          type="email"
          value={email}
          onChange={handleEmailChange}
          required
          className=" p-2 bg-gray-700 bg-opacity-60 border border-gray-600 rounded-md outline-none w-full"
          placeholder="Enter your email"
        />
        <label htmlFor="" className=" -mb-2 text-gray-300">
          Password
        </label>
        <input
          placeholder="Enter your password"
          type="password"
          value={password}
          onChange={handlePasswordChange}
          required
          className=" p-2 bg-gray-700 bg-opacity-60 border border-gray-600 rounded-md outline-none"
        />

        <button
          onClick={() => loginUser({ email, password })}
          className="font-semibold bg-green-400 mt-2 text-black rounded-md p-2 active:scale-[0.99] transition-all ease-in-out"
        >
          Login
        </button>
        <div className=" border-t my-2 border-gray-700" />
        <div className=" self-center text-center mx-auto w-full">
          Dont have account?{" "}
          <Link className=" underline" href={"/signup"}>
            Signup Here
          </Link>
        </div>
      </div>
    </div>
  );
}
