import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchLoggedOutUserAC } from '../../redux/actionCreators/userAC';
import TypeList from '../TypeList/TypeList';

function Nav(props) {

  const { user } =useSelector(state => state.userState);
  const dispatch = useDispatch();
  
  const logout = (e) => {
    e.preventDefault();
    dispatch(fetchLoggedOutUserAC())
  }

  return (
    <div>
      <nav className='navbar navbar-expand-lg navbar-light bg-light'>
        <div className='container-fluid'>
          <Link className='navbar-brand' to='/'>V.A.E.R._komfort</Link>
          <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarNav' aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle navigation'>
            <span className='navbar-toggler-icon'></span>
          </button>
          <TypeList/>
          <div className='' id='navbarNav'>
            <ul className='navbar-nav'>
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
              <li ><Link to='/basket' className='nav-link'>Корзина</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
