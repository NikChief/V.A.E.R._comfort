import React from 'react';
import style from './Footer.module.css'

function Footer(props) {
  return (
    <footer className={style.footer} class="page-footer">
      <div class="footer-copyright text-center py-3 bg-dark text-muted">© 2022 BestTeamEver Production
      </div>
    </footer>
  );
}

export default Footer;
