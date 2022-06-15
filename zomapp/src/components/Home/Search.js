import React from 'react';
import { Component } from 'react';
import {withRouter} from 'react-router-dom'

const url ="https://zomatoajulypi.herokuapp.com/location";
const restUrl="https://zomatoajulypi.herokuapp.com/restaurant?stateId="
class Search extends Component{
    constructor(props){
        super(props)
        this.state = {
            location : '',
            restaurants : ''
        }
    }
    renderCity = (data) => {
        console.log(">>>>data>>",data)
        if(data){
            return data.map((item) =>{
                return(
                    <li value={item.state_id} key={item.state_id}>{item.state}</li>
                )
            })
        }
    }
    renderRest = (data) => {
        console.log(data)
        if(data){
            return data.map((item) => {
                return(
                    <li key={item.restaurant_id} value={item.restaurant_id}>{item.restaurant_name} | {item.address}</li>
                )
            })
        }
    }
  

    handleRestaurants = (event) => {
        let restId = event.target.value;
        console.log(">>>>inside",restId)
        this.props.history.push(`/details?restId=${restId}`)
    }

    handleCity = (event) => {
        let restId = event.target.value;
        console.log(restId)
        fetch(`${restUrl}${restId}`,{method:'GET'})
        .then((res) => res.json())
        .then((data) => {
             console.log(">>>>",data)
           this.setState({restaurants:data})
        })
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
                        <button class="btn btn-secondary dropdown-toggle" type="button" onChange ={this.handleCity} id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        Please Select City
                        </button>
                        <ul className="dropdown-menu" id = "city" aria-labelledby="dropdownMenuButton1">
                        {this.renderCity(this.state.location)}
                        </ul>
                        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton2" onChange={this.handleRestaurants} data-bs-toggle="dropdown" aria-expanded="false">
                            Please Select Restaurants
                        </button>
                        <ul className="dropdown-menu" id="restaurant" aria-labelledby="dropdownMenuButton2">
                        {this.renderRest(this.state.restaurants)}
                        </ul>
                  </div>
              </div>
            </>
        )
    }
    componentDidMount(){
        
        fetch(url,{method:'GET'})
        .then((res) => res.json())
        .then((data) => {
            this.setState({location:data})
        })
    }
}


export default withRouter(Search);