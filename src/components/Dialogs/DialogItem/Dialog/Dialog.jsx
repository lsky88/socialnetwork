import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './Dialog.module.css';

const Dialog = (props) => {
  let path = '/dialogs/' + props.id;
  return (
    <div className={css.dialog}>
        <NavLink to={path} activeClassName={css.activeLink}><img src="" alt="ava"/> {props.name}</NavLink>
      </div>
  );
};

export default Dialog;
