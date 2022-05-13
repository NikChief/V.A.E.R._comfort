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
  const { basketItems } = useSelector(state => state.basketState);

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
          <Link className={`navbar-brand ${style.logo}`} to='/'><img src={process.env.PUBLIC_URL + "/images/logo.png"} alt="logo" style={{height: "70px"}}/></Link>
          {/* <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarNav' aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle navigation'>
            <span className='navbar-toggler-icon'></span>
          </button> */}
          <TypeList/>
          <div className={style.navbarNav} id='navbarNav'>
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
                <li className={`nav-item ${style.logout}`} onClick={logout}><p className='nav-link'>Выйти</p></li>
              </>
              )
              :
              (<>
                <li className='nav-item'><NavLink to='/login' className='nav-link'>Войти</NavLink></li>
                <li className='nav-item'><NavLink to='/registration' className='nav-link'>Зарегистрироваться</NavLink></li>
              </>
              )}
              {(basketItems.length)
               ?
              <NavLink to='/basket' className='nav-link'> 
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="32" height="32" 
                  fill="currentColor" 
                  class="bi bi-bag-check" 
                  viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M10.854 8.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
                  <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"/>
                </svg>
              </NavLink>
              :
              <NavLink to='/basket' className='nav-link'> 
                <svg 
                  xmlns="http://www.w3.org/2000/svg"
                  width="32" height="32" 
                  fill="currentColor" 
                  class="bi bi-bag" 
                  viewBox="0 0 16 16">
                  <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"/>
                </svg>
              </NavLink>
              }
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
