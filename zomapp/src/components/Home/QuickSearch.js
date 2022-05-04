import React from 'react';
import { Component } from 'react';


class QuickSearch extends Component {
    constructor(){
        super()
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
            <div className="container">
                <div className="row">
                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4">
                        <div className="card">
                            <img src="../images/sacks.png" alt="snacks"class="card-img-top"/>
                            <div className="card-body">
                                <h5 className="card-title">Breakfast</h5>
                                <h6 className="card-subtitle mb-2 text-muted">Enjoy Your BreakFast Meal</h6>
                              {/* <!-- <a href="#" class="btn btn-primary">Go somewhere</a> --> */}
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4 col-lg-4 col-md-4 col-sm-4">
                        <div class="card">
                            <img src="../images/sacks.png" alt="snacks"class="card-img-top"/>
                            <div class="card-body">
                                <h5 class="card-title">Breakfast</h5>
                                <h6 class="card-subtitle mb-2 text-muted">Enjoy Your BreakFast Meal</h6>
                              {/* <!-- <a href="#" class="btn btn-primary">Go somewhere</a> --> */}
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4 col-lg-4 col-md-4 col-sm-4">
                        <div class="card">
                            <img src="../images/sacks.png" alt="snacks"class="card-img-top"/>
                            <div class="card-body">
                                <h5 class="card-title">Breakfast</h5>
                                <h6 class="card-subtitle mb-2 text-muted">Enjoy Your BreakFast Meal</h6>
                              {/* <!-- <a href="#" class="btn btn-primary">Go somewhere</a> --> */}
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4 col-lg-4 col-md-4 col-sm-4">
                        <div class="card">
                            <img src="../images/sacks.png" alt="snacks"class="card-img-top"/>
                            <div class="card-body">
                                <h5 class="card-title">Breakfast</h5>
                                <h6 class="card-subtitle mb-2 text-muted">Enjoy Your BreakFast Meal</h6>
                              {/* <!-- <a href="#" class="btn btn-primary">Go somewhere</a> --> */}
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4 col-lg-4 col-md-4 col-sm-4">
                        <div class="card">
                            <img src="../images/sacks.png" alt="snacks"class="card-img-top"/>
                            <div class="card-body">
                                <h5 class="card-title">Breakfast</h5>
                                <h6 class="card-subtitle mb-2 text-muted">Enjoy Your BreakFast Meal</h6>
                              {/* <!-- <a href="#" class="btn btn-primary">Go somewhere</a> --> */}
                            </div>
                        </div> 
                    </div>
                    <div class="col-xl-4 col-lg-4 col-md-4 col-sm-4">
                        <div class="card">
                            <img src="../images/sacks.png" alt="snacks"class="card-img-top"/>
                            <div class="card-body">
                                <h5 class="card-title">Breakfast</h5>
                                <h6 class="card-subtitle mb-2 text-muted">Enjoy Your BreakFast Meal</h6>
                              {/* <!-- <a href="#" class="btn btn-primary">Go somewhere</a> --> */}
                            </div>
                        </div> 
                    </div>
                </div>
            </div>
         </div> 
            </>
        )
    }
}

export default QuickSearch;