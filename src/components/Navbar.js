import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <nav>

        <Link to="/">Home</Link>

        <Link to="inventory">Inventory</Link>

        <Link to="reviews">Reviews</Link>

      </nav>
    </div>
  )
}

export default Navbar;