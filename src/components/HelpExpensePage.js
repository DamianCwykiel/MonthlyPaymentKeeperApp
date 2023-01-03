import React from 'react';
import {Link} from 'react-router-dom';

export const HelpExpensePage = () => (
    <div>
        <header className="header">
            <div className="content-container">
                <div className="header__content">
                    <Link className="header__title" to="/">HomePage</Link>
                </div>
                <div className="navlink-content">
                    <h3 className="header__about-app">AboutApp</h3>
                </div>
            </div>
        </header>
        <div className="page-header-about-app"> 
            <div className="content-container">
               <article className="list-item__message">
                    Monthly$Payments€Keeper£App was created as one of projects during WebDeveloper course.<br/>
                    This project uses including: React, Redux, .SCSS, Firebase, Webpack and was been tested in Jest.<br/>
                    The app styled as a home budget-app allows to add, change or remove created expenses. <br/>
                    The database was placed in the Firebase and an access to it is via google or fb account login.<br/>
                    In the app an amount in total you can see above of item's list in the header.<br/>
                    Addidtionally there you can check the currncy amount which was estimated according average 1 EUR ~4.70 zł & 1 USD ~ 4.38
                    (Jan 2023).<br/>
                    <span>Caution!</span> At the first login don't interrupt the poping up auth window due to fail an authorisation process.<br/>
                    Due to prevent fail the app-page should be refresh or reopen.<br/>
                    In some cases if your browser after click on link below asks for certificate for this page you should click show certificate 
                    and add it to your browser certificate list. <br/>
                    If you want to see more projects like this click - <a href ="https://websitedc.gatsbyjs.io/" target="_blank">here.</a>
                </article>
            </div> 
        </div>  
    </div>
);
export default HelpExpensePage; 