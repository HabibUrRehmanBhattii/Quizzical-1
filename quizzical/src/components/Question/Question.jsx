import parse from "html-react-parser";
import React from "react";
import classes from "./Question.module.css"

const Question = props => {
    const renderElement = props.questions.map((question) => {
        return (
            <>
                <div key={question.id}>
                    <h2 className="questions">{parse(question.question)}</h2>
                    <div className="options">
                        {question.answers.map((answer) => {
                            return (
                                <div key={answer}>
                                    <input
                                        type="radio"
                                        id={answer}
                                        name={question.id}
                                        value={answer}
                                        onChange={props.handleSubmit}
                                        disabled={props.showResult}
                                    />
                                    <label
                                        className={`${classes.label} ${props.selectedAnswerClass(
                                            answer,
                                            question
                                        )}`}
                                        htmlFor={answer}
                                    >
                                        {parse(answer)}
                                    </label>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </>
        );
    });
return <>{renderElement}</>;
}

export default Question