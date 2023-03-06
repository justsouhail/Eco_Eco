

import React from "react";
import { Link } from "react-router-dom";


function Navbar() {
  return (
  

    <nav>
      <label className="logo"> Store Shop 🛒</label>
      <ul>
        <li><input type="text" placeholder="Cherchez un produit" className="sign-up_nav--input" required /></li>
        <li><a href="/">Home</a></li>
         <li><Link to={`/pages/formulaire`}>Sign-up </Link></li>
        
        <li>
      
      
        </li>
        <li className='active'><a href="#">Contactez-nous</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
