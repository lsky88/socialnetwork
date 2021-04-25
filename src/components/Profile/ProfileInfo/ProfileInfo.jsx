// Imports =======================================
import React from 'react';
import css from './ProfileInfo.module.css';

// ProfileInfo ===================================
const ProfileInfo = (props) => {
  return (
    <div>
      Profile Page
      <div>
        <img src="" alt="wallpaper" />
      </div>
      <div className={css.descriptionBlock}>Ava + Description</div>
    </div>
  );
};

export default ProfileInfo;
