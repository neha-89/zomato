import React from 'react';

import { Link } from 'react-router-dom';
import { Component } from 'react';


class Header extends Component {
    constructor(){
        super()
    }
    render(){
        return (
            <>
            <header>
          <div>
            {/* <div id="coupon">
                <button onClick="closeCoupon()" className="couponbtn">&times;</button>
                <img src="../images/1c.jpeg" alt="coupon"  class="couponimg" />
            </div> */}
        </div>
          <div className ="container-fluid">
            <nav className="navbar navbar-expand-lg fixed-top">
              <div className="container-fluid navbottom">
                <a className="navbar-brand" href="#">Zomato</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                {/* <span id="weatherOut"></span> */}
                <ul className="d-flex mode">
                  <li><Link to = '/login'><i className="bi bi-box-arrow-in-right"></i>Login</Link> </li>
                  <li><Link to='/register'><i className="bi bi-person-plus"></i> SignUp</Link></li>
                  <li><Link to='/home'><i className="bi bi-person-plus"></i> Home</Link></li>
                  {/* <li><a  href="#" onclick="darkmode()"> 
                     <span className="sun-icon">
                       <i className="bi bi-sun-fill" id="zon" style="color:#d8c658;"></i>
                     </span>
                      <span className="moon-icon">
                        <i className="bi bi-moon-fill" id="maan" style="color:#737eac;"></i>
                     </span>
                    </a></li>
                    <li> <a href="#" onclick="geolocation()"><i className="bi bi-geo-alt-fill"></i></a></li> */}
                </ul>
             </div>
            </nav>
          </div>
        </header>
            </>
        )
    }
}

export default Header