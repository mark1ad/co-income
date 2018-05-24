import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';


const Header = () => {
  return (
    <Navbar collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="/">Colorado Personal Income</a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>

      <Navbar.Collapse>
        <Nav pullRight>
          <NavItem eventKey={1} href="#/byyear">
            By Year
          </NavItem>
          <NavItem eventKey={2} href="#/bycounty">
            By County
          </NavItem>
          <NavItem eventKey={3} href="#/about">
            About
          </NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
