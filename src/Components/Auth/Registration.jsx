import React, { useRef, useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
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
	Alert,
} from "react-bootstrap";
import Footer from "../Footer/Footer";
import "./Auth.css";
const Registration = () => {
	const emailRef = useRef();
	const passwordRef = useRef();
	const passwordConfirmRef = useRef();
	const { signup } = useAuth();
	const [error, setError] = useState("");
	const [loading, setLoading] = useState(false);
	const history = useHistory();

	async function handleSubmit(e) {
		e.preventDefault();

		if (passwordRef.current.value !== passwordConfirmRef.current.value) {
			return setError("Passwords do not match");
		}

		try {
			setError("");
			setLoading(true);
			await signup(emailRef.current.value, passwordRef.current.value);
			history.push("/movies");
		} catch {
			setError("Failed to create an account");
		}

		setLoading(false);
	}
	return (
		<>
			<div className="auth-img1">
				<Navbar>
					<Container fluid>
						<Navbar.Brand href="/">
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
					{error && <Alert variant="danger">{error}</Alert>}
					<Form onSubmit={handleSubmit}>
						<Form.Group id="email">
							<Form.Label></Form.Label>
							<Form.Control
								type="email"
								ref={emailRef}
								required
								placeholder="Email"
							/>
						</Form.Group>
						<Form.Group id="password">
							<Form.Label></Form.Label>
							<Form.Control
								type="password"
								ref={passwordRef}
								required
								placeholder="Password"
							/>
						</Form.Group>
						<Form.Group id="password-confirm">
							<Form.Label> </Form.Label>
							<Form.Control
								type="password"
								ref={passwordConfirmRef}
								required
								placeholder="Confirm Password"
							/>
						</Form.Group>
						<button className="sign-in" type="submit">
							Sign In
						</button>
					</Form>
					<p
						style={{
							color: "#fff",
							fontSize: "15px",
							fontWeight: "bold",
							margin: "0px",
							paddingBottom: "5px",
						}}
					>
						New to Netflix ? <Link to="/signin">Sign In now</Link>
					</p>
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
