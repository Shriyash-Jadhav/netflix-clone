import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import "./Footer.css";
const Footer = () => {
	return (
		<div className="footer">
			<Container>
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
			</Container>
		</div>
	);
};

export default Footer;
