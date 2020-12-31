import React from 'react';
import { Link } from 'react-router-dom';



const Navbar = () => {
    const links = (
      <>
      <ul>
        <li>
            <Link to="/approved">
                Approved
            </Link>
        </li>
        <li>
            <Link to="/project-dashboard">
                <span className='hide-sm'>Dashboard</span>
            </Link>
        </li>
        <li>
                Logout
        </li>
      </ul>
    

   
        <ul>
            <li>
                <Link to="/ideas-pool">
                    All Ideas
                </Link>
            </li>
            <li>
                <Link to="/profile">
                    My Profile
                </Link>
            </li>
          <li><Link to="/register">Register</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
        </>
    );
   

    return (
      <nav className="navbar bg-dark">
        <h1>
          <Link to="/"> Devability</Link>
        </h1>
        {links}
      </nav>
    )
}

export default Navbar;
