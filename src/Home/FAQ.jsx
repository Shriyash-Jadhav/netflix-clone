import React, { useState } from "react";
import { Accordion } from "react-bootstrap";
import data from "./data.js";
import FAQS from "./FAQS";
import "./Home.css";
const FAQ = () => {
	const [questions, setQuestions] = useState(data);
	return (
		<div
			style={{
				backgroundColor: "#000000",
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				padding: "15px",
			}}
		>
			<h1 style={{ color: "#fff" }}>Frequently Asked Questions</h1>
			<div style={{ width: "800px" }}>
				{questions.map((question) => (
					<FAQS key={question.id} {...question} />
				))}
			</div>
		</div>
	);
};

export default FAQ;
