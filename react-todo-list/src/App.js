import React from 'react';
import ReactDOM from 'react-dom';
import List from './components/list';
import ListItem from './components/ListItem';

const todos = [{todo: "wake up", id: 1}, {todo: "breakfast", id: 2}, {todo: "study", id: 3}];

// jsx
const App = () => {
  return <>
  <div>
    <h1>Todo list</h1>
    <List actions = {todos}/>
  </div>
  </>
};

export default App;
