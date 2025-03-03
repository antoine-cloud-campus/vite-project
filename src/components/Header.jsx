import React from 'react'
import logo from '../assets/man.webp';

const Header = () => {
    return (
        <header>
            <img className='logo' src={logo}></img>
            <nav>
                <ul>
                    <li><a href='http://localhost:5173/'>Home</a></li>
                    <li><a>Page 2</a></li>
                    <li><a>Page 3</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
