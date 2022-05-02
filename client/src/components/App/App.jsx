import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from 'react-redux'
import { store } from '../../redux/store';

import Nav from '../Nav/Nav';
import Home from '../Home/Home';
import Login from '../Login/Login';
import Registration from '../Registration/Registration';
import Error404 from '../Error404/Error404';
import Profile from "../Profile/Profile";
import TypeList from "../TypeList/TypeList";


function App() {
  return ( 
    <>
    <Provider store={store}>
      <BrowserRouter>
        <Nav />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/typelist" element={<TypeList />} />
          <Route path="*" element={<Error404 />} />
        </Routes>

      </BrowserRouter>
    </Provider>
    </>
  );
}

export default App;
