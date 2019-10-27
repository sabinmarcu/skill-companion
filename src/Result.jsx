import React from 'react';
import {
  Card,
  CardHeader,
  CardContent,
} from '@material-ui/core';
import styled from '@emotion/styled';
import Brain from './assets/Brain';
import { useResults } from './state';

const BrainWrapper = styled.div`
  width: 100%;
  min-height: 300px;
  height: 100%;
  svg {
    width: 100%;
    height: 100%;
  }
`;

const StyledCard = styled(Card)`
  height: 100%;
  /* margin: 10px; */
`;

export default () => {
  const results = useResults();
  return (
    <StyledCard>
      <CardHeader title="Result" />
      <CardContent>
        <BrainWrapper>
          <Brain
            colors={{
              frontal: '#fc0',
              temporal: '#0cf',
              parietal: '#c0f',
              occipital: '#cf0',
            }}
            weights={results}
          />
        </BrainWrapper>
      </CardContent>
    </StyledCard>
  );
};
