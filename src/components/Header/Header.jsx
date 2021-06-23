import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';

const Header = (props) => {
      return (
        <header className={s.header}>
          {/* <img src="https://varlamov.me/2019/gryaz/01.jpg"></img> */}
          <div className={s.loginContainer}>
              <div className={s.login}>
                { props.isAuth ? props.login 
                  : <NavLink to={'/login'}>Login</NavLink> }
              </div>
          </div>
          <div className={s.logout}>
            <button onClick={props.LogoutUser}>Logout</button>
          </div>
        </header>
      );
}

export default Header;