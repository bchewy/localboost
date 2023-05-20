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
                    <Link to= '/new-meetups'> Add New Listings</Link>
                </li>
                <li>
                    <Link to="/favorites">Milestones</Link>
                </li>
                <li>
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
                
            </ul>
        </nav>
    </header>;
}

export default MainNavigation;

