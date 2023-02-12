import React from 'react';
import Link from 'next/link';
import { Navbar } from 'flowbite-react';

const Header = () => {
  return (
    <Navbar className=' fixed z-50 w-full px-4 md:px-24  items font-roboto   border-b   bg-opacity-60 backdrop-filter backdrop-blur-lg' fluid={true} rounded={true}>
      <Navbar.Brand to='/navbars'>
        <span className=' font-roboto self-center text-black whitespace-nowrap text-xl font-semibold'>Blog.</span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link href='/'>
          Home
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
