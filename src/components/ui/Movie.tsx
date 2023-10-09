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

  return (
    <>
      <div className=" rounded-xl  hover:cursor-pointer relative cut-top-left-corner text-black bg-whit flex flex-col items-center justify-end self-start w-full max-h-[500px] h-[500px] group overflow-hidden">
        <div className="squad-card-wrapper absolute bottom-0  mt-5 squad-card-bg transition-all ease-in-out duration-300 transform   ">
          {/* group-hover:scale-y-[0.65] group-hover:-translate-y-48 */}
          <Image
            src={
              poster_path
                ? ImagesApi + poster_path
                : "https://indianfolk.com/wp-content/uploads/2018/10/Movie.jpg"
            }
            width={1000}
            height={1000}
            className=" h-full w-full object-cover object-center    group-hover:scale-110 transition-all ease-in-out"
            // group-hover:scale h-[500px] max-w-[400px]  -y-05 group-hover:scale-x-75 -20 pb-0
            alt={title}
          />
        </div>

        <div className=" absolute h-[260px] overflow-auto bottom-0 w-full px-5 py-3 details  text-white bg-black bg-opacity-80 backdrop-blur-sm   opacity-0 group-hover:opacity-100 transition-opacity ease-in-out duration-300 ">
          <h1 className=" laptop:text-xl desktop:text-2xl tracking-wider font-semibold">
            {title}
          </h1>
          <div className=" relative flex items-center justify-between">
            <h2 className=" text-xl mt-1 tracking-wider ">{vote_average}</h2>
            <div className=" relative flex items-center justify-normal gap-3"></div>
          </div>
          <p className=" text-base tracking-wide leading-normal pt-4">
            {overview}
          </p>
        </div>

        <div className=" w-full text-xl px-4 py-3 wf  text-white bg-black bg-opacity-80 backdrop-blur-sm  cut-top-left-corner mx-auto absolute bottom-0  description group-hover:opacity-0 text-center ">
          {title}
        </div>
      </div>
    </>
  );
};

export default Movie;
