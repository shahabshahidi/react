import React from 'react';
import {Link} from "react-router-dom";

import './logo.scss';

const Logo = () => {
    return (
        <Link to="/" className="logo">
            Arwankala
        </Link>
    );
};

export default Logo;