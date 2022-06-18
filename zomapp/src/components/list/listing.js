import React from 'react';
import { Component } from 'react';
import './listing.css';
import axios from 'axios';
import ListingDisplay from './listDisplay';

let restUrl = "https://zomatoajulypi.herokuapp.com/restaurant?mealtype_id=";

class Listing extends Component{
    constructor(props){
        super(props)
        this.state={
            restaurants:''
        }
    }
    render(){
        return(
            <>
             <h1 id="heading">Listing Page</h1>
                <div className="mainContent">
                    <div id="filter">
                        <h2>Filters</h2>
                        <div id="filter1">
                           <h4>Select Location</h4>
                            <select>Select Location:
                                     <option>Pune</option>
                                     <option>Delhi</option>
                                     <option>Banglore</option>
                            </select>
                        </div>
                      
                       <div className="filter2">
                            <h4>Cuisine</h4>
                            <ul>
                                <li><input type="checkbox"/>North Indian</li>
                                <li><input type="checkbox"/>South Indian</li>
                            </ul>
                            
                       </div> 
                       <div className="filter3">
                        <h4>Cost for two</h4>
                        <ul>
                            <li> <input type="radio"/>less than $200</li>
                            <li><input type="radio"/>less than $100</li>
                        </ul>
                       
                    </div> 
                    <div className="filter4">
                        <h4>Sort</h4>
                        <ul>
                            <li><input type="checkbox"/>Price low to high</li>
                            <li><input type="checkbox"/>Price high to low</li>
                        </ul>
                   </div> 
                  
                    <ListingDisplay listData={this.state.restaurants}/>
                </div>
            </div>
            </>
        )
    }
    componentDidMount(){
        let mealId = this.props.match.params.id?this.props.match.params.id:1
        sessionStorage.setItem('mealId',mealId)
        axios.get(`${restUrl}${mealId}`)
        .then((res) => {this.setState({restaurants:res.data})})
    }
}


export default Listing;