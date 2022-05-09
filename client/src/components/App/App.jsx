import { useDispatch } from 'react-redux';
import { fetchIsUserAuthorizedAC } from '../../redux/actionCreators/userAC';
import { Routes, Route } from 'react-router-dom';
import Nav from '../Nav/Nav';
import Home from '../Home/Home';
import Login from '../Login/Login';
import Registration from '../Registration/Registration';
import Error404 from '../Error404/Error404';
import Profile from '../Profile/Profile';
import { useEffect } from 'react';
import TypeList from '../TypeList/TypeList';
import CategoryType from '../CategoryType/CategoryType';
import BasketList from '../BasketList/BasketList'
import OrderForm from '../OrderForm/OrderForm';
import Footer from '../Footer/Footer';
import Item from '../Item/Item'
import PatternList from '../PatternList/PatternList'
import AdminProfile from '../AdminProfile/AdminProfile';

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchIsUserAuthorizedAC())
  }, [dispatch])

  return (
    <>
      <div style={{ 'min-height': '92.5vh' }}>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/orderForm' element={<OrderForm />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/adminprofile' element={<AdminProfile />} />
          <Route path='/login' element={<Login />} />
          <Route path='/registration' element={<Registration />} />
          <Route path='/catalogue/:type' element={<CategoryType />} />
          <Route path='/catalogue/:type/:categoryType' element={<PatternList />} />
          <Route path='/catalogue/:type/:categoryType/:patternId' element={<Item />} />
          <Route path='/basket' element={<BasketList />} />
          <Route path='*' element={<Error404 />} />
        </Routes>
      </div>
      <Footer style={{ 'height': '7.5vh' }} />
    </>
  );
}

export default App;
