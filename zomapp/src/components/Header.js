import React from 'react';
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
            <div id="coupon">
                <button onClick="closeCoupon()" className="couponbtn">&times;</button>
                <img src="./images/1c.jpeg" alt="coupon"  class="couponimg" />
            </div>
        </div>
          <div class ="container-fluid">
            <nav class="navbar navbar-expand-lg fixed-top">
              <div class="container-fluid navbottom">
                <a class="navbar-brand" href="#">Zomato</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>
                <span id="weatherOut"></span>
                <ul class="d-flex mode">
                  <li><a href="#"><i class="bi bi-box-arrow-in-right"></i> Login</a></li>
                  <li><a href="#"><i class="bi bi-person-plus"></i> SignUp</a></li>
                  <li><a  href="#" onclick="darkmode()"> 
                     <span class="sun-icon">
                       <i class="bi bi-sun-fill" id="zon" style="color:#d8c658;"></i>
                     </span>
                      <span class="moon-icon">
                        <i class="bi bi-moon-fill" id="maan" style="color:#737eac;"></i>
                     </span>
                    </a></li>
                    <li> <a href="#" onclick="geolocation()"><i class="bi bi-geo-alt-fill"></i></a></li>
                </ul>
             </div>
            </nav>
          </div>
            
              <div class="container-fluid image">
                 <div class="logo">
                        <span>Z!</span>
                       
                 </div>
                 <div class="heading ">
                            <span>Find The Best Restaurants Near You</span> 
                 </div>
                 <div class="dropdown">
                        <button class="btn btn-secondary dropdown-toggle" type="button" onChange ="getCity()" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        Please Select City
                        </button>
                        <ul class="dropdown-menu" id = "city" aria-labelledby="dropdownMenuButton1">
                            <li><a class="dropdown-item" href="#">Delhi</a></li>
                            <li><a class="dropdown-item" href="#">Pune</a></li>
                            <li><a class="dropdown-item" href="#">Banglore</a></li>
                        </ul>
                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                            Please Select Restaurants
                        </button>
                        <ul class="dropdown-menu" id="restaurant" aria-labelledby="dropdownMenuButton2">
                            <li><a class="dropdown-item" href="#">Delhi</a></li>
                            <li><a class="dropdown-item" href="#">Pune</a></li>
                            <li><a class="dropdown-item" href="#">Banglore</a></li>
                        </ul>
                  </div>
              </div>
        </header>
            </>
        )
    }
}

export default Header