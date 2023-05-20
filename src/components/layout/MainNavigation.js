import { Link } from 'react-router-dom';
import classes from './MainNavigation.module.css';

function MainNavigation(){
    return <header className={classes.header}>
        <div className ={classes.logo}>ProjectX</div>
        <nav>
            <ul>
                <li>
                    <Link to= '/'> All Meetups </Link>
                </li>
                <li>
                    <Link to= '/new-meetups'> Add New Meetup</Link>
                </li>
                <li>
                    <Link to="/favorites">My Favorites</Link>
                </li>
                <li>
                    <Link to="/test-upload">Test an Upload</Link>
                </li>
                <li>
                    <Link to="/test-fetch">Test Fetch</Link>
                </li>
            </ul>
        </nav>
    </header>;
}

export default MainNavigation;

