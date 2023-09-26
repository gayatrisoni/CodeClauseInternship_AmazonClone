import react, {useNavigate} from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './Home.js'
import Header from './Header.js'
import Login from './Login.js'
import Checkout from './Checkout.js'
import Orders from './Orders.js'
import { auth } from "./firebase";
import { useEffect } from 'react';
import { useStateValue } from "./StateProvider";


function App() {
  const [{ basket, user }, dispatch] = useStateValue();


  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <div className="app">
      
      <Router>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Header />
                  <Home />
                </>
              }
            />
            <Route path="/login" element={<Login/>}/>
            <Route path="/checkout" 
              element={
                <>
                  <Header />
                  <Checkout/>
                </>
              }
            />
            <Route path="/orders" 
              element={
                <>
                <Header />
                <Orders/>
                </>
              }
            />
            
          </Routes>
      </Router>
    </div>

  );
}

export default App;
