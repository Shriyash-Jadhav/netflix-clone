import React, { useState } from "react";
import SingleMovie from "./SingleMovie";
import SingleMovieDropdown from "./SingleMovieDropdown";

const MoviesSlider = ({ title, data }) => {
	const [selectedMovie, setSelectedMovie] = useState(null);
	console.log(data);
	return (
		<>
			<h4>{title}</h4>
			<div className="movies rounded-box mt-3 mb-5">
				{data?.slice(0, 5)?.map((movie) => (
					<SingleMovie
						key={movie?.id}
						movie={movie}
						selectMovie={(movie) => setSelectedMovie(movie)}
					/>
				))}
			</div>
			{selectedMovie !== null && <SingleMovieDropdown movie={selectedMovie} />}
		</>
	);
};

export default MoviesSlider;
