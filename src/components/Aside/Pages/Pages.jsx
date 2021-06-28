import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Pages.module.css';

const Pages = (props) => {
  return (
        <ul className={s.items}>
          {
            props.pages.map(page => (
              <li className={s.item} key={page.id}>
                <NavLink to={page.NavLink} activeClassName={s.active}>{page.name}</NavLink>
              </li>
            ))
          }
        </ul>
  )
}

export default Pages;