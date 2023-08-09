import React, { useState } from "react";
import MOVIE_VOTE from "../../apollo/mutations/MovieVote";
import { useMutation } from "@apollo/client";
interface iFavouriteButton {
  fave: boolean;
}
export default function FavouriteButton({ fave }: iFavouriteButton) {
  const [isFav, setIsFav] = useState(fave);

  const [movieVote, { loading }] = useMutation(MOVIE_VOTE, {
    errorPolicy: "all",
    onCompleted: (data) => {
      // if (data.movieVote) {
      // }
    },
  });
  const favouriteBtnAction = () => {
    let movieFaveState = {
      user_id: 1,
      movie_id: 1,
    };
    setIsFav(!isFav);
    movieVote({ variables: { input: movieFaveState } });
  };
  return (
    <>
      {loading ? (
        <span>Processing...</span>
      ) : (
        <button style={{ color: "red" }} onClick={favouriteBtnAction}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill={isFav ? "currentColor" : "none"}
            stroke={isFav ? "" : "currentColor"}
            strokeWidth={isFav ? "" : 1.5}
            className="w-6 h-6"
          >
            <path
              strokeLinecap={isFav ? "" : "round"}
              strokeLinejoin={isFav ? "" : "round"}
              d={
                isFav
                  ? "M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                  : "M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
              }
            />
          </svg>
        </button>
      )}
    </>
  );
}
