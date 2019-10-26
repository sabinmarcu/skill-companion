import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
} from '@material-ui/core';

import { useQuestionnaire, StateContext } from './state';
import { Grid, Wrapper } from './Layout';
import Debug from './Debug';
import Questionnaire from './Questionnaire';
import Result from './Result';

function App() {
  const store = useQuestionnaire();
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h4">Skill Companion</Typography>
        </Toolbar>
      </AppBar>
      <StateContext.Provider value={store}>
        <Grid>
          <Wrapper>
            <Questionnaire />
          </Wrapper>
          <Wrapper>
            <Result />
          </Wrapper>
          <Wrapper full>
            <Debug />
          </Wrapper>
        </Grid>
      </StateContext.Provider>
    </>
  );
}

export default App;
