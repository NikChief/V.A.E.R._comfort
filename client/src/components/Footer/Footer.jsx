import React from 'react';
import style from './Footer.module.css'

function Footer(props) {
  return (
    <footer className={style.footer} className="page-footer">
      <div className="footer-copyright text-center py-3 bg-dark text-muted">© 2022 BestTeamEver Production
      </div>
    </footer>
  );
}

export default Footer;