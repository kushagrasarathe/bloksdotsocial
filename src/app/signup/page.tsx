"use client";

import { useAuth } from "@/context/AuthContext";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { Auth } from "@supabase/auth-ui-react";
import Link from "next/link";
import { ChangeEvent, useState } from "react";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const supabase = createClientComponentClient();

  // @ts-ignore

  const { signupUser, user, sessionKey } = useAuth();

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
      <h1 className=" text-2xl font-semibold tracking-wide mb-6">SignUp</h1>
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
          onClick={() => signupUser({ email, password })}
          className=" font-semibold  bg-green-400 mt-2 text-black rounded-md p-2 active:scale-[0.99] transition-all ease-in-out"
        >
          Create Account
        </button>
        <div className=" border-t my-2 border-gray-700" />
        <div className=" self-center text-center mx-auto w-full">
          Already have account?{" "}
          <Link className=" underline" href={"/login"}>
            Login Here
          </Link>
        </div>
      </div>
    </div>
  );
}
