import React from 'react';
import { Component } from 'react';



class ListDisplay extends Component{
    constructor(props){
        super(props)

        this.state = {
            restuarants:''
        }
    }
    render(){
        return(
            <>
                <div id="card">
                        {/*  <a href="../details/details.html">Details</a>  */}
                        <div class="cardComponent">
                            <div class="card-img">
                                <img src="./images/dinner.png" />
                                <h2>The Big Chill Bakery</h2>
                                <h4>FORT</h4>
                                <p>Shop 1, Plot D ,Samruddhi Complex,Chincholi</p>
                            </div>
                            <hr/>
                            <div class="price">
                                <table>
                                    <tr>
                                        <td>CUISINES:</td>
                                        <td>Bakery</td>
                                    </tr>
                                    <tr>
                                        <td>COST FOR TWO:</td>
                                        <td>$200</td>
                                    </tr>
                                </table>
                            </div>
                        </div> 
                        <div class="cardComponent">
                            <div class="card-img">
                                <img src="./images/dinner.png" />
                                <h2>The Bake Shop</h2>
                                <h4>FORT</h4>
                                <p>Shop 1, Plot D ,Samruddhi Complex,Chincholi</p>
                            </div>
                            <hr/>
                            <div class="price">
                                <table>
                                    <tr>
                                        <td>CUISINES:</td>
                                        <td>Bakery</td>
                                    </tr>
                                    <tr>
                                        <td>COST FOR TWO:</td>
                                        <td>$400</td>
                                    </tr>
                                </table>
                            </div>
                        </div>   
                    </div>
            </>
        )
    }
}
export default ListDisplay;