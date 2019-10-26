/* eslint-disable global-require,import/no-dynamic-require */

import React from 'react';
import {
  CardMedia,
} from '@material-ui/core';
import styled from '@emotion/styled';

const StyledCardMedia = styled(CardMedia)`
  height: 300px;
  background-size: contain;
`;

export default ({ id }) => (
  <StyledCardMedia
    image={require(`./assets/${id}/image.png`)}
  />
);
