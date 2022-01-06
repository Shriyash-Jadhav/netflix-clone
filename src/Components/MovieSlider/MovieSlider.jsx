import React, { useState, useEffect } from "react";
import "./MovieSlider.css";
import axios from "axios";

const MovieSlider = () => {
	const [banner, setBaneer] = useState([]);
	const IMGPATH = "https://image.tmdb.org/t/p/w1280";

	useEffect(() => {
		axios
			.get(
				"https://api.themoviedb.org/3/trending/all/week?api_key=04c35731a5ee918f014970082a0088b1&language=en-US"
			)
			.then((res) => {
				setBaneer(res.data.results);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);
	return (
		<div className="movie-slider">
			<h4>Trending</h4>
			<div className="movies rounded-box mt-5">
				{banner &&
					banner.slice(0, 6).map((movie) => (
						<>
							<div className="movie cursor-pointer">
								<img
									src={IMGPATH + movie?.poster_path}
									alt="moviess"
									style={{
										backgroundSize: "cover",
										width: "250px",
										height: "200px",
										opacity: 0.6,
										objectFit: "cover",
									}}
								/>
							</div>
							<div
								style={{ position: "absolute", marginTop: "100px" }}
								className="px-0"
							>
								<p style={{ color: "#fff", fontSize: "15px", margin: "0px" }}>
									{movie?.title}
								</p>
								<p style={{ color: "#fff", fontSize: "13px" }}>
									{movie?.overview.length > 100
										? movie?.overview.slice(0, 10) + "..."
										: movie?.overview}
								</p>
							</div>
						</>
					))}
			</div>
			<div className="movies rounded-box mt-5">
				{banner &&
					banner.slice(0, 6).map((movie) => (
						<>
							<div className="movie cursor-pointer">
								<img
									src={IMGPATH + movie?.poster_path}
									alt="moviess"
									style={{
										backgroundSize: "cover",
										width: "250px",
										height: "200px",
										opacity: 0.6,
										objectFit: "cover",
									}}
								/>
							</div>
							<div
								style={{ position: "absolute", marginTop: "100px" }}
								className="px-0"
							>
								<p style={{ color: "#fff", fontSize: "15px", margin: "0px" }}>
									{movie?.title}
								</p>
								<p style={{ color: "#fff", fontSize: "13px" }}>
									{movie?.overview.length > 100
										? movie?.overview.slice(0, 10) + "..."
										: movie?.overview}
								</p>
							</div>
						</>
					))}
			</div>
		</div>
	);
};

export default MovieSlider;
