"use client";
import axios from "axios";
import { useAuth } from "@/context/AuthContext";
import React, { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import Movie from "@/components/ui/Movie";

async function getMoviesData() {
  const response = await axios.get(
    "https://api.themoviedb.org/3/movie/popular",
    {
      params: {
        api_key: process.env.NEXT_PUBLIC_TMDB_API,
      },
    }
  );
  console.log(response.data);
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
  if (isLoading) return "Loading...";
  if (error) return "An error has occurred: " + error?.message;

  return (
    <div className=" min-h-screen flex flex-col items-center justify-start">
      <div className=" flex items-center justify-between w-full px-6 p-3">
        <h1 className=" text-center">Dahboard</h1>
        <button
          className=" bg-red-500 transition-all ease-in-out active:scale-[0.98] p-2 rounded-md px-3 font-semibold"
          onClick={logoutUser}
        >
          logoutUser
        </button>
      </div>
      <div className=" grid grid-cols-4 gap-8 md:w-10/12">
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
