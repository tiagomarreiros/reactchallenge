import React from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
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
      <Container maxWidth="sm">
          <FormTaskContainer />
          <HideCompContainer />
          <TasksListContainer />
      </Container>
        
        {/* <Paper className={classes.root}>

        <Grid container
              direction="row"
              justify="center"
              alignItems="center" 
              spacing={2}
        >
            <Grid item>
              <FormTaskContainer />
            </Grid>
         </Grid> 
          <Grid container
                direction="row"
                justify="center"
                alignItems="center" 
                spacing={2}>
            <Grid item>
              <HideCompContainer />
            </Grid>
            </Grid>
  
          <Grid container
                direction="row"
                justify="center"
                alignItems="center" spacing={2}>  
            <Grid item>
              <TasksListContainer />
            </Grid>
        </Grid>

          
        </Paper> */}
  
      
    </div>
  );
}

export default App;
