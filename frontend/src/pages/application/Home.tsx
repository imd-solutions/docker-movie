import { useContext } from "react";
import { useQuery } from "@apollo/client";
import SiteHeader from "../../components/partials/SiteHeader";
import MovieCard from "../../components/movies/MovieCard";
import GET_MOVIES from "../../apollo/queries/MovieQuery";
import LoadingCircular from "../../components/processing/LoadingCircular";
import { UserContext } from "../../context/UserContext";
import Modal from "./../../components/notification/Modal";

export default function Home() {
  const { loading, error, data } = useQuery(GET_MOVIES);

  const userContext = useContext(UserContext);

  return (
    <>
      <SiteHeader />
      <section className="py-10 bg-gray-50 overflow-hidden">
        <div className="container mx-auto px-4">
          {userContext && userContext.user ? (
            <p>Hello {userContext.user.name}</p>
          ) : (
            ""
          )}
          <h1 className="font-heading max-w-xl mb-2 text-4xl md:text-5xl text-gray-900 font-black tracking-tight">
            Movie Quotes
          </h1>
          <p className="text-gray-500 font-bold mb-3">
            Vote for your fave quote.
          </p>
          <Modal />
          {loading ? (
            <LoadingCircular />
          ) : error ? (
            <p>{error}</p>
          ) : data && data.movies.length > 0 ? (
            <div className="grid grid-cols-4 gap-5">
              {data.movies.map((movie, i) => (
                <MovieCard movie={movie} key={i} />
              ))}
            </div>
          ) : (
            <p>There are no movies at present</p>
          )}
        </div>
      </section>
    </>
  );
}
