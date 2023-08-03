import React from "react";

export default function MovieCard() {
  return (
    <>
      <div className="block max-w-[18rem] rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
        <div className="relative overflow-hidden bg-cover bg-no-repeat">
          <img
            className="rounded-t-lg"
            src="https://tecdn.b-cdn.net/img/new/standard/nature/182.jpg"
            alt=""
          />
        </div>
        <div className="p-6">
          <blockquote>
            <p className="text-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              posuere erat a ante.
            </p>
          </blockquote>
          <figcaption className="text-md text-neutral-600 dark:text-neutral-400">
            - Character (Actor)
            <br />
            <cite title="Source Title"> - Movie (Year)</cite>
          </figcaption>
        </div>
      </div>
    </>
  );
}
