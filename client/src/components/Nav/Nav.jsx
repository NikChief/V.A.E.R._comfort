import React from 'react';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { NavLink, Link } from 'react-router-dom';
import { clearBasketAC } from '../../redux/actionCreators/basketAC';
import { fetchLoggedOutUserAC } from '../../redux/actionCreators/userAC';
import TypeList from '../TypeList/TypeList';
import style from './Nav.module.css'

function Nav(props) {

  const { user } = useSelector(state => state.userState);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logout = useCallback((e) => {
    e.preventDefault();
    dispatch(fetchLoggedOutUserAC())
    dispatch(clearBasketAC())
    localStorage.clear()
    navigate('/')
  }, [dispatch, navigate])

  return (
    <div className={style.main}>
      <nav className='navbar navbar-expand-lg navbar-light bg-light'>
        <div className='container-fluid' style={{'backgroundColor': 'rgb(229,239,241)'}}>
          <Link className='navbar-brand' to='/'><img src={process.env.PUBLIC_URL + "/images/logo.png"} alt="logo" style={{height: "70px"}}/></Link>
          {/* <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarNav' aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle navigation'>
            <span className='navbar-toggler-icon'></span>
          </button> */}
          <TypeList/>
          <div className='' id='navbarNav'>
            <ul className='navbar-nav'>
              {
              (user.loggedIn && user.userIsAdmin)
              ?
              <li className='nav-item'><NavLink to='/profileAdmin' className='nav-link'>Профиль</NavLink></li>
              :
              (user.loggedIn && !user.userIsAdmin)
              &&
              <li className='nav-item'><NavLink to='/profile' className='nav-link'>Профиль</NavLink></li>
              }
              {user.loggedIn ?

              (<>
                <li className='nav-item' onClick={logout}><p className='nav-link'>Выйти</p></li>
              </>
              )
              :
              (<>
                <li className='nav-item'><NavLink to='/login' className='nav-link'>Войти</NavLink></li>
                <li className='nav-item'><NavLink to='/registration' className='nav-link'>Зарегистрироваться</NavLink></li>
              </>
              )}
              <li ><NavLink to='/basket' className='nav-link'>Корзина</NavLink></li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
