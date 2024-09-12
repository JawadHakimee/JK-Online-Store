import styled from './main.module.css'
import Footer from '../../components/footer/footer'
import NavSecond from '../../components/navbarSecond/nav';

function Main(){

    return (
        <div>
            <div className={styled.Main}>
                <div className={styled.textSide}>
                    <i>Now it's Esay To <br />
                    Find <span>Your Home </span> </i>
                    <p>Find your dream home with ease on our home finding <br />
                    website, featuring a vast collection of properties from all <br />
                    around the world.</p>
                    <a href="./about"><button>Get Started</button></a>
                </div>
                    <NavSecond />


            </div>

            <Footer />

    </div>

        )
}



export default Main;