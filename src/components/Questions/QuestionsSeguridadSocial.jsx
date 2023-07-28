import React, { useEffect, useState } from "react";
import { fetchResolve } from "../../helpers/fetchResolve";

export const QuestionsSeguridadSocial = () => {
  const [questions, setQuestions] = useState([]);
  const [randomQuestion, setRandomQuestion] = useState(null);
  const [category, setCategory] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isCorrect, setIsCorrect] = useState(false);

  useEffect(() => {
    fetchResolve()
      .then((resolvedQuestions) => {
        if (resolvedQuestions && resolvedQuestions.categorias) {
          const categoryQuestions = resolvedQuestions.categorias.find(
            (cat) => cat.categoria === "Seguridad Social"
          );
          if (categoryQuestions && categoryQuestions.preguntas.length > 0) {
            setQuestions(categoryQuestions.preguntas);
            setCategory(categoryQuestions.categoria);
            const randomIndex = Math.floor(Math.random() * categoryQuestions.preguntas.length);
            setRandomQuestion(categoryQuestions.preguntas[randomIndex]);
          }
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleOptionSelect = (selectedOption) => {
    const question = randomQuestion;
    setSelectedOption(selectedOption);
    setIsCorrect(selectedOption === question.respuesta_correcta);
    if (selectedOption === question.respuesta_correcta) {
      alert("Respuesta correcta");
    }
  };

  return (
    <div className="question_card">
      {randomQuestion && (
        <div className="question_content">
          <h2 className="question_category">{category}</h2>
          <h3 className="question_text">{randomQuestion.pregunta}</h3>
          <div className="options_container">
            {Object.entries(randomQuestion.opciones).map(([key, value]) => (
              <div
                key={key}
                className={`option_item ${selectedOption === key ? (isCorrect ? "correct" : "incorrect") : ""}`}
                onClick={() => handleOptionSelect(key)}
              >
                {!selectedOption && (
                  <input
                    type="radio"
                    id={`pregunta-${randomQuestion.pregunta}-${key}`}
                    name={`pregunta-${randomQuestion.pregunta}`}
                    value={key}
                    onChange={() => {}}
                  />
                )}
                <label htmlFor={`pregunta-${randomQuestion.pregunta}-${key}`} className="option_label">
                  {value}
                </label>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
