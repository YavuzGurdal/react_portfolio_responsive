import React from 'react'
import '../scss/main.css'
import { Link } from 'react-router-dom'

function HeaderNavBar() {

    let showMenu = false;
    const toggleMenu = () => { // menu tusuna basilinca acilip kapanmasi islevini yaptim.

        const menuBtn = document.querySelector('.menu-btn');
        const menu = document.querySelector('.menu');
        const menuNav = document.querySelector('.menu-nav');
        const menuBranding = document.querySelector('.menu-branding');

        const navItems = document.querySelectorAll('.nav-item');

        // Set Initial State Of Menu
        if (!showMenu) {
            menuBtn.classList.add('close'); // close class'ini ekliyoruz
            menu.classList.add('show'); // show class'ini ekliyoruz
            menuNav.classList.add('show'); // show class'ini ekliyoruz
            menuBranding.classList.add('show'); // show class'ini ekliyoruz

            navItems.forEach(item => item.classList.add('show'))

            // Set Menu State
            showMenu = true;
        } else {
            menuBtn.classList.remove('close'); // close class'ini kaldiriyoruz
            menu.classList.remove('show'); // close class'ini kaldiriyoruz
            menuNav.classList.remove('show'); // close class'ini kaldiriyoruz
            menuBranding.classList.remove('show'); // close class'ini kaldiriyoruz

            navItems.forEach(item => item.classList.remove('show'))

            // Set Menu State
            showMenu = false;
        }
    }

    return (

        <header>
            <div onClick={toggleMenu} className="menu-btn">
                <div className="btn-line"></div>
                <div className="btn-line"></div>
                <div className="btn-line"></div>
            </div>

            {/* menu kismi */}
            <nav className="menu">
                <div className="menu-branding"> {/* menu tusuna basinca acilacak kisim */}
                    <div className="portrait"></div>
                </div>

                <ul className="menu-nav">

                    <li className="nav-item">
                        <Link onClick={toggleMenu} to="/" className="nav-link">
                            Home
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link onClick={toggleMenu} to="/about" className="nav-link">
                            About
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link onClick={toggleMenu} to="/work" className="nav-link">
                            My Work
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link onClick={toggleMenu} to="/contact" className="nav-link">
                            How To Reach Me
                    </Link>
                    </li>

                    {/*<Link to="/">
                        <h2>React Blog</h2>
                    </Link>/

                    <Link to="/">
                        <li className="nav-item current">

                            <h2 className="nav-link">
                                Home
                            </h2>

                        </li>
                    </Link> /

                    <li className="nav-item">
                        <a href="/" className="nav-link">
                            Home
                        </a>
                    </li> 
                    <li className="nav-item">
                        <a href="/about" className="nav-link">
                            About
                        </a>
                    </li>

                    <li className="nav-item">
                        <a href="/work" className="nav-link">
                            My Work
                    </a>
                    </li>
                
                   */}

                </ul>
            </nav>
        </header>
    )
}

export default HeaderNavBar
