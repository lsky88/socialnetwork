import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './Message.module.css';

const Message = (props) => {
  return <div className={css.dialog}>{props.message}</div>;
};

export default Message;
