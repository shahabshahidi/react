import React, {useEffect, useState} from 'react';
import {NavLink} from "react-router-dom";

import './navigation.scss';
import {useStateContext} from "../../Contexts/ContextProvider";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from '@mui/icons-material/Close';

const initialMenus = [
    {id: 1, title: "home", path: "/"},
    {id: 2, title: "shop", path: "/shop"},
    {id: 3, title: "about", path: "/about"}
];

const Navigation = () => {


    const {smallSize} = useStateContext();
    const [navSmActive, setNavSmActive] = useState(false);
    const [menus, setMenus] = useState(initialMenus)

    useEffect(() => {
        fetch(`http://localhost:3001/menus`)
            .then(response => response.json())
            .then(menus => setMenus(menus));
    }, []);


    function handleOpenNav() {
        setNavSmActive(true);
    }

    function handleCloseNav() {
        setNavSmActive(false);
    }

    const allMenus = menus ? menus.map(menu => {
        return (
            <li key={menu.id} className="navigation--item">
                <NavLink to={menu.path}
                         className={`navigation--link ${({isActive}) => isActive ? "active" : ""}`}>
                    {menu.title}
                </NavLink>
            </li>
        );
    }) : null;

    return (

        <>
            {smallSize && <span className="icon" onClick={handleOpenNav}><MenuIcon/></span>}

            <nav className={`navigation ${navSmActive ? 'is__active' : ''}`}>
                {smallSize && <span className="icon iconClose" onClick={handleCloseNav}><CloseIcon/></span>}
                <ul className="navigation--list">
                    {allMenus && allMenus}
                </ul>
            </nav>
        </>

    );
};

export default Navigation;