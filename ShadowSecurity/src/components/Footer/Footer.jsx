import { Link } from "react-router-dom";
import './Footer.scss'

const Footer = () => {


  return (
    <>
      <div className="footer">
        <div className="terms">
          <h3>Terms of Service</h3>
        </div>
        <div className="social">
         <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
         <img src="" alt="Facebook" />
         </a>
         <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
         <img src="" alt="LinkedIn" />
         </a>
        </div>
        <div className="rights">
          <h3>Copyright {'\u00A9'} 2024 Shadow Security</h3>
          <h3>Website built by Fusion digital</h3>
        </div>
      </div>

    </>
  )
}

export default Footer
