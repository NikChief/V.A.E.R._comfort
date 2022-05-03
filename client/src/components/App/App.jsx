import { useDispatch } from "react-redux";
import { fetchIsUserAuthorizedAC } from "../../redux/actionCreators/userAC";
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


function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchIsUserAuthorizedAC())
  }, [dispatch])

  return (
    <>
      <Nav />
      <TypeList />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/catalogue/:type" element={<CategoryType />} />
        <Route path="/basket" element={<BasketList />} />
        <Route path="/basket/orderform" element={<OrderForm />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </>
  );
}

export default App;
