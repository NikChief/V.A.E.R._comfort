import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { loggedOutUserAC } from '../../redux/actionCreators/userAC';

function Nav(props) {

  const { user } =useSelector(state => state.userState);
  const dispatch = useDispatch();

  const logout = (e) => {
    e.preventDefault();

    fetch('/logout')
      .then(response => {
        dispatch(loggedOutUserAC())
      })
  }

  return (
    <div>
      <Link to="/" className="logotype">Logo</Link>
      <ul id="" className="login-registration_container">
      {user ?
       (<>
        <li onClick={logout} className=''><h3>Выйти</h3></li>
       </>
       )
      :
      (<>
        <li ><Link to="/login" className=''><h3>Войти</h3></Link></li>
        <li ><Link to="/registration" className=''><h3>Зарегистрироваться</h3></Link></li>
        <li ><Link to="/profile" className=''><h3>Профиль</h3></Link></li>
        <li ><Link to="/typelist" className=''><h3>Одежда</h3></Link></li>
      </>
      )}
      </ul>
    </div>
  );
}

export default Nav;
