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
import Basketcard from "../Basket card/BasketCard";
import BasketList from "../BasketList/BasketList";


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
    <Provider store={store}>
      <BrowserRouter>
        <Nav />
        <TypeList />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />

          <Route path="/catalogue/:type" element={<CategoryType />} />
          <Route path="/users/:id/basket" element={<BasketList />} />
          <Route path="*" element={<Error404 />} />
        </Routes>

      </BrowserRouter>
    </Provider>
    </>
  );
}

export default App;
