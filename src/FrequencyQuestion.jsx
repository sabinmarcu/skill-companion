/* eslint-disable import/no-dynamic-require,global-require,react/no-array-index-key */

import React, {
  useEffect,
  useState,
  useRef,
  useMemo,
} from 'react';
import styled from '@emotion/styled';
import {
  Button,
} from '@material-ui/core';

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
`;

const Actions = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 400px;
  background: #ccc;
  position: relative;
`;

const Image = styled.img`
  display: ${({ visible }) => (visible ? 'block' : 'none')};
  width: 100%;
  height: 100%;
  position: absolute;
  object-fit: contain;
`;

const ctx = require.context(
  './assets',
  true,
  /\.png$/,
);
const files = ctx.keys().reduce(
  (prev, it) => {
    const [, set, file] = it.split('/');
    const [fileName] = file.split('.');
    return {
      ...prev,
      [set]: {
        ...prev[set],
        [fileName]: ctx(it),
      },
    };
  },
  {},
);


export default ({ id, extra: { count, frequency = 0.65 } }) => {
  const [started, start] = useState(false);
  const images = useMemo(
    () => (new Array(count))
      .fill(0)
      .map((_, index) => files[id][`img${index + 1}`]),
    [count, id],
  );
  const [iteration, setIteration] = useState(0);
  const interval = useRef(null);
  useEffect(
    () => {
      if (started && !interval.current) {
        interval.current = setInterval(
          () => {
            if (iteration >= count) {
              start(false);
            }
            setIteration(iteration + 1);
            clearInterval(interval.current);
            interval.current = null;
          },
          frequency * 1000,
        );
      } else {
        setIteration(0);
      }
    },
    [started, frequency, count, setIteration, iteration],
  );
  return (
    <Container>
      <Wrapper>
        {images.map((img, index) => (
          <Image
            visible={iteration === index}
            key={index}
            src={img}
          />
        ))}
      </Wrapper>
      <Actions>
        <Button onClick={() => start(true)}>Start</Button>
      </Actions>
    </Container>
  );
};
