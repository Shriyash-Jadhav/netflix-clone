import React from "react";
import './App.css';
import { Route, Switch, BrowserRouter, Redirect } from "react-router-dom";
import Footer from './Components/Footer/Footer';
import Hero from './Components/Hero/Hero';
import MovieSlider from './Components/MovieSlider/MovieSlider';
import Home from './Home/Home';
import Login from './Components/Auth/Login';
import Registration from './Components/Auth/Registration';
import { AuthProvider } from "./contexts/AuthContext"
import PrivateRoute from "./Components/PrivateRoute";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AuthProvider>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/signin" exact component={Login} />
            <Route path="/signup" exact component={Registration} />
            <PrivateRoute path="/movies" exact component={MovieSlider} />

          </Switch>

        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
