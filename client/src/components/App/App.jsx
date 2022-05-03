import { useDispatch } from "react-redux";
import { loggedInUserAC } from "../../redux/actionCreators/userAC";
import { Routes, Route } from "react-router-dom";
import Nav from '../Nav/Nav';
import Home from '../Home/Home';
import Login from '../Login/Login';
import Registration from '../Registration/Registration';
import Error404 from '../Error404/Error404';
import Profile from "../Profile/Profile";
import { useEffect } from "react";
import TypeList from "../TypeList/TypeList";
import CategoryType from "../CategoryType/CategoryType";
import BasketList from '../BasketList/BasketList'
import OrderForm from "../OrderForm/OrderForm";
import Item from "../Item/Item";

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    fetch('/login')
      .then(res => res.json())
      .then(data => {
        dispatch(loggedInUserAC(data))
        // {loggedIn: false, message: 'Пользователь не в системе'}
        //{loggedIn: true, message: 'Пользователь в системе', userId: 1}
      })
  }, [dispatch])

  return ( 
    <>
      <Nav />
      <TypeList />
      {/* <Item /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/catalogue/:type/:categoryType/:patternId" element={<Item />} />
        <Route path="/catalogue/:type" element={<CategoryType />} />
        <Route path="/basket/orderform" element={<OrderForm />} />
        <Route path="/basket" element={<BasketList />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </>
  );
}

export default App;
