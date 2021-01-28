import React from 'react';
import './App.css';
import './pages/Dishes.css';
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
      <header class="site-header">
        <div class="wrapper site-header__wrapper">
          <a href="#" class="brand">Brand</a>
          <nav class="nav">
            <button class="nav__toggle" aria-expanded="false" type="button">
              menu
            </button>
            <ul class="nav__wrapper">
              <li class="nav__item">
                <Link to="/">料理一覧</Link>
              </li>
              <li class="nav__item">
                <Link to="/new_dish">新しい料理の登録</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

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

  </Router>
  );
}
