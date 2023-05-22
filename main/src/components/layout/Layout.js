import React from 'react';
import classes from './Layout.module.css';
import MainNavigation from './MainNavigation';

function Layout(props) {
  const isUserSignedIn = true; // Replace this with your actual authentication logic

  return (
    <div>
      <MainNavigation isUserSignedIn={isUserSignedIn} />
      <main className={classes.main}>
        {props.children}
      </main>
    </div>
  );
}

export default Layout;
