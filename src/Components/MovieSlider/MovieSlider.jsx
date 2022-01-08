import React, { useState, useEffect } from "react";
import "./MovieSlider.css";
import axios from "axios";
import Hero from "../Hero/Hero";
import Footer from "../Footer/Footer";

const MovieSlider = () => {
	const [trending, setTrending] = useState([]);
	const [netflixOriginals, setNetflixOriginals] = useState([]);
	const [topRated, setTopRated] = useState([]);
	const [action, setAction] = useState([]);
	const [comedy, setComedy] = useState([]);
	const [horror, setHorror] = useState([]);
	const [romance, setRomance] = useState([]);
	const [documentaries, setDocumentaries] = useState([]);

	const IMGPATH = "https://image.tmdb.org/t/p/w1280";

	useEffect(() => {
		axios
			.get(
				"https://api.themoviedb.org/3/trending/all/week?api_key=04c35731a5ee918f014970082a0088b1&language=en-US"
			)
			.then((res) => {
				setTrending(res.data.results);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);
	useEffect(() => {
		axios
			.get(
				" https://api.themoviedb.org/3/discover/tv?api_key=04c35731a5ee918f014970082a0088b1&with_networks=213"
			)
			.then((res) => {
				setNetflixOriginals(res.data.results);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);
	useEffect(() => {
		axios
			.get(
				"https://api.themoviedb.org/3/movie/top_rated?api_key=04c35731a5ee918f014970082a0088b1&language=en-US"
			)
			.then((res) => {
				setTopRated(res.data.results);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);
	useEffect(() => {
		axios
			.get(
				"https://api.themoviedb.org/3/movie/top_rated?api_key=04c35731a5ee918f014970082a0088b1&language=en-US"
			)
			.then((res) => {
				setComedy(res.data.results);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);
	useEffect(() => {
		axios
			.get(
				"https://api.themoviedb.org/3/discover/movie?api_key=04c35731a5ee918f014970082a0088b1&with_genres=28"
			)
			.then((res) => {
				setAction(res.data.results);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);
	useEffect(() => {
		axios
			.get(
				"https://api.themoviedb.org/3/discover/movie?api_key=f17017cf9ab19e407243ae287d90f746&with_genres=35"
			)
			.then((res) => {
				setComedy(res.data.results);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);
	useEffect(() => {
		axios
			.get(
				"https://api.themoviedb.org/3/discover/movie?api_key=f17017cf9ab19e407243ae287d90f746&with_genres=27"
			)
			.then((res) => {
				setHorror(res.data.results);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);
	useEffect(() => {
		axios
			.get(
				"https://api.themoviedb.org/3/discover/movie?api_key=f17017cf9ab19e407243ae287d90f746&with_genres=10749"
			)
			.then((res) => {
				setRomance(res.data.results);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);
	useEffect(() => {
		axios
			.get(
				"https://api.themoviedb.org/3/discover/movie?api_key=f17017cf9ab19e407243ae287d90f746&with_genres=99"
			)
			.then((res) => {
				setDocumentaries(res.data.results);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);
	return (
		<>
			<Hero />
			<div className="movie-slider pb-5">
				<h4>Trending</h4>
				<div className="movies rounded-box mt-3 mb-5">
					{trending &&
						trending.slice(0, 5).map((movie) => (
							<>
								<div className="movie cursor-pointer">
									<img
										src={IMGPATH + movie?.poster_path}
										alt="moviess"
										className="movie-img "
									/>

									<div style={{ position: "absolute" }} className="px-0">
										<p
											style={{ color: "#fff", fontSize: "15px", margin: "0px" }}
										>
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
						))}
				</div>

				<h4>Netflix Originals</h4>
				<div className="movies rounded-box mt-3 mb-5">
					{netflixOriginals &&
						netflixOriginals.slice(0, 5).map((movie) => (
							<>
								<div className="movie cursor-pointer">
									<img
										src={IMGPATH + movie?.poster_path}
										alt="moviess"
										className="movie-img "
									/>

									<div style={{ position: "absolute" }} className="px-0">
										<p
											style={{ color: "#fff", fontSize: "15px", margin: "0px" }}
										>
											{movie?.original_title}
										</p>
										<p style={{ color: "#fff", fontSize: "13px" }}>
											{movie?.overview.length > 100
												? movie?.overview.slice(0, 35) + "..."
												: movie?.overview}
										</p>
									</div>
								</div>
							</>
						))}
				</div>
				<h4>Top Rated</h4>

				<div className="movies rounded-box mt-3 mb-5">
					{topRated &&
						topRated.slice(0, 5).map((movie) => (
							<>
								<div className="movie cursor-pointer">
									<img
										src={IMGPATH + movie?.poster_path}
										alt="moviess"
										className="movie-img "
									/>

									<div style={{ position: "absolute" }} className="px-0">
										<p
											style={{ color: "#fff", fontSize: "15px", margin: "0px" }}
										>
											{movie?.original_title}
										</p>
										<p style={{ color: "#fff", fontSize: "13px" }}>
											{movie?.overview.length > 100
												? movie?.overview.slice(0, 35) + "..."
												: movie?.overview}
										</p>
									</div>
								</div>
							</>
						))}
				</div>
				<h4>Action</h4>

				<div className="movies rounded-box mt-3 mb-5">
					{action &&
						action.slice(0, 5).map((movie) => (
							<>
								<div className="movie cursor-pointer">
									<img
										src={IMGPATH + movie?.poster_path}
										alt="moviess"
										className="movie-img "
									/>

									<div style={{ position: "absolute" }} className="px-0">
										<p
											style={{ color: "#fff", fontSize: "15px", margin: "0px" }}
										>
											{movie?.original_title}
										</p>
										<p style={{ color: "#fff", fontSize: "13px" }}>
											{movie?.overview.length > 100
												? movie?.overview.slice(0, 35) + "..."
												: movie?.overview}
										</p>
									</div>
								</div>
							</>
						))}
				</div>
				<h4>Comedy</h4>

				<div className="movies rounded-box mt-3 mb-5">
					{comedy &&
						comedy.slice(0, 5).map((movie) => (
							<>
								<div className="movie cursor-pointer">
									<img
										src={IMGPATH + movie?.poster_path}
										alt="moviess"
										className="movie-img "
									/>

									<div style={{ position: "absolute" }} className="px-0">
										<p
											style={{ color: "#fff", fontSize: "15px", margin: "0px" }}
										>
											{movie?.original_title}
										</p>
										<p style={{ color: "#fff", fontSize: "13px" }}>
											{movie?.overview.length > 100
												? movie?.overview.slice(0, 35) + "..."
												: movie?.overview}
										</p>
									</div>
								</div>
							</>
						))}
				</div>
				<h4>Horror</h4>

				<div className="movies rounded-box mt-3 mb-5">
					{horror &&
						horror.slice(0, 5).map((movie) => (
							<>
								<div className="movie cursor-pointer">
									<img
										src={IMGPATH + movie?.poster_path}
										alt="moviess"
										className="movie-img "
									/>

									<div style={{ position: "absolute" }} className="px-0">
										<p
											style={{ color: "#fff", fontSize: "15px", margin: "0px" }}
										>
											{movie?.original_title}
										</p>
										<p style={{ color: "#fff", fontSize: "13px" }}>
											{movie?.overview.length > 50
												? movie?.overview.slice(0, 35) + "..."
												: movie?.overview}
										</p>
									</div>
								</div>
							</>
						))}
				</div>
				<h4>Romance</h4>

				<div className="movies rounded-box mt-3 mb-5">
					{romance &&
						romance.slice(0, 5).map((movie) => (
							<>
								<div className="movie cursor-pointer">
									<img
										src={IMGPATH + movie?.poster_path}
										alt="moviess"
										className="movie-img "
									/>

									<div style={{ position: "absolute" }} className="px-0">
										<p
											style={{ color: "#fff", fontSize: "15px", margin: "0px" }}
										>
											{movie?.original_title}
										</p>
										<p style={{ color: "#fff", fontSize: "13px" }}>
											{movie?.overview.length > 100
												? movie?.overview.slice(0, 35) + "..."
												: movie?.overview}
										</p>
									</div>
								</div>
							</>
						))}
				</div>
				<h4>Documentaries</h4>

				<div className="movies rounded-box mt-3 mb-5">
					{documentaries &&
						documentaries.slice(0, 5).map((movie) => (
							<>
								<div className="movie cursor-pointer">
									<img
										src={IMGPATH + movie?.poster_path}
										alt="moviess"
										className="movie-img "
									/>

									<div style={{ position: "absolute" }} className="px-0">
										<p
											style={{ color: "#fff", fontSize: "15px", margin: "0px" }}
										>
											{movie?.original_title}
										</p>
										<p style={{ color: "#fff", fontSize: "13px" }}>
											{movie?.overview.length > 100
												? movie?.overview.slice(0, 35) + "..."
												: movie?.overview}
										</p>
									</div>
								</div>
							</>
						))}
				</div>
			</div>
			<Footer />
		</>
	);
};

export default MovieSlider;
