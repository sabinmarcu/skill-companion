import {
  useState, useCallback, useMemo, createContext, useContext,
} from 'react';

export const useQuestionFactory = ({
  range: [start, end],
  text,
  processor,
  initial,
  type,
  extra,
}) => {
  const init = initial || start;
  const [value, setValue] = useState(processor ? processor(init) : init);
  const [dirty, setDirty] = useState(false);
  const handler = useCallback(
    (_, val) => {
      const newVal = parseInt(val, 10);
      setValue(processor ? processor(newVal) : newVal);
      setDirty(true);
    },
    [setValue],
  );
  const result = useMemo(
    () => value / end,
    [value, end],
  );
  return {
    result,
    handler,
    start,
    end,
    text,
    type,
    initial,
    dirty,
    value,
    extra,
  };
};

export const useResultFactory = (questions, handler) => {
  const valuesMap = useMemo(
    () => Object.entries(questions).reduce(
      (prev, [key, { result }]) => ({
        ...prev,
        [key]: result,
      }),
      {},
    ),
    [questions],
  );
  const value = useMemo(
    () => handler(valuesMap),
    [valuesMap],
  );
  return value;
};

const useQuestionsFactory = () => ({
  q1: useQuestionFactory({
    range: [0, 25],
    text: 'How many shades of Cyan can you distinguish in the image?',
    type: 'image',
  }),
  q2: useQuestionFactory({
    range: [0, 10],
    text: 'How much bigger is X than Y?',
    initial: 5,
    processor: (val) => Math.abs(val - 5) * 2,
    type: 'image',
  }),
  q3: useQuestionFactory({
    range: [0, 20],
    initial: 20,
    text: 'Pronunce out loud the following. How many mistakes did you have?',
    processor: (val) => 20 - val,
    type: 'text',
    extra: {
      text: 'Three Swedish switched witches watch three Swiss Swatch watch switches. Which Swedish switched witch watch which Swiss Swatch watch switch?',
    },
  }),
  q4: useQuestionFactory({
    range: [0, 8],
    text: 'How many holes are in this shirt?',
    type: 'image',
  }),
  q5: useQuestionFactory({
    range: [0, 10],
    text: 'How many images did you see?',
    type: 'frequency',
    extra: {
      count: 10,
      frequency: 0.65,
    },
  }),
  q6: useQuestionFactory({
    range: [0, 10],
    text: 'Was the third image a pony? Level of certainty (0 - 10)?',
    type: 'frequency',
    extra: {
      count: 10,
      frequency: 0.65,
    },
  }),
});

const useResultsFactory = (questions) => ({
  occipital: useResultFactory(questions, ({ q1, q2 }) => (q1 + q2) / 2),
  frontal: useResultFactory(questions, ({ q4 }) => q4),
  parietal: useResultFactory(questions, ({ q3 }) => q3),
  temporal: useResultFactory(questions, ({ q5, q6 }) => (q5 + q6) / 2),
});

export const useQuestionnaire = () => {
  const questions = useQuestionsFactory();
  const results = useResultsFactory(questions);
  return {
    questions,
    results,
  };
};

export const StateContext = createContext({
  questions: [],
  results: {},
});

export const useQuestions = () => {
  const { questions } = useContext(StateContext);
  return Object.keys(questions);
};

export const useQuestion = (id) => {
  const { questions } = useContext(StateContext);
  return questions[id];
};

export const useResults = () => {
  const { results } = useContext(StateContext);
  return results;
};
