import React, { useContext } from 'react';
import {
  Card,
  CardHeader,
  CardContent,
  Divider,
  Typography,
} from '@material-ui/core';

import { StateContext } from './state';

export default () => {
  const { questions, results } = useContext(StateContext);
  return (
    <Card>
      <CardHeader title="Debug" />
      <CardContent>
        <Typography variant="h6">Questions: </Typography>
        <Divider />
        {Object.entries(questions).map(([name, {
          result, start, end, text,
        }]) => (
          <div key={name}>
            <Typography component="p">
              {`Name: ${name}`}
            </Typography>
            <Typography component="p">
              {`Text: ${text}`}
            </Typography>
            <Typography component="p">
              {`Range: ${start} - ${end}`}
            </Typography>
            <Typography component="p">
              {`Result: ${result}`}
            </Typography>
            <Divider />
          </div>
        ))}
      </CardContent>
      <CardContent>
        <Typography variant="h6">Results: </Typography>
        <Divider />
        {Object.entries(results).map(([area, result]) => (
          <div key={area}>
            <Typography component="p">
              {`Area: ${area}`}
            </Typography>
            <Typography component="p">
              {`Result: ${result}`}
            </Typography>
            <Divider />
          </div>
        ))}
      </CardContent>
    </Card>
  );
};
