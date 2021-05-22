import React from 'react';
import s from './Aside.module.css';
import Friends from './Friends/Friends';
import Pages from './Pages/Pages';

const Aside = (props) => {
  return (
      <aside className={s.aside}>
        <Pages />
        <Friends friends={props.aside.friends} />
      </aside>
  )
}

export default Aside;