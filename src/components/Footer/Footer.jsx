import logo from '../../assets/logo_white.svg'
import './Footer.css'

function Footer() {
   return (
      <footer className="footer_container">
         <img className="footer_logo" src={logo} alt="Logo de Kasa" />
         <p className="footer_text">&#169; 2020 Kasa. All rights reserved.</p>
      </footer>
   )
}

export default Footer
