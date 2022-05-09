import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { fetchLoggedOutUserAC } from '../../redux/actionCreators/userAC';
import TypeList from '../TypeList/TypeList';
import style from './Nav.module.css'

function Nav(props) {

  const { user } = useSelector(state => state.userState);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log(user.loggedIn && user.userIsAdmin, '13')
  
  const logout = (e) => {
    e.preventDefault();
    dispatch(fetchLoggedOutUserAC())
    navigate('/')
  }

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
              <li className='nav-item'><Link to='/profileAdmin' className='nav-link'>Профиль</Link></li>
              :
              (user.loggedIn && !user.userIsAdmin)
              &&
              <li className='nav-item'><Link to='/profile' className='nav-link'>Профиль</Link></li>
              }
              {user.loggedIn ?
              (<>
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
