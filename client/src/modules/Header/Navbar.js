import React, { Component } from 'react';
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'

class navbar extends Component {
  // constructor(...args) {
  //     super(...args);
  // }

  componentDidMount() {
    if (localStorage.getItem('token') && !this.props.user) {
      this.props.getUser();
    }
  }

  render() {
    const { user, logoutUser } = this.props;
    return (
      <>
        <header>
          <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
            <Container>
              <LinkContainer to='/'>
                <Navbar.Brand><img
        alt=""
        src="/images/lumenLogo.png"
        height="30"
        className="d-inline-block align-top"
      /></Navbar.Brand>
              </LinkContainer>
              <Navbar.Toggle aria-controls='basic-navbar-nav' />
              <Navbar.Collapse className="justify-content-end" id='basic-navbar-nav'>
                {/* <Route render={({ history }) => <SearchBox history={history} />} /> */}
                <Nav className='ml-auto'>
                <LinkContainer to='/specs'>
                    <Nav.Link>
                      Specs
                    </Nav.Link>
                  </LinkContainer>
                  <LinkContainer to='/lumen'>
                    <Nav.Link>
                      Lumen
                    </Nav.Link>
                  </LinkContainer>
                  <LinkContainer to='/contact-us'>
                    <Nav.Link>
                      Contact Us
                    </Nav.Link>
                  </LinkContainer>
                  {user ? (
                    <NavDropdown title={user.name} id='username'>
                      <LinkContainer to='/profile'>
                        <NavDropdown.Item>Profile</NavDropdown.Item>
                      </LinkContainer>
                      <NavDropdown.Item onClick={logoutUser}>
                        Logout
                  </NavDropdown.Item>
                    </NavDropdown>
                  ) : (
                    <LinkContainer to='/login'>
                      <Nav.Link>
                        <i className='fas fa-user'></i> Sign In
                  </Nav.Link>
                    </LinkContainer>
                  )}
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </header>

      </>
    );
  }
}


export default navbar;