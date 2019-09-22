import React from 'react';

import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';


import TasksListContainer from './containers/TasksListContainer';
import HideCompContainer from './containers/HideCompContainer';
import FormTaskContainer from './containers/FormTaskContainer';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
  },
}));



function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
      style={{ minHeight: 300, maxWidth: '100%' }}
      >
        <Grid item>
          <Paper className={classes.root}>
                <FormTaskContainer />
                <HideCompContainer />
                <TasksListContainer />
          </Paper> 
        </Grid>       
      </Grid>
            
    </div>
  );
}

export default App;
