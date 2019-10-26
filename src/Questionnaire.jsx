import React from 'react';
import styled from '@emotion/styled';
import { useQuestions } from './state';
import Question from './Question';

const Container = styled.section`
  @media (min-width: 768px) {
    max-height: 100%;
    overflow-y: auto;
  }
`;
export default () => {
  const questions = useQuestions();
  return (
    <Container>
      {questions.map((key, index) => (
        <Question
          key={key}
          id={key}
          index={index + 1}
        />
      ))}
    </Container>
  );
};
