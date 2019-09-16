import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import TextField from '@material-ui/core/TextField';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../redux/actions/actionCreators';

const styles = theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 450,
    },
    dense: {
      marginTop: 19,
    },
    menu: {
      width: 200,
    },
    button: {
      margin: theme.spacing(1),
    },
    input: {
      display: 'none',
    },
});

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
        console.log('form props', this.props.tasks)
        console.log('form state::::::', task)

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
                        this.props.addTask(task)
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
  FormTask.propTypes = {
    classes: PropTypes.object.isRequired,
  };

  const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(actionCreators, dispatch);
  }

  const mapStateToProps = state => ({
    edit: state.tasks.edit
  })

  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(withStyles(styles)(FormTask))