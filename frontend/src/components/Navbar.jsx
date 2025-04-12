import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return(
        <nav style={{padding: '10px', backgroundColor:'#007bff', color:'white'}}>
            <Link to="/" style={{ marginRight: '10px', color: 'white', textDecoration: 'none' }}>Home</Link>
            <Link to="/create" style={{ color: 'white', textDecoration: 'none' }}>Create Task</Link>
        </nav>
    )
}

export default Navbar 