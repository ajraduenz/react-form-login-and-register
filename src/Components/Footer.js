import React from 'react';
import './Footer.css';
import reactLogo from '../img/react-logo.webp';
const Footer = () => {
  const ano = new Date().getFullYear()
  return (
    <footer>
     
        <div className="logo-rodape">AJ Raduenz</div>
        <div className="info-rodape">&copy;  {ano} Todos os direitos reservados.{document.body.classList.contains('mobile') && <br/>} Desenvolvido em React<img alt="React" className="react-logo" src={reactLogo}/></div>
   
    </footer>
  );
}

export default Footer;
