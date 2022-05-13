import React from 'react';
import {Link} from 'react-router-dom';

const QuickDisplay = (props)=>{
    const listMeal = ({mealData})=>{
        if(mealData){
            return mealData.map((item)=>{
                return(
                    <>
           <Link to={`/listing/${item.mealtype_id}`} key={item._id}>         
            
                
                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4">
                        <div className="card">
                        <img src={item.meal_image} alt={item.mealtype} class="card-img-top"/>
                            
                            <div className="card-body">
                                
                                 <p className ="card-text">{item.mealtype}</p>
                              
                                <p className="card-text">{item.content}</p>
                              {/* <!-- <a href="#" class="btn btn-primary">Go somewhere</a> --> */}
                            </div>
                        </div>
                    </div>
               
    
        </Link>
                    </>
                )
            })
        }
    }
    return(
        <>
        <div id="container">
          <div className = "row">
          {listMeal(props)}
          </div>
        </div>
        </>
    )
    
}

export default QuickDisplay;

