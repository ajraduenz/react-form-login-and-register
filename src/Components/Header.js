import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './Header.css'


const Header = () => {
  const [mobileMenu, setMobileMenu] = React.useState(false)
  const mobile = !document.body.classList.contains('desktop')
  const { pathname } = useLocation();
  React.useEffect(() => {

    if (mobile) {
      setMobileMenu(false)
    }
    else {
      document.querySelectorAll('.categoria-pai').forEach(cada => (cada.querySelector('.filha.active') != null) ? (cada.classList.add('active')) : (cada.classList.remove('active')))
    }
  }, [mobile, pathname])





  return (
    <>
      <header>
        {mobile ? (
          <>
            <div className="icon hamburguer" onClick={() => setMobileMenu(!mobileMenu)}>
              <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M20 2H0V0H20V2ZM20 8H0V6H20V8ZM0 14H20V12H0V14Z" fill="#828BA1" />
              </svg>
            </div>
            <div className={`mobile-links ${mobileMenu && "open"}`}>
              <ul>
                <li><NavLink to="/entre">Entre</NavLink></li>
                <li><NavLink to="/cadastre-se">Cadastre-se</NavLink></li>
              </ul>
            </div>
            <div className="logo-bay">
            <NavLink to="/" className="logo" end>Logo</NavLink>
            </div>
            <div className="icon search">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="#828BA2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M20.9999 20.9999L16.6499 16.6499" stroke="#828BA2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div className="icon user">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="#828BA1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke="#828BA1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>


          </>
        ) : (
          <nav>
            <ul className="menu-topo">
              <li className="categoria-pai ">
                <div>
                  <a href="/" className="link-pai"> Criação de sites</a></div>
                <ul>
                  <li><NavLink to="/entre" className="filha">
                    Entre</NavLink></li>
                  <li><NavLink to="/cadastre-se" className="filha">
                    Cadastre-se</NavLink></li>
                </ul>
              </li>
            </ul>
          </nav>
        )}

      </header >
    </>
  );
}

export default Header;