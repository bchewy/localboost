import { Link } from 'react-router-dom';
import classes from './MainNavigation.module.css';

function MainNavigation(){
    return <header className={classes.header}>
        <div className ={classes.logo}>ProjectX</div>
        <nav>
            <ul>
                <li>
                    <Link to= '/'> All Projects </Link>
                </li>
                <li>
                    <Link to= '/new-project'> Add New Project</Link>
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

