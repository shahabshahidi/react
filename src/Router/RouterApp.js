import React from 'react';
import {Route, Routes} from "react-router-dom";
import HomePage from "../Pages/HomePage";
import ShopPage from "../Pages/ShopPage";
import {BlogPage,SingleBlog} from "../Pages/BlogPage";
import About from "../Pages/About";
import Login from "../Pages/Login";
import Panel from "../Pages/Panel";

const RouterApp = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/shop" element={<ShopPage/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/blogs" element={<BlogPage/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/panel" element={<Panel/>}/>
            <Route path="/blog/:id" element={<SingleBlog/>}/>
        </Routes>
    );
};

export default RouterApp;