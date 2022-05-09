import { signOut } from "firebase/auth";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../../firebase.init";

const Header = () => {
  const [user] = useAuthState(auth);
  const handleSignOut = () => {
    signOut(auth);
  };
  return (
    <>
      <Navbar
        bg="dark"
        sticky="top"
        collapseOnSelect
        expand="lg"
        variant="dark"
      >
        <Container>
          <Navbar.Brand as={Link} to="/">
            GO PORT
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/items">
                Items
              </Nav.Link>
              <Nav.Link as={Link} to="/survey">
                Survey
              </Nav.Link>
              <Nav.Link as={Link} to="/trustedShop">
                Trusted Shop
              </Nav.Link>
              <Nav.Link as={Link} to="/Blogs">
                Blogs
              </Nav.Link>
            </Nav>
            <Nav className="me">
              {user && (
                <>
                  <Nav.Link href="#features">My Items</Nav.Link>
                  <Nav.Link href="#features">Manage Items</Nav.Link>
                  <Nav.Link href="#pricing">Add Items</Nav.Link>
                </>
              )}

              {user ? (
                <button
                  className="btn btn-link text-white text-decoration-none"
                  onClick={handleSignOut}
                >
                  sign out
                </button>
              ) : (
                <Nav.Link as={Link} to="/login">
                  Log in
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
