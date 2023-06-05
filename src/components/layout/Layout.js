import React from 'react';
import classes from './Layout.module.css';
import MainNavigation from './MainNavigation';
import { UserAuth } from '../auth/AuthContext';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useState } from 'react';

function Layout(props) {
      const [isUserSignedIn, setIsUserSignedIn] = useState(false); // Replace this with your actual authentication logic
      const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setIsUserSignedIn(true);
            } else {
                setIsUserSignedIn(false);
            }
        });

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
