import React from 'react';
import { Link } from 'react-router-dom';

const Splash = () => (
    <div className="splash">
        <h1> Routing songs </h1>
        <h2> Loading... </h2>
        <Link to="/"> Start </Link>
    </div>
);

export default Splash;
