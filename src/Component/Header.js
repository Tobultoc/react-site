
import React, { Component } from 'react';
import { Navbar, Nav, FormControl, Container, Form, Button } from "react-bootstrap";
import logo from './logo1.png';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from '../Pages/Home';
import About from '../Pages/About';
import Contacts from '../Pages/Contacts';
import Blog from '../Pages/Blog';

export default class Header extends Component {
    render() {
        return (
          <>
            <Navbar sticky="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/">
                    <img
                        src={logo}
                        height="30"
                        width="30"
                        className="d-inline-block align-top"
                        alt="Logo"
                    /> Design site
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/"> Home </Nav.Link>
                        <Nav.Link href="/about"> About us </Nav.Link>
                        <Nav.Link href="/contacts"> Contacts </Nav.Link>
                        <Nav.Link href="/blog"> Blog </Nav.Link>
                    </Nav>
                    <Form className="d-flex">
                        <FormControl
                            type="text"
                            placeholder="Search"
                            className="d-inline mx-2"
                        />
                        <Button variant="outline-info">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
            </Navbar>

            <Router>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/contacts" component={Contacts} />
                    <Route exact path="/blog" component={Blog} />
                </Switch>
            </Router>
          </>
        );
    }
}
