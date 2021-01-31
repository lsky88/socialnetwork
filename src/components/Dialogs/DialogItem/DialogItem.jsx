import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './DialogItem.module.css'

const DialogItem = (props) => {
  let path = '/dialogs/' + props.id;
  return (
    <div className={css.DialogItem}>
      <img src="" alt="ava"/>
      <NavLink to={path} activeClassName={css.activeLink}>{props.name}</NavLink>
    </div>
  );
};

export default DialogItem;
