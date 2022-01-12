import React, { useState } from "react";
import "./MovieSlider.css";

const SingleMovie = ({ movie, selectMovie }) => {
	const IMGPATH = "https://image.tmdb.org/t/p/w1280";
	return (
		<>
			<div className="movie cursor-pointer" onClick={() => selectMovie(movie)}>
				<img
					src={IMGPATH + movie?.poster_path}
					alt="moviess"
					className="movie-img "
				/>
				<div style={{ position: "absolute" }} className="px-0">
					<p style={{ color: "#fff", fontSize: "15px", margin: "0px" }}>
						{movie?.title}
					</p>
					<p style={{ color: "#fff", fontSize: "13px" }}>
						{movie?.overview.length > 100
							? movie?.overview.slice(0, 35) + "..."
							: movie?.overview}
					</p>
				</div>
			</div>
		</>
	);
};

export default SingleMovie;
