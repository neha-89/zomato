import React from 'react';
import { Component } from 'react';


class Search extends Component{
    constructor(){
        super()
    }

    render(){
        return(
            <>
            <div className="container-fluid image">
                 <div className="logo">
                        <span>Z!</span>
                       
                 </div>
                 <div className="heading ">
                            <span>Find The Best Restaurants Near You</span> 
                 </div>
                 <div className="dropdown">
                        <button class="btn btn-secondary dropdown-toggle" type="button" onChange ="getCity()" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        Please Select City
                        </button>
                        <ul className="dropdown-menu" id = "city" aria-labelledby="dropdownMenuButton1">
                            <li><a className="dropdown-item" href="#">Delhi</a></li>
                            <li><a className="dropdown-item" href="#">Pune</a></li>
                            <li><a className="dropdown-item" href="#">Banglore</a></li>
                        </ul>
                        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                            Please Select Restaurants
                        </button>
                        <ul className="dropdown-menu" id="restaurant" aria-labelledby="dropdownMenuButton2">
                            <li><a className="dropdown-item" href="#">Delhi</a></li>
                            <li><a className="dropdown-item" href="#">Pune</a></li>
                            <li><a className="dropdown-item" href="#">Banglore</a></li>
                        </ul>
                  </div>
              </div>
            </>
        )
    }
}
export default Search;