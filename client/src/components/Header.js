
// client/src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/recipes">Recipes</Link>
        <Link to="/ingredients">Ingredients</Link>
        <Link to="/dosha-analysis">Dosha Analysis</Link>
      </nav>
    </header>
  );
}

export default Header;
