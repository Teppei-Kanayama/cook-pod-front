import React from 'react';
import NewDish from './pages/NewDish';
import Dishes from './pages/Dishes'
import EditDish from './pages/EditDish'
import Record from './pages/Record'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <header>
        <div>
          <Navbar bg="light">
            <Navbar.Brand href="/">CookPod</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="/">料理一覧</Nav.Link>
              <Nav.Link href="/new_dish">新しい料理の登録</Nav.Link>
            </Nav>
          </Navbar>
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
