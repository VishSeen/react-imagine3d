import React from "react";
import StyledFooter from "./style";

const Footer = () => {
    return(
        <StyledFooter>
          {/* Main Footer Layout */}
          <div className="footer-content">

             {/* Large Brand / Call to Action */}
             <div className="brand-section">
                <h2>Let's build <br/> something <span style={{color: '#fd5a1e'}}>real.</span></h2>
                <a href="mailto:hello@vish.studio" className="cta-btn">Start a Project</a>
             </div>

             {/* Quick Links */}
             <div className="links-column">
                <h4>Navigation</h4>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/projects">Projects</a></li>
                    <li><a href="/about-us">Studio</a></li>
                    <li><a href="mailto:hello@vish.studio">Contact</a></li>
                </ul>
             </div>

             {/* Contact Info */}
             <div className="links-column">
                <h4>Connect</h4>
                <ul>
                    <li><a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a></li>
                    <li><a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a></li>
                    <li><a href="https://behance.net" target="_blank" rel="noreferrer">Behance</a></li>
                    <li style={{marginTop: '2rem'}}><span style={{color: '#444', fontFamily: 'Poppins', fontSize: '12px'}}>Mauritius, MU</span></li>
                </ul>
             </div>
          </div>

          {/* Copyright / Legal */}
          <div className="footer-bottom">
             <p>© {new Date().getFullYear()} Imagine 3D. All rights reserved.</p>
             <div className="socials">
                <a href="#">Privacy Policy</a>
                <a href="#">Terms</a>
             </div>
          </div>
        </StyledFooter>
    )
}

export default Footer;
