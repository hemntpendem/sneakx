import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa';

const AboutusFooter = () => {
  return (
    <div>
       {/* About Us + Footer */}
            <div className='aboutus-container'>
              <div className='aboutuspage'>
                <div className='section'>
                  <h4>Resources</h4>
                  <a href='#findastore'>Find A Store</a>
                  <a href='#member'>Become A Member</a>
                  <a href='#advice'>Product Advice</a>
                  <a href='#feedback'>Send Us Feedback</a>
                </div>
      
                <div className='section'>
                  <h4>Help</h4>
                  <a href='#gethelp'>Get Help</a>
                  <a href='#orderstatus'>Order Status</a>
                  <a href='#delivery'>Delivery</a>
                  <a href='#returns'>Returns</a>
                  <a href='#paymentoptions'>Payment Options</a>
                  <a href='#reportaconcern'>Report a Concern</a>
                </div>
      
                <div className='section'>
                  <h4>Company</h4>
                  <a href='#aboutsneakx'>About Sneakx</a>
                  <a href='#news'>News</a>
                  <a href='#investments'>Investments</a>
                  <a href='#impact'>Impact</a>
                  <a href='#sustainability'>Sustainability</a>
                </div>
              </div>
      
              <div className='socialpageicons'>
                <a href='#https://facebook.com'><FaFacebook /></a>
                <a href='#https://twitter.com'><FaTwitter /></a>
                <a href='#https://instagram.com'><FaInstagram /></a>
                <a href='#https://wa.me'><FaWhatsapp /></a>
              </div>
      
              <div className='footer-bottom'>{/* Footer bottom */}
                <p>© 2025 SneakX. All rights reserved.</p>
                <div className="footer-links">
                  <a href="#sale">Terms of Sale</a>
                  <a href="#use">Terms of Use</a>
                  <a href="#policy">Privacy Policy</a>
                  <a href="#settings">Privacy Settings</a>
                </div>
              </div>
      
              <div className="footer-credit">
                <p>
                  Made with <span className="heart">🧡</span> by <strong>Hemant</strong><br />
                  Queries: <a href="mailto:pendemhemant@gmail.com">pendemhemant@gmail.com</a>
                </p>
              </div>
            </div>
    </div>
  )
}

export default AboutusFooter
