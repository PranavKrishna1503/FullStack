import React from 'react';
import { Navbar, Nav } from 'rsuite';
import HomeIcon from '@rsuite/icons/legacy/Home';
import CogIcon from '@rsuite/icons/legacy/Cog';
import { Link } from 'react-router-dom';

const CustomNavbar = () => {
    return (
        <div>
            <Navbar>
    <Navbar.Brand href="#">CHESS</Navbar.Brand>
    <Nav>
      <Nav.Item icon={<HomeIcon />}> <Link to={`/home`}>Home</Link>  </Nav.Item>
      <Nav.Item>   <Link to={`/about`}> About</Link>   </Nav.Item>
        <Nav.Item>   <Link to={`/contact`}>Contact</Link>   </Nav.Item>
    </Nav>
  </Navbar>
        </div>
    );
  }
  
  export default CustomNavbar;
  
  {/* <Nav.Item>News</Nav.Item>
<Nav.Item>Products</Nav.Item> */}



{/* <Nav.Item>Company</Nav.Item>
<Nav.Item>Team</Nav.Item> */}



{/* <Nav.Item>Via email</Nav.Item>
<Nav.Item>Via telephone</Nav.Item> */}
{/* </Nav.Menu>
</Nav.Menu> */}



{/* <Nav pullRight>
  <Nav.Item icon={<CogIcon />}>Settings</Nav.Item>
</Nav> */}