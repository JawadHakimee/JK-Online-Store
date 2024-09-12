import styled from './footer.module.css'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'






function footer(){
    return (
        <footer className={styled.footer}>
          <div className={styled.footerContent}>
            <div className={styled.footerSection}>
              <h3>About Us</h3>
              <p>We are a company that provides high-quality products and services.</p>
            </div>
            <div className={styled.footerSection}>
              <h3>Contact Us</h3>
              <ul>
                <li>Email: info@example.com</li>
                <li>Phone: 123-456-7890</li>
                <li>Address: 123 Main Street, Anytown USA</li>
              </ul>
            </div>
            <div className={styled.footerSection}>
              <h3>Follow Us</h3>
              <a href='google.com'  target="_blank" rel="noopener noreferrer" className={styled.socialIcon}>
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a href='google.com' target="_blank" rel="noopener noreferrer" className={styled.socialIcon}>
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href='google.com' target="_blank" rel="noopener noreferrer" className={styled.socialIcon}>
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <p>&copy; 2024 Example Company. All rights reserved.</p>
            </div>
          
            
          
        </div>  
        </footer>
      );
    };
    
export default footer;




