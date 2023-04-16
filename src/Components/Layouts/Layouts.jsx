import React from 'react';
import Header from "../Header";

import './layouts.scss'

const Layouts = ({children}) => {
    return (
        <section className="layout">
            <Header/>
            <main className="mai--content">
                {children}
            </main>
        </section>
    );
};

export default Layouts;