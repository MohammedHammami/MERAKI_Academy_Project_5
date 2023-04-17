import React from 'react'
import Nav from 'react-bootstrap/Nav';
const Navbar = () => {
  return (
    <div>
<Nav defaultActiveKey="/Register" as="ul">
      <Nav.Item as="li">
        <Nav.Link href="/Register">Register</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link href="/login">login</Nav.Link>
      </Nav.Item>
    </Nav>

    </div>
  )
}

export default Navbar