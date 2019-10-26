/* eslint-disable global-require,import/no-dynamic-require */

import React from 'react';
import {
  CardContent,
  Typography,
} from '@material-ui/core';

export default ({ id }) => (
  <CardContent>
    <Typography component="p">
      {require(`./assets/${id}`).default}
    </Typography>
  </CardContent>
);
