import {React } from 'react-router-dom'
import styled from './about.module.css'
import Footer from '../../components/footer/footer'
import Navbar from '../../components/navbar/navbar';


function About(){

    return (  
        <div>            
            <Navbar />
            <div className={styled.MainPart}>
                
                
                <div className={styled.textDiv}>
                    <h2>Collection in 2024</h2>
                    <i>Rich Home <br />
                    <span>Your First Choice</span><br />
                    From $200k </i>
                    <p>With our advances search filters,<br />
                    personalized recommendation, and <br />
                    expert support, you can make the <br />
                    best decision for your new home.</p>

                    <a href="./home" ><button className={styled.btn}>Go Shopping</button></a>

                </div>

                <div className={styled.imagesDiv}>

                    <img className={styled.img1} src="https://media.istockphoto.com/id/109350277/photo/modern-patio-next-to-swimming-pool.jpg?s=612x612&w=0&k=20&c=HsISboiGK_8M50DRjndI3LUHsgpcHQogJkGv0vFqqrU=" alt="" />
                    <img className={styled.img2} src="https://media.istockphoto.com/id/177561729/photo/rectangular-swimming-pool-in-back-of-a-large-white-house.jpg?s=612x612&w=0&k=20&c=mFhxGr1c6IQsJzS0EIVleHIeaUtOa12xUnzdQj55GqA=" alt="" />
                    <img className={styled.img3} src="https://as2.ftcdn.net/v2/jpg/04/61/03/41/1000_F_461034162_he5jCW52gPLPN7NituQV5CJ4Bqn5HCzT.jpg" alt="" />
                

                </div>
            
            </div>
        
            <Footer />
    </div>

        )
}


export default About;