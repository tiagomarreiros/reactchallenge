import React from 'react';
import FormTask from './components/FormTask';
import TasksList from './components/TasksList';
import HideComp from './components/HideComp';

function App() {
  return (
    <div className="App">
      <FormTask />
      <TasksList />
      <HideComp />
    </div>
  );
}

export default App;
