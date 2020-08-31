import React from 'react';
import logo from './logo.svg';
import './App.css';
import Content from './components/content';
import Header from './components/header';
import Footer from './components/footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import Create from './components/create';
import Read from './components/read';
import Edit from './components/edit';
import Contact from './components/contact';
import NavLink from 'react-bootstrap/NavLink';


class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <footer className="foot">
          <div>
            <h5>Tv Series </h5>
            <span>&copy; Tv Series 2019 </span>
          </div>
        </footer>

        <div className="App">

          <Navbar bg="light" variant="primary">
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/read">Read</Nav.Link>
              <Nav.Link href="/create">Create</Nav.Link>
              <Nav.Link href="/edit">Edit</Nav.Link>
              <NavLink href="/contact">Contact</NavLink>
            </Nav>
          </Navbar>

          <Switch>
            <Route exact path="/" component={Content} />
            <Route path="/create" component={Create} />
            <Route path="/read" component={Read} />
            <Route path="/edit/:id" component={Edit} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
