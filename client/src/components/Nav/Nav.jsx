import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchLoggedOutUserAC } from '../../redux/actionCreators/userAC';

function Nav(props) {

  const { user } =useSelector(state => state.userState);
  const dispatch = useDispatch();
  
  const logout = (e) => {
    e.preventDefault();
    dispatch(fetchLoggedOutUserAC())
  }

  return (
    <div>
      <Link to="/" className="logotype">Logo</Link>
      <ul id="" className="login-registration_container">
      {user.loggedIn ?
       (<>
        <li ><Link to="/profile" className=''><h3>Профиль</h3></Link></li>
        <li onClick={logout} className=''><h3>Выйти</h3></li>
       </>
       )
      :
      (<>
        <li ><Link to="/login" className=''><h3>Войти</h3></Link></li>
        <li ><Link to="/registration" className=''><h3>Зарегистрироваться</h3></Link></li>
        <li ><Link to="/typelist" className=''><h3>Одежда</h3></Link></li>
      </>
      )}
      </ul>

      <nav className='navbar navbar-expand-lg navbar-light bg-light'>
        <div className='container-fluid'>
          <Link className='navbar-brand' to='/'>V.A.E.R._komfort</Link>
          <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarNav' aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle navigation'>
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='' id='navbarNav'>
            <ul className='navbar-nav'>
              <li className='nav-item'><Link to='/typelist' className='nav-link'>Одежда</Link></li>
              {user.loggedIn ?
              (<>
                <li className='nav-item'><Link to='/profile' className='nav-link'>Профиль</Link></li>
                <li className='nav-item' onClick={logout}><p className='nav-link'>Выйти</p></li>
              </>
              )
              :
              (<>
                <li className='nav-item'><Link to='/login' className='nav-link'>Войти</Link></li>
                <li className='nav-item'><Link to='/registration' className='nav-link'>Зарегистрироваться</Link></li>
              </>
              )}
              <li ><Link to='/users/:id/basket' className='nav-link'>Корзина</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
