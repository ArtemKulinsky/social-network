import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import s from './Aside.module.css';
import Friends from './Friends/Friends';
import Pages from './Pages/Pages';

const Aside = (props) => {
  return (
    <aside className={s.aside}>
      <Pages pages={props.pages} />
      <Friends friends={props.friends} />
    </aside>
  );
}

let mapStateToProps = (state) => {
  return {
    pages: state.asideReducer.pages,
    friends: state.asideReducer.friends,
  };
}

export default compose(
  connect(
    mapStateToProps, null
    )
)(Aside)