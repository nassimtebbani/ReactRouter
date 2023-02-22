import React from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import Iframe from "../iframe";
import style from "./style.module.css";

export default function Details() {
  const { id } = useParams();

  const movie = useSelector((state) => {
    console.log("state =", id);
    if (id) return state.movies.find((m) => m.id == parseInt(id));
    else console.log("first");
  });

  return (
    <div className={style.main}>
      {movie ? (
        <>
          <h1>{movie.title}</h1>
          <div>
            <Iframe url={movie.youtube} />
          </div>

          <div>
            <h2>Description</h2>
            <p>{movie.description}</p>
          </div>
          <Link to="/">
            <button>Back</button>
          </Link>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
