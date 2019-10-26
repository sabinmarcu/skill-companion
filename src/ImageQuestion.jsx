/* eslint-disable global-require,import/no-dynamic-require */

import React from 'react';
import styled from '@emotion/styled';

const StyledImage = styled.img`
  width: 100%;
  object-fit: contain;
`;

export default ({ id }) => (
  <StyledImage
    src={require(`./assets/${id}/image.png`)}
  />
);
