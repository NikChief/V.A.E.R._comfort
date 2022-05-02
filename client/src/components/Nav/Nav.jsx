import React from 'react';
import { Link } from 'react-router-dom';

function Nav(props) {
<<<<<<< Updated upstream
=======

  const { user } =useSelector(state => state.userState);
  console.log('10', user)
  const dispatch = useDispatch();

  const logout = (e) => {
    e.preventDefault();

    fetch('/logout')
      .then(response => {
        dispatch(loggedOutUserAC())
      })
  }

>>>>>>> Stashed changes
  return (
    <div>
      <Link to="/" className="logotype">Logo</Link>
      <ul id="" className="login-registration_container">
        <li ><Link to="/login" className=''><h3>Войти</h3></Link></li>
        <li ><Link to="/registration" className=''><h3>Зарегистрироваться</h3></Link></li>
        {}
      </ul>
    </div>
  );
}

export default Nav;
