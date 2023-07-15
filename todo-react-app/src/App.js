import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import TodoList from './component/TodoList';
import CreateTodo from './component/CreateTodo';

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <nav>
          <ul>
            <li>
              <Link to="/todos">Todo List</Link>
            </li>
            <li>
              <Link to="/create">Create Todo</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/todos">
            <TodoList />
          </Route>
          <Route path="/create">
            <CreateTodo />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
