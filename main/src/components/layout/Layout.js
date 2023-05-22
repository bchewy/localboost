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

    // const authContext = UserAuth();
    // const isUserSignedIn = authContext.user !== undefined && authContext.user !== null;
    // const isUserSignedIn = authContext.user && authContext.user.uid;
        
    // const { user } = UserAuth();
    // const isUserSignedIn = !!user; // Check if user is defined and truthy

    // const isUserSignedIn = user && Object.keys(user).length > 0;

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