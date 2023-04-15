import './App.css';
import {Route,Switch,BrowserRouter} from "react-router-dom";
import { useState } from 'react';
import HomeScreen from "./Screens/HomeScreen"
import ProductScreen from "./Screens/ProductScreen"
import CartScreen from "./Screens/CartScreen";
// components
import NavBar from './components/NavBar';
import SideDrawer from './components/SideDrawer';
import Backdrop from './components/Backdrop';

function App() {
  const [sideToggle,setSideToggle]=useState(false);
  return (
    <BrowserRouter>
    <NavBar setSideToggle={setSideToggle}/>
    <SideDrawer show={sideToggle} setSideToggle={setSideToggle}/>
    <Backdrop show={sideToggle} setSideToggle={setSideToggle}/>
      <main>
        <Switch>
          <Route exact path="/" component={HomeScreen}/>
          <Route exact path="/product/:id" component={ProductScreen}/>
          <Route exact path="/cart" component={CartScreen}/>
        </Switch>
      </main>
    </BrowserRouter>
  );
}

export default App;
