import { Link } from 'react-router-dom';
import classes from './MainNavigation.module.css';

function MainNavigation(){
    return <header className={classes.header}>
        <div className ={classes.logo}>LocalBoost</div>
        <nav>
            <ul>
                <li>
                    <Link to= '/'> All Listings </Link>
                </li>
                <li>
                    <Link to= '/new-project'> Add New Listings</Link>
                  
                </li>
               
                <li>
                    <Link to="/favorites">Milestones</Link>
                </li>
                <li>
                    <Link to="/localboost-ai">Chat</Link>
                </li>
                <li>
                    <Link to="/timeline-test">Timeline Test</Link>
                </li>
                <li>
                    <Link to="/sign-in">Sign In</Link>
                </li>
                <li>
                    <Link to="/register">Register</Link>
                </li>
                <li>
                    <Link to="/profile">Profile</Link>
                </li>

                {/* Other navigation stuff */}
                {/* <li>
                    <Link to="/test-upload">Test an Upload</Link>
                </li>
                <li>
                    <Link to="/test-fetch">Test Fetch</Link>
                </li>
                <li>
                    <Link to="/">How it works</Link>
                </li>
                <li>
                    <Link to="/">Login</Link>
                </li>
                <li>
                    <Link to="/">Join</Link>
                </li>
*/}

            </ul>
        </nav>
    </header>;
}

export default MainNavigation;

