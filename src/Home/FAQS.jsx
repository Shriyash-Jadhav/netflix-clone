import React, { useState } from "react";

const FAQS = ({ question, answer }) => {
	const [answers, setAnswers] = useState(false);
	// console.log(answer)
	return (
		<div>
			<div className="accordion">
				<div className="faq-question" onClick={() => setAnswers(!answers)}>
					<p style={{ margin: "0", fontSize: "20px" }}>{question}</p>
				</div>
				<div>
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
