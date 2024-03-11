import shadowLogo from '../../assets/icons/shadow-logo.png';

import './Header.scss'

function Header() {


  return (

    <header className='header'>  
      <div className="logo-one">
      <img src={shadowLogo} alt="logo-1" />
      </div>
    </header>
    )
  }
  

export default Header
