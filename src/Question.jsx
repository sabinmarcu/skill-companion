import React from 'react';

import {
  Card,
  CardHeader,
  CardContent,
  Slider,
} from '@material-ui/core';
import styled from '@emotion/styled';

import { useQuestion } from './state';
import ImageQuestion from './ImageQuestion';
import TextQuestion from './TextQuestion';

const StyledCard = styled(Card)`
  margin: 10px;
`;

export default ({ id, index }) => {
  const {
    text,
    type,
    initial,
    start,
    end,
    handler,
  } = useQuestion(id);
  return (
    <StyledCard>
      <CardHeader title={`Question ${index}`} subheader={text} />
      {id && type === 'image' && <ImageQuestion id={id} />}
      {id && type === 'text' && <TextQuestion id={id} />}
      <CardContent>
        <Slider
          min={start}
          max={end}
          defaultValue={initial}
          onChange={handler}
          valueLabelDisplay="auto"
          marks={[
            { value: start, label: start },
            { value: end, label: end },
          ]}
        />
      </CardContent>
    </StyledCard>
  );
};
