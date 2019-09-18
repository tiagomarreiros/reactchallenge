import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import TextField from '@material-ui/core/TextField';
import styles from '../styles/styleComps';

  class FormTask extends React.Component {
   
    constructor(props){
        super(props);
        this.state = {
            task: '' 
        }
    };
       
    render(){      
        const { task } = this.state;
        const { classes } = this.props;

        return (
          <form className={classes.container} noValidate autoComplete="off">
            <TextField
                id="outlined-task-input"
                label="Create new task here..."
                className={classes.textField}
                onChange={e => this.setState({ task: e.target.value})}
                name="Create new task here..."
                autoComplete="Create new task here..."
                margin="normal"
                variant="outlined"
                value={task}
              />
              <Button variant="contained" color="primary" className={classes.button} 
                      onClick={() => {
                        this.props.putTasks(task)
                        this.setState({task: ''})
                      } 
                    }
                      >
                Create
              </Button>
          </form>
        );
    }
  }
  

  export default withStyles(styles)(FormTask)