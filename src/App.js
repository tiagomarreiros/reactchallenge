import React from 'react';
import TasksListContainer from './containers/TasksListContainer';
import HideCompContainer from './containers/HideCompContainer';
import FormTaskContainer from './containers/FormTaskContainer';


function App() {
  return (
    <div className="App">
      <FormTaskContainer />
      <TasksListContainer />
      <HideCompContainer />
    </div>
  );
}

export default App;
