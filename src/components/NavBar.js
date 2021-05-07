import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  Button
} from 'reactstrap';
import { signInUser, signOutUser } from '../helpers/auth';

const NavBar = ({ user }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const authenticated = () => (
    <>
    <NavItem>
      <Link className="nav-link" to="/add-player">Add Students</Link>
    </NavItem>
    <NavItem>
      <Link className="nav-link" to="/team">Team</Link>
    </NavItem>
    </>
  );

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
         {user && authenticated()}
         <div>
           {
             user !== null
             && <NavItem>
               {
                  user
                    ? <Button color="info" onClick={signOutUser}>Sign Out</Button>
                    : <Button color="info" onClick={signInUser}>Sign In</Button>
               }
             </NavItem>
           }
         </div>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

NavBar.propTypes = {
  user: PropTypes.any
};

export default NavBar;
