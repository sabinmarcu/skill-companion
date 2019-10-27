/* eslint-disable global-require,import/no-dynamic-require */

import React from 'react';
import {
  CardContent,
  Typography,
} from '@material-ui/core';

export default ({ extra: { text } }) => (
  <CardContent>
    <Typography component="p">
      {text}
    </Typography>
  </CardContent>
);
