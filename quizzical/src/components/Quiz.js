// import React, { useState, useEffect } from "react";

function Quiz() {
    console.log("Quiz Component");

    return (
        <div className="quiz">
            <h1 className="heading">Quizzical</h1>
            <h2 className="questions">How would you say goodbye in spanish?</h2>
            <div className="options">
                <div>
                    <input
                        type="radio"
                        name="question_1"
                        id="q1_o1"
                        value="Option 1"
                    />
                    <label htmlFor="q1_o1">Option 1</label>
                </div>
                <div>
                    <input
                        type="radio"
                        name="question_1"
                        id="q1_o2"
                        value="Option 2"
                    />
                    <label htmlFor="q1_o2">Option 2</label>
                </div>
                <div>
                    <input
                        type="radio"
                        name="question_1"
                        id="q1_o3"
                        value="Option 3"
                    />
                    <label htmlFor="q1_o3">Option 3</label>
                </div>
                <div>
                    <input
                        type="radio"
                        name="question_1"
                        id="q1_o4"
                        value="Option 4"
                    />
                    <label htmlFor="q1_o4">Option 4</label>
                </div>
            </div>
            <hr></hr>
            <h2 className="questions">How would you say goodbye in spanish?</h2>
            <div className="options">
                <div>
					<input
						type="radio"
						name="question_2"
						id="q2_o1"
						value="Option 1"
					/>
					<label htmlFor="q2_o1">Option 1</label>
				</div>
                <div>
					<input
						type="radio"
						name="question_2"
						id="q2_o2"
						value="Option 2"
					/>
					<label htmlFor="q2_o2">Option 2</label>
				</div>
                <div>
					<input
						type="radio"
						name="question_2"
						id="q2_o3"
						value="Option 3"
					/>
					<label htmlFor="q2_o3">Option 3</label>
				</div>
                <div>
					<input
						type="radio"
						name="question_2"
						id="q2_o4"
						value="Option 4"
					/>
					<label htmlFor="q2_o4">Option 4</label>
				</div>
            </div>
            <hr></hr>
            <h2 className="questions">How would you say goodbye in spanish?</h2>
            <div className="options">
                <div>
					<input
						type="radio"
						name="question_3"
						id="q3_o1"
						value="Option 1"
					/>
					<label htmlFor="q3_o1">Option 1</label>
				</div>
                <div>
					<input
						type="radio"
						name="question_3"
						id="q3_o2"
						value="Option 2"
					/>
					<label htmlFor="q3_o2">Option 2</label>
				</div>
                <div>
					<input
						type="radio"
						name="question_3"
						id="q3_o3"
						value="Option 3"
					/>
					<label htmlFor="q3_o3">Option 3</label>
				</div>
                <div>
					<input
						type="radio"
						name="question_3"
						id="q3_o4"
						value="Option 4"
					/>
					<label htmlFor="q3_o4">Option 4</label>
				</div>
            </div>
            <hr></hr>
            <h2 className="questions">How would you say goodbye in spanish?</h2>
            <div className="options">
                <div>
					<input
						type="radio"
						name="question_4"
						id="q4_o1"
						value="Option 1"
					/>
					<label htmlFor="q4_o1">Option 1</label>
				</div>
                <div>
					<input
						type="radio"
						name="question_4"
						id="q4_o2"
						value="Option 2"
					/>
					<label htmlFor="q4_o2">Option 2</label>
				</div>
                <div>
					<input
						type="radio"
						name="question_4"
						id="q4_o3"
						value="Option 3"
					/>
					<label htmlFor="q4_o3">Option 3</label>
				</div>
                <div>
					<input
						type="radio"
						name="question_4"
						id="q4_o4"
						value="Option 4"
					/>
					<label htmlFor="q4_o4">Option 4</label>
				</div>
            </div>
            <hr></hr>
            <h2 className="questions">How would you say goodbye in spanish?</h2>
            <div className="options">
                <div>
					<input
						type="radio"
						name="question_5"
						id="q5_o1"
						value="Option 1"
					/>
					<label htmlFor="q5_o1">Option 1</label>
				</div>
                <div>
					<input
						type="radio"
						name="question_5"
						id="q5_o2"
						value="Option 2"
					/>
					<label htmlFor="q5_o2">Option 2</label>
				</div>
                <div>
					<input
						type="radio"
						name="question_5"
						id="q5_o3"
						value="Option 3"
					/>
					<label htmlFor="q5_o3">Option 3</label>
				</div>
                <div>
					<input
						type="radio"
						name="question_5"
						id="q5_o4"
						value="Option 4"
					/>
					<label htmlFor="q5_o4">Option 4</label>
				</div>
            </div>
            <hr></hr>
            <button className="check-answers">Check Answers</button>
        </div>
    );
}

export default Quiz;
