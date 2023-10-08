"use client";
import axios from "axios";
import { useAuth } from "@/context/AuthContext";
import React, { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import Movie from "@/components/ui/Movie";
import Link from "next/link";

async function getMoviesData() {
  const response = await axios.get(
    "https://api.themoviedb.org/3/movie/popular",
    {
      params: {
        api_key: process.env.NEXT_PUBLIC_TMDB_API,
      },
    }
  );
  // console.log(response.data);
  return response.data;
}

function Dashboard() {
  // @ts-ignore
  const { user, sessionKey, logoutUser } = useAuth();
  const router = useRouter();

  const { data, isLoading, error } = useQuery({
    queryKey: ["movies"],
    queryFn: getMoviesData,
  });

  if (isLoading) {
    return (
      <div className=" min-h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }

  if (error) {
    return (
      <div className=" min-h-screen flex items-center justify-center">
        An error has occurred:{" "}
        <span className=" text-red-500">{error?.message}</span>
      </div>
    );
  }

  return (
    <div className=" min-h-screen flex flex-col items-center justify-start bg-[#04070b]">
      <div className=" fixed bg-black z-40 bg-opacity-30 backdrop-blur-md flex items-center justify-between w-full px-6 py-4">
        <Link href={'/'} className=" cursor-pointer text-center text-2xl font-semibold tracking-wide">
          Movies
        </Link>
        <button
          className=" bg-red-500 transition-all ease-in-out active:scale-[0.98] p-2 rounded-md px-3 font-semibold"
          onClick={logoutUser}
        >
          Logout
        </button>
      </div>
      <div className=" mt-16 grid grid-cols-4 gap-8 md:w-10/12 py-12">
        {data.results.map((movie: any) => (
          <div className=" col-span-1" key={movie.id}>
            <Movie
              title={movie.title}
              poster_path={movie.poster_path}
              overview={movie.overview}
              vote_average={movie.vote_average}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
