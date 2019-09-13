import React from 'react';
import FormTask from './components/FormTask';
import ListTasks from './components/ListTasks';
import HideComp from './components/HideComp';

function App() {
  return (
    <div className="App">
      <FormTask />
      <ListTasks />
      <HideComp />
    </div>
  );
}

export default App;
