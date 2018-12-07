import  React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className = 'rmdb-header'>
            <div className='rmdb-header-content'>
                <Link to="/">
                <img className='rmdb-logo' src='./images/reactMovie_logo.png' alt='rmdb-logo'/>
                </Link>
                <img className='rmdb-tmdb-logo' src='./images/tmdb_logo.png' alt='tmdb-logo'/>

            </div>

        </div>
        //Div can also be rendered like this ---> React.createElement('div', {className: 'react_div'}, 'This is a test content');
    )
}

export default Header;