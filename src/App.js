import React from 'react';
import './App.css';
import NewDish from './pages/NewDish';
import Dishes from './pages/Dishes'
import EditDish from './pages/EditDish'
import Record from './pages/Record'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">料理一覧</Link>
            </li>
            <li>
              <Link to="/new_dish">新しい料理の登録</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path={"/dish/:dishId/edit"}>
            <EditDish />
          </Route>
          <Route path="/new_dish">
            <NewDish />
          </Route>
          <Route path="/record">
            <Record />
          </Route>
          <Route path="/">
            <Dishes />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
