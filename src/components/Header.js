import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';

export const Header = ({ startLogout }) => (
    <header className="header">
        <div className="content-container">
            <div className="header__content">
                <Link className="header__title" to="/dashboard">
                    <h1>Monthly$Payments€Keeper£App</h1>
                </Link>
                <button className="login-button button--link" onClick={startLogout}>Logout</button>
            </div>
            <div className="navlink-content">
                <h3><Link className="header__about-app" to="/help">About App</Link></h3>
            </div>
        </div>
    </header>
);
const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
});

export default connect (undefined, mapDispatchToProps)(Header);