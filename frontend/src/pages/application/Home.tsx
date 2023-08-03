import { useState, useEffect } from "react";
import SiteHeader from "../../components/partials/SiteHeader";
import MovieCard from "../../components/movies/MovieCard";

export default function Home() {
  useEffect(() => {}, []);
  return (
    <>
      <SiteHeader />
      <section className="py-10 bg-gray-50 overflow-hidden">
        <div className="container mx-auto px-4">
          <h1 className="font-heading max-w-xl mb-2 text-4xl md:text-5xl text-gray-900 font-black tracking-tight">
            Movie Quotes
          </h1>
          <p className="text-gray-500 font-bold mb-10 ">
            Vote for your fave quote.
          </p>
          <div className="grid grid-cols-4 gap-5">
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
          </div>
        </div>
      </section>
    </>
  );
}
