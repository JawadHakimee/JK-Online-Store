import { Link } from 'react-router-dom';
import styled from './nav.module.css'
// import Main from '../../pages/Main/main';
// import Shopping from '../../pages/shopping/shopping';

function NavSecond(){

    return (
        <div>

                <div className={styled.Navbar}>
                    <div className={styled.NavbarImage}>

                        <ul className={styled.navbarNav}>
                            <li><Link to="/">JK Store</Link></li>
                            <li><Link to="/about">About Us</Link></li>
                            <li><Link to='/clothes'>Clothes</Link></li>
                            <li><Link to='/home'>Home</Link></li>
                            <li><Link to='/Login'>Login</Link></li>
                        </ul>
                    </div>  
                </div>  


    </div>

        )
}



export default NavSecond;