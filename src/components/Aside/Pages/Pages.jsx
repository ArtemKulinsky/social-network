import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Pages.module.css';

const Pages = () => {
  return (
        <ul className={s.items}>
          <li className={s.item}><NavLink to="/profile" activeClassName={s.active}>Profile</NavLink></li>
          <li className={s.item}><NavLink to="/dialogs" activeClassName={s.active}>Messages</NavLink></li>
          <li className={s.item}><NavLink to="/news" activeClassName={s.active}>News</NavLink></li>
          <li className={s.item}><NavLink to="/music" activeClassName={s.active}>Music</NavLink></li>
          <li className={s.item}><NavLink to="/settings" activeClassName={s.active}>Settings</NavLink></li>
          <li className={s.item}><NavLink to="/users" activeClassName={s.active}>Find users</NavLink></li>
        </ul>
  )
}

export default Pages;