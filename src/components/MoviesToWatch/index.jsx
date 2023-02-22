import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import MovieCard from "../MovieCard";
// Import Swiper React components

// import required modules

export default function MoviesToWatch({}) {
  const Movies = useSelector((state) => state.movies);
  return (
    <>
      <h1>Your list</h1>
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {Movies.map(
          (movie) =>
            !movie.watched && (
              <SwiperSlide>
                <Link to={`/movies/${movie.id}`}>
                  <MovieCard {...movie} type="mylist" />
                </Link>
              </SwiperSlide>
            )
        )}
      </Swiper>
    </>
  );
}
