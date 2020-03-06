import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

import Todo from './containers/todo';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const inlineStyle = {
    paddingLeft: '100px',
    paddingRight: '100px',
  }
  return (
    <div>
      <Navbar variant="dark" bg="dark" className="d-flex justify-content-between" style={inlineStyle}>
        <Navbar.Brand href="#home">ToDo List</Navbar.Brand>
        <Nav>
          <Nav.Link>Signup</Nav.Link>
          <Nav.Link>Login</Nav.Link>
        </Nav>
      </Navbar>
      <Todo />
    </div>
  );
}

export default App;
