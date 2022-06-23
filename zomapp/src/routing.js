import React from "react";
import {BrowserRouter,Route} from 'react-router-dom';
import Header from './Header';
import Listing from "./components/list/listing";
import Details from './components/details/restDetails';
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
        <Route path="/listing/:id" component={Listing}/>
        <Route path="/details" component={Details} />
        {/* <Route path="/login" component={Login} />
        <Route path="/register" component={Register} /> */}
        <Footer />
        </BrowserRouter>
        </>
    )
}

export default Routing;