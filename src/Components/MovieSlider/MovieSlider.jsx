import React, { useState, useEffect } from "react";
import "./MovieSlider.css";
import axios from "axios";
import Hero from "../Hero/Hero";
import Footer from "../Footer/Footer";
import MoviesSlider from "./MoviesSlider";
import {
	getTrendingMovies,
	getNetflixOriginals,
	getTopRatedMovies,
	getComedyMovies,
	getHorrorMovies,
	getRomanceMovies,
	getDocumentariesMovies,
	getActionMovies,
} from "../../store/actions/movieActions";
const MovieSlider = () => {
	const [trending, setTrending] = useState([]);
	const [netflixOriginals, setNetflixOriginals] = useState([]);
	const [topRated, setTopRated] = useState([]);
	const [action, setAction] = useState([]);
	const [comedy, setComedy] = useState([]);
	const [horror, setHorror] = useState([]);
	const [romance, setRomance] = useState([]);
	const [documentaries, setDocumentaries] = useState([]);

	const fetchData = async () => {
		const trending = await getTrendingMovies();
		setTrending(trending);
		const netflixog = await getNetflixOriginals();
		setNetflixOriginals(netflixog);
		const topRated = await getTopRatedMovies();
		setTopRated(topRated);
		const action = await getActionMovies();
		setAction(action);
		const comedy = await getComedyMovies();
		setComedy(comedy);
		const horror = await getHorrorMovies();
		setHorror(horror);
		const romance = await getRomanceMovies();
		setRomance(romance);
		const documentaries = await getDocumentariesMovies();
		setDocumentaries(documentaries);
	};
	useEffect(() => {
		fetchData();
	}, []);

	console.log("trending", trending);
	return (
		<>
			<Hero />
			<div className="movie-slider pb-5">
				<MoviesSlider title="Trending" data={trending} />
				<MoviesSlider title="Netflix Originals" data={netflixOriginals} />
				<MoviesSlider title="Top Rated" data={topRated} />
				<MoviesSlider title="Action" data={action} />
				<MoviesSlider title="Comedy" data={comedy} />
				<MoviesSlider title="Horror" data={horror} />
				<MoviesSlider title="Romance" data={romance} />
				<MoviesSlider title="Documentaries" data={documentaries} />
			</div>
			<Footer />
		</>
	);
};

export default MovieSlider;
