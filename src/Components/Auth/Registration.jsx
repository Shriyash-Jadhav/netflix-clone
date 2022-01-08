import React from "react";
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
import Footer from "../Footer/Footer";
import "./Auth.css";
const Registration = () => {
	return (
		<>
			<div className="auth-img">
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
						</Navbar.Collapse>
					</Container>
				</Navbar>
				<div
					style={{
						padding: "45px",
						display: "flex",
						flexDirection: "column",
						marginTop: "100px",
						marginBottom: "100px",
						backgroundColor: "#000000",
						width: "390px",
						opacity: 0.8,
					}}
					className=" container"
				>
					<p
						style={{
							color: "#fff",
							fontSize: "25px",
							fontWeight: "bold",
							margin: "0px",
							paddingBottom: "5px",
						}}
					>
						Sign Up
					</p>
					<Form>
						<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
							<Form.Control type="name" placeholder="Name" />
						</Form.Group>
						<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
							<Form.Control type="email" placeholder="Email" />
						</Form.Group>
						<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
							<Form.Control type="password" placeholder="password" />
						</Form.Group>
						<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
							<Form.Control type="password" placeholder="Confirm Password" />
						</Form.Group>
						<button className="sign-in">Sign In</button>
						<p
							style={{
								color: "#fff",
								fontSize: "15px",
								fontWeight: "bold",
								margin: "0px",
								paddingBottom: "5px",
							}}
						>
							New to Netflix ? <a href="/signin">Sign In now</a>
						</p>
					</Form>
				</div>
				<div className="footer">
					<Row>
						<Col>
							<div>
								<p>Questions? Call 000-800-040-1843</p>
								<p>FAQ</p>
								<p>Cookie Preferences</p>
								<img
									src="https://netflix-clone-tau-livid.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fnetflix-logo-lg.16dcb373.png&w=640&q=75"
									alt="logo"
									style={{ width: "200px" }}
								/>
							</div>
						</Col>
						<Col>
							<div>
								<p>Help Center</p>
								<p>Corporate Information</p>
							</div>
						</Col>
						<Col>
							<div>
								<p>Terms of Use</p>
							</div>
						</Col>
						<Col>
							<div>
								<p>Privacy</p>
							</div>
						</Col>
					</Row>
				</div>
			</div>
		</>
	);
};

export default Registration;
