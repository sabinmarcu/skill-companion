import React, { useState } from 'react';

import { useQuestions } from './state';
import Question from './Question';

export default () => {
  const questions = useQuestions();
  const [activePanel, setActivePanel] = useState(questions[0]);
  return (
    <>
      {questions.map((key, index) => (
        <Question
          expanded={key === activePanel}
          onChange={() => setActivePanel(key)}
          id={key}
          key={key}
          index={index}
        />
      ))}
    </>
  );
};
