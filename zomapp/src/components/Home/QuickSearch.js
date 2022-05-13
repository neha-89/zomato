import React from 'react';
import { Component } from 'react';
import QuickDisplay from './QuickDisplay';

let url ="https://zomatoajulypi.herokuapp.com/quicksearch";

class QuickSearch extends Component {
    constructor(){
        super()
        this.state = {
            mealType :''
        }
    }
    render(){
        return(
            <>
         <div className="container-fluid QuickSearch">
            <span id="QuickHeading">
                Quick Search
            </span>
            <span id="QuickSubHeading">
                Discover Restaurants By Meal
            </span>
            <QuickDisplay mealData ={this.state.mealType} />
            
         </div> 
            </>
        )
    }
    componentDidMount(){
        fetch(url,{method:'GET'})
        .then((res) => res.json())
        .then((data) => {
            this.setState({mealType:data})
        })
    }
}

export default QuickSearch;