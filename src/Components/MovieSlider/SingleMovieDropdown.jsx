import React, { useState } from "react";
import { Button } from "react-bootstrap";

import "./MovieSlider.css";
const SingleMovieDropdown = ({ movie }) => {
	const IMGPATH = "https://image.tmdb.org/t/p/w1280";
	return (
		<div className="movie-dropdown">
			<div style={{ width: "800px" }}>
				<p style={{ color: "#fff", fontSize: "23px" }}>
					<strong>{movie?.title}</strong>
				</p>
				<p style={{ color: "#fff", fontSize: "15px" }}>{movie?.overview}</p>
				<Button variant="danger">Play</Button>
			</div>
			<div>
				<img
					src={IMGPATH + movie?.poster_path}
					alt="moviess"
					className="movie-img-dropdown "
				/>
			</div>
		</div>
	);
};

export default SingleMovieDropdown;
