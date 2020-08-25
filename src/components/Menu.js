import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll'; 

const Menu = () => (
  <div className="menu">
    <ul className="nav-links">
      <AnchorLink href='#features'>Features</AnchorLink>
      <AnchorLink href='#process'>Our Process</AnchorLink>
      <a href="mailto:hello@smyl.com" className="cta-2">Contact</a>
    </ul>
  </div>
);

export default Menu;