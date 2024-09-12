import styled from './navbar.module.css'
import { Link } from 'react-router-dom'


function Navbar(){

    return (
        <div>
            <nav>
            <div className={styled.Container}>
                <ul className={styled.navMenu}>
                <h2>JK Online Store</h2>
                    <li><Link to="/">JK Store</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to='/clothes'>Clothes</Link></li>
                    <li><Link to='/home'>Home</Link></li>
                    <li><Link to='/Login'>Login</Link> </li>
                </ul>
            </div>
            </nav>
        </div>

        )
}



export default Navbar;