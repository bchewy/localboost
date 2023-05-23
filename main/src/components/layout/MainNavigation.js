import { Link } from 'react-router-dom';
import classes from './MainNavigation.module.css';
import Logo from '../images/localboost_logonew.png';



const MainNavigation = ({ isUserSignedIn }) => {
    const unregisteredNavBar = (
        <header className={classes.header}>
            <div className={classes.logo}>
                LocalBoost 🇸🇬
            {/* <img src={Logo} alt="" style={{ width: '125px', height: '5rem' }} /> */}
            </div>
            {/* Navigation links for unregistered users */}
            <nav>
                <ul>
                    <li>
                        <Link to="/all-projects">Home</Link>
                    </li>
                    <li>
                        <Link to="/localboost-ai">AI</Link>
                    </li>
                    <li>
                        <Link to="/register">Register</Link>
                    </li>
                    <li>
                        <Link to="/sign-in">Sign In</Link>
                    </li>

                </ul>
            </nav>
        </header>
    );
    const signedInNavBar = (
        <header className={classes.header}>
            <div className={classes.logo}>LocalBoost</div>
            <nav>
                <ul>
                    <li>
                        <Link to="/all-projects">Home</Link>
                    </li>
                    <li>
                        <Link to="/localboost-ai">AI</Link>
                    </li>
                    <li>
                        <Link to='/new-project'>Add New Listings</Link>
                    </li>

                    <li>
                        <Link to="/profile">Profile</Link>
                    </li>
                    <li>
                        <Link to="/edit-profile">Edit Profile</Link>
                    </li>
                    {/* Add other navigation links for signed-in users */}
                </ul>

            </nav>
        </header>
    );

    const navigationBar = isUserSignedIn ? signedInNavBar : unregisteredNavBar;

    // Old nav bar
    {/* <header className={classes.header}>
        <div className={classes.logo}>LocalBoost</div>
        <nav>
            <ul>
                <li>
                    <Link to='/'> All Listings </Link>
                </li>
                <li>
                    <Link to='/new-project'>Add New Listings</Link>
                </li>
                <li>
                    <Link to="/localboost-ai">AI</Link>
                </li>
                <li>
                    <Link to="/profile">Profile</Link>
                </li>
                <li>
                    <Link to="/projects">My Projects</Link>
                </li>


            </ul>
        </nav>
    </header>; */}


    return navigationBar;
}

export default MainNavigation;
