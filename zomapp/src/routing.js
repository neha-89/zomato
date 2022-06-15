import React from "react";
import {BrowserRouter,Route} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
//import Login from './components/login';
//import Register from "./components/register";
import Home from './components/Home/Home';

const Routing = () =>{
    return(
        <>
        <BrowserRouter>
        <Header />
        <Route exact path="/" component={Home} />
        {/* <Route path="/login" component={Login} />
        <Route path="/register" component={Register} /> */}
        <Footer />
        </BrowserRouter>
        </>
    )
}

export default Routing;