import React, { useState } from 'react';
import data from './data';
import Graph from './Graph';
// const category = { 'TU': 0, 'C': 0, 'PSE': 0, 'PS': 0, 'RO': 0, 'DDE': 0 };
export default function App() {
	const questions = data;

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);
	const [categoryScore, setCategoryScore] = useState({ TU: 0, C: 0, PSE: 0, PS: 0, RO: 0, DDE: 0 });


	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score => score + 1);

			setCategoryScore({

				...categoryScore,

				[questions[currentQuestion].tag]: categoryScore[questions[currentQuestion].tag] + 1

			});

		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	return (
		<div className='app'>
			{showScore ? (
				<div>
					<div className='score-section'>
						You scored {score} out of {questions.length}
					</div>
					<Graph categoryScore={categoryScore} />
				</div>

			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>

					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}
