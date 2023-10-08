"use client";

import Image from "next/image";

export interface Movies {
  id?: number;
  title: string;
  poster_path: string;
  overview: string;
  vote_average: number;
}

const Movie = ({ title, poster_path, overview, vote_average }: Movies) => {
  const ImagesApi = "https://image.tmdb.org/t/p/w1280";
  const setVoteClass = (vote: number) => {
    if (vote >= 8) {
      return "green";
    } else if (vote >= 6) {
      return "orange";
    } else {
      return "red";
    }
  };

  return (
    <div className=" bg-white text-black bgopacity-50 rounded-md pb-4 h-full flex flex-col items-start justify-between">
      <Image
        src={
          poster_path
            ? ImagesApi + poster_path
            : "https://indianfolk.com/wp-content/uploads/2018/10/Movie.jpg"
        }
        width={1000}
        height={1000}
        className=" w7 w-full max-h-[600px] object-cover object-center"
        alt={title}
      />
      <div className=" pt-3 mb-auto px-4">
        <h3>{title}</h3>
        <span className={`tag ${setVoteClass(vote_average)}`}>
          {vote_average}
        </span>
      </div>
      <div className=" px-4">
        <h2>Overview:</h2>
        <p>{overview}</p>
      </div>
    </div>
  );
};

export default Movie;
