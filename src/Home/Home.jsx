import React, { useState, useEffect } from "react";
import {
	Navbar,
	Button,
	Container,
	Form,
	FormControl,
	Nav,
	InputGroup,
	Row,
	Col,
} from "react-bootstrap";
import FAQ from "./FAQ";
import Footer from "../Components/Footer/Footer";
import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
	return (
		<>
			<div className="home-img">
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

						<Navbar.Collapse id="navbarScroll">
							<Nav className="me-auto"></Nav>

							<Button variant="danger">Sign In</Button>
						</Navbar.Collapse>
					</Container>
				</Navbar>
				<div
					style={{
						padding: "2px",
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						marginTop: "100px",
						textAlign: "center",
					}}
					className="px-4"
				>
					<h4 style={{ color: "#fff", fontSize: "50px" }}>
						Unlimited movies, TV <br />
						shows and more.
					</h4>
					<p style={{ color: "#fff", fontSize: "15px" }}>
						Watch anywhere. Cancel anytime.
					</p>
					<p style={{ color: "#fff", fontSize: "15px" }}>
						Ready to watch? Enter your email to create or restart your
						membership.
					</p>
					<InputGroup className="mb-3" style={{ width: "500px" }}>
						<FormControl
							placeholder="Email address"
							aria-label="Email address"
							aria-describedby="basic-addon2"
						/>
						<Button variant="danger" id="button-addon2">
							Get Started
						</Button>
					</InputGroup>
				</div>
			</div>
			<div style={{ backgroundColor: "#222222", height: "8px" }}></div>
			<div style={{ backgroundColor: "#000000" }}>
				<Row className="p-5">
					<Col sm={8} style={{ alignSelf: "center" }}>
						<h2 style={{ color: "#fff", fontSize: "40px" }}>
							Enjoy on your TV.
						</h2>
						<h5 style={{ color: "#fff", fontSize: "20px" }}>
							Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV,
							Blu-ray players and more.
						</h5>
					</Col>
					<Col sm={4}>
						<video width="400" controls loop>
							<source
								src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v"
								type="video/mp4"
							/>
						</video>
					</Col>
				</Row>
			</div>
			<div style={{ backgroundColor: "#222222", height: "8px" }}></div>
			<div style={{ backgroundColor: "#000000" }}>
				<Row className="p-5">
					<Col sm={4}>
						<img
							src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
							alt="mobile"
						/>
					</Col>
					<Col sm={8} style={{ alignSelf: "center", paddingLeft: "155px" }}>
						<h2 style={{ color: "#fff", fontSize: "40px" }}>
							Download your shows to watch offline.
						</h2>
						<h5 style={{ color: "#fff", fontSize: "20px" }}>
							Save your favourites easily and always have something to watch.
						</h5>
					</Col>
				</Row>
			</div>
			<div style={{ backgroundColor: "#222222", height: "8px" }}></div>
			<div style={{ backgroundColor: "#000000" }}>
				<Row className="p-5">
					<Col sm={8} style={{ alignSelf: "center" }}>
						<h2 style={{ color: "#fff", fontSize: "40px" }}>
							Watch everywhere.
						</h2>
						<h5 style={{ color: "#fff", fontSize: "20px" }}>
							Stream unlimited movies and TV shows on your phone, tablet,
							laptop, and TV.
						</h5>
					</Col>
					<Col sm={4}>
						<video controls loop>
							<source
								src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices-in.m4v"
								type="video/mp4"
							/>
						</video>
					</Col>
				</Row>
			</div>
			<div style={{ backgroundColor: "#222222", height: "8px" }}></div>
			<div style={{ backgroundColor: "#000000" }}>
				<Row className="p-5">
					<Col sm={4}>
						<img
							src="https://netflix-clone-tau-livid.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fchildren.e88ad5a0.png&w=640&q=75"
							alt="mobile"
						/>
					</Col>
					<Col sm={8} style={{ alignSelf: "center", paddingLeft: "155px" }}>
						<h2 style={{ color: "#fff", fontSize: "40px" }}>
							Create profiles for children.
						</h2>
						<h5 style={{ color: "#fff", fontSize: "20px" }}>
							Send children on adventures with their favourite characters in a
							space made just for them—free with your membership.
						</h5>
					</Col>
				</Row>
			</div>
			<div style={{ backgroundColor: "#222222", height: "8px" }}></div>
			<FAQ />
			<div style={{ backgroundColor: "#222222", height: "8px" }}></div>
			<Footer />
		</>
	);
};

export default Home;
