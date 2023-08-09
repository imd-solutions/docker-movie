import React, { useContext } from "react";
import FavouriteButton from "../event/FavouriteButton";
import { UserContext } from "../../context/UserContext";

interface iMoveCard {
  movie: any;
}

export default function MovieCard({ movie }: iMoveCard) {
  const userContext = useContext(UserContext);

  const movieIds = userContext.user.votes.map(function (vote) {
    return vote.movie_id;
  });

  return (
    <>
      <div className="block max-w-[18rem] rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
        <div className="relative overflow-hidden bg-cover bg-no-repeat">
          <img
            className="mx-auto rounded-t-lg object-fit"
            src={movie.image_url}
            alt=""
            width="100%"
            height="100%"
          />
        </div>
        <div className="p-6">
          <FavouriteButton fave={movieIds.includes(parseInt(movie.id))} />

          <blockquote>
            <p className="text-xl">"{movie.quote}"</p>
          </blockquote>
          <figcaption className="text-md text-neutral-600 dark:text-neutral-400">
            - {movie.character}
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
