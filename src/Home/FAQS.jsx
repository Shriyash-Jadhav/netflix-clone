import React, { useState } from "react";

const FAQS = ({ question, answer }) => {
	const [answers, setAnswers] = useState(false);
	// console.log(answer)
	return (
		<div>
			<div className="accordion">
				<div className="faq-question" onClick={() => setAnswers(!answers)}>
					<p style={{ margin: "0", fontSize: "20px" }}>{question}</p>
					{!answers ? (
						<div style={{ color: "#fff", fontSize: "15px" }}>
							<i class="fas fa-plus"></i>
						</div>
					) : (
						<div style={{ color: "#fff", fontSize: "15px" }}>
							<i class="fas fa-times"></i>
						</div>
					)}
				</div>
				<div className="faq-answerss">
					{answers && (
						<div className="faq-answer">
							<p>{answer}</p>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default FAQS;
