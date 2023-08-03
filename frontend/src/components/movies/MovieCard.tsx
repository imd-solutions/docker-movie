import React from "react";
import FavouriteButton from "../event/FavouriteButton";

interface iMoveCard {
  movie: any;
}

export default function MovieCard({ movie }: iMoveCard) {
  return (
    <>
      <div className="block max-w-[18rem] rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
        <div className="relative overflow-hidden bg-cover bg-no-repeat">
          <img className="rounded-t-lg" src={movie.image_large_url} alt="" />
        </div>
        <div className="p-6">
          <FavouriteButton />

          <blockquote>
            <p className="text-xl">{movie.quote}</p>
          </blockquote>
          <figcaption className="text-md text-neutral-600 dark:text-neutral-400">
            - {movie.character} ({movie.actor})
            <br />
            <cite title="Source Title">
              {" "}
              - {movie.movie} ({movie.year})
            </cite>
          </figcaption>
        </div>
      </div>
    </>
  );
}
