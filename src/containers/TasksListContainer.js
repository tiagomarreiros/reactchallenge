import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import * as actionCreators from '../redux/actions/actionCreators';
import { getVisibleTasks, getSortList } from '../redux/selectors';
import TasksList from '../components/TasksList';

class TasksListContainer extends React.Component {

  render(){
    return (
        <TasksList 
            setSortList={this.props.setSortList}
            tasks={this.props.tasks}
            updateTask={this.props.updateTask}
            deleteTask={this.props.deleteTask}
            editTask={this.props.editTask}
            toggleTask={this.props.toggleTask} 
        />     
      );

  }
  
}
const mapStateToProps = (state) => ({
  // tasks: getVisibleTasks(state.tasks, state.visibilityFilter)
  tasks: getVisibleTasks(state),
  tasksSorted: getSortList(state),
  //testImmutable: state.testImmutable //test
})

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actionCreators, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TasksListContainer)