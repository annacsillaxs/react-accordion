import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const Question = ({ title, info }) => {
  const [isQuestionShown, setIsQuestionShown] = useState(false);

  return (
    <article className="question">
      <header>
        <h4>{title}</h4>
        <button className='btn' onClick={() => setIsQuestionShown(!isQuestionShown)}>
          {isQuestionShown ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {isQuestionShown && <p>{info}</p>}
    </article>
  );
};

export default Question;
