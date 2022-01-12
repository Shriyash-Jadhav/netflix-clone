import React, { useState, useEffect } from "react";
import {
	Navbar,
	Button,
	Container,
	Form,
	FormControl,
	Nav,
	Alert,
} from "react-bootstrap";
import { useAuth } from "../../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";

import "./Hero.css";

const Hero = () => {
	const [error, setError] = useState("");
	const { currentUser, logout } = useAuth();
	const history = useHistory();

	async function handleLogout(e) {
		e.preventDefault();
		setError("");

		try {
			await logout();
			history.push("/signin");
		} catch {
			setError("Failed to log out");
		}
	}
	return (
		<div className="hero-img">
			{/* {banner && banner.slice(0, 1).map((movie) => (
                <img src={IMGPATH + movie.poster_path} alt="movie" className='hero-img' />
            ))} */}
			<Navbar>
				<Container fluid>
					<Navbar.Brand href="#">
						{" "}
						<img
							src="https://netflix-clone-tau-livid.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fnetflix-logo-lg.16dcb373.png&w=640&q=75"
							alt="logo"
							style={{ width: "200px" }}
						/>
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="navbarScroll" />

					{/* <Navbar.Collapse id="navbarScroll">
						<Nav className="me-auto"></Nav>
						<Form className="d-flex">
							<FormControl
								type="search"
								placeholder="Search"
								className="me-2"
								aria-label="Search"
							/> */}
					<Button variant="danger" onClick={handleLogout}>
						Logout
					</Button>
					{/* </Form>
					</Navbar.Collapse> */}
				</Container>
			</Navbar>
			<div
				style={{ position: "absolute", padding: "2px", top: "35vh" }}
				className="px-4"
			>
				<p style={{ color: "#fff", fontSize: "30px" }}>
					Spider-Man: No Way Home
				</p>
				<p style={{ color: "#fff", fontSize: "15px" }}>
					Peter Parker is unmasked and no longer able to separate his normal{" "}
					<br />
					life from the high-stakes of being a super-hero. When he asks for help{" "}
					<br />
					from Doctor Strange the stakes become even more dangerous, for....
				</p>
			</div>
		</div>
	);
};

export default Hero;
