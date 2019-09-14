import React from 'react';
import { connect } from 'react-redux'

// import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
// import IconButton from '@material-ui/core/IconButton';
// import CommentIcon from '@material-ui/icons/Comment';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import ListSubheader from '@material-ui/core/ListSubheader';
import { withStyles } from '@material-ui/core/styles';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../redux/actions/actionCreators';

const styles = theme => ({
  
  root: {
    width: '100%',
    maxWidth: 600,
    backgroundColor: theme.palette.background.paper,
  },
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
});

class TasksList extends React.Component {
  
  
 /*  const handleToggle = value => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  }; */
  render(){
    const { tasks, classes } = this.props

    console.log('list props', this.props)

    return (
      <List className={classes.root}
          subheader={
              <ListSubheader component="div" id="nested-list-subheader">
              <Button className={classes.button}>Tasks</Button>
              </ListSubheader>
          }
      >
        
          {
            tasks.tasks.map( (task, index) => (
          
              <ListItem key={index} role={undefined} dense button onClick={() => this.props.toggleTask(task.id)} >
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={task.completed}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ 'aria-labelledby': index }}
                />
              </ListItemIcon>
              <ListItemText id={index} primary={task.name} />
              <ListItemSecondaryAction>
                  <Button variant="contained" color="primary" className={classes.button}>
                      Edit
                      <EditIcon className={classes.rightIcon} />
                  </Button>
                  <Button variant="contained" color="secondary" className={classes.button}>
                      Delete
                      <DeleteIcon className={classes.rightIcon} />
                  </Button>
              </ListItemSecondaryAction>
            </ListItem>
  
          )          
          
        )}
      </List>
      );

  }
  
}
const mapStateToProps = state => ({
  tasks: state.tasks
})

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actionCreators, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(TasksList))