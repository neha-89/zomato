import React from 'react';
import {Link} from 'react-router-dom'

const ListingDisplay = (props) => {

    const renderData = ({listData}) => {
        if(listData){   
            if(listData.length>0){
                return listData.map((item) => {
                    return(
                        <div className="item" key={item.restaurant_id}>
                            <div className="row">
                                <div className="col-md-5">
                                    <img src={item.restaurant_thumb} className="Image"
                                    alt={item.restaurant_name}/>
                                </div>
                                <div className="col-md-7">
                                    <div className="hotel_name">
                                        <Link to={`/details?restId=${item.restaurant_id}`}>
                                            {item.restaurant_name}
                                        </Link>
                                        <div className="city_name">{item.address}</div>
                                        <div className="city_name">{item.rating_text}</div>
                                        <div className="city_name">Rs. {item.cost}</div>
                                        <div className="labelDiv">
                                            <span className="label label-primary">
                                                {item.mealTypes[0].mealtype_name}
                                            </span>&nbsp;
                                            <span className="label label-success">
                                                {item.mealTypes[1].mealtype_name}
                                            </span>
                                        </div>
                                        <div className="labelDiv">
                                            <span className="label label-danger">
                                                {item.cuisines[0].cuisine_name}
                                            </span>&nbsp;
                                            <span className="label label-warning">
                                                {item.cuisines[1].cuisine_name}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }else{
                return(
                    <div>
                        <h2>No Data For Filter Applied</h2>
                    </div>
                )
            }
        }else{
            return(
                <div>
                    <img src="/images/loader.gif" alt="loader"/>
                    <h2>Loading....</h2>
                </div>
            )
        }
    }


    return(
        <div id="content">
            {renderData(props)}
        </div>
    )
}

export default ListingDisplay

// import React from 'react';
// import { Component } from 'react';



// class ListDisplay extends Component{
//     constructor(props){
//         super(props)

//         this.state = {
//             restuarants:''
//         }
//     }
//     render(){
//         return(
//             <>
//                 <div id="card">
//                         {/*  <a href="../details/details.html">Details</a>  */}
//                         <div class="cardComponent">
//                             <div class="card-img">
//                                 <img src="./images/dinner.png" />
//                                 <h2>The Big Chill Bakery</h2>
//                                 <h4>FORT</h4>
//                                 <p>Shop 1, Plot D ,Samruddhi Complex,Chincholi</p>
//                             </div>
//                             <hr/>
//                             <div class="price">
//                                 <table>
//                                     <tr>
//                                         <td>CUISINES:</td>
//                                         <td>Bakery</td>
//                                     </tr>
//                                     <tr>
//                                         <td>COST FOR TWO:</td>
//                                         <td>$200</td>
//                                     </tr>
//                                 </table>
//                             </div>
//                         </div> 
//                         <div class="cardComponent">
//                             <div class="card-img">
//                                 <img src="./images/dinner.png" />
//                                 <h2>The Bake Shop</h2>
//                                 <h4>FORT</h4>
//                                 <p>Shop 1, Plot D ,Samruddhi Complex,Chincholi</p>
//                             </div>
//                             <hr/>
//                             <div class="price">
//                                 <table>
//                                     <tr>
//                                         <td>CUISINES:</td>
//                                         <td>Bakery</td>
//                                     </tr>
//                                     <tr>
//                                         <td>COST FOR TWO:</td>
//                                         <td>$400</td>
//                                     </tr>
//                                 </table>
//                             </div>
//                         </div>   
//                     </div>
//             </>
//         )
//     }
// }
// export default ListDisplay;