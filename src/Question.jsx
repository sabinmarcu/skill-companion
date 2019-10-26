/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';

import {
  Typography,
  Slider,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
} from '@material-ui/core';
import styled from '@emotion/styled';

import { useQuestion } from './state';
import ImageQuestion from './ImageQuestion';
import TextQuestion from './TextQuestion';

const ExpansionPanelWrapper = ({ className, ...props }) => (
  <ExpansionPanelSummary
    {...props}
    classes={{
      content: className,
    }}
  />
);
const StyledExpansionPanelSummary = styled(ExpansionPanelWrapper)`
  display: flex;
  justify-content: space-between;
`;

export default ({
  id,
  index,
  expanded,
  onChange,
}) => {
  const {
    text,
    type,
    initial,
    start,
    end,
    handler,
    value,
    dirty,
  } = useQuestion(id);
  return (
    <ExpansionPanel
      key={id}
      expanded={expanded}
      onChange={onChange}
    >
      <StyledExpansionPanelSummary>
        <Typography variant="h6">{`Question ${index + 1}`}</Typography>
        {dirty && <Typography variant="h6">{`Value: ${value}`}</Typography>}
      </StyledExpansionPanelSummary>
      <ExpansionPanelDetails>
        <div style={{ width: '100%' }}>
          <Typography variant="h6" component="h6">{text}</Typography>
          {id && type === 'image' && <ImageQuestion id={id} />}
          {id && type === 'text' && <TextQuestion id={id} />}
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
        </div>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
};
