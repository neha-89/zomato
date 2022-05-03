import React from 'react';
import { Component } from 'react';


class Footer extends Component {
    constructor(){
        super()
    }

    render(){
        return(
            <>
            <footer className="text-center text-white ">
                   
                    <div className="container-fluid pt-4">
                    
                      <section className="mb-4">
                       
                        <a
                          className="btn btn-link btn-floating btn-lg text-dark m-1"
                          href="#!"
                          role="button"
                          data-mdb-ripple-color="dark">
                          <i className="bi bi-facebook"></i></a>
                  
                      
                        <a
                          className="btn btn-link btn-floating btn-lg text-dark m-1"
                          href="#!"
                          role="button"
                          data-mdb-ripple-color="dark">
                          <i className="bi bi-twitter"></i>
                        </a>
                  
                       
                        <a
                          className="btn btn-link btn-floating btn-lg text-dark m-1"
                          href="#!"
                          role="button"
                          data-mdb-ripple-color="dark"
                          ><i className="bi bi-google"></i></a>
                  
                       
                        <a
                          className="btn btn-link btn-floating btn-lg text-dark m-1"
                          href="#!"
                          role="button"
                          data-mdb-ripple-color="dark"
                          ><i className="bi bi-instagram"></i></a>

                      </section>
                   
                    </div>
                    
                  
                  
                    <div className=" text-center p-3 text-light footer">
                      © 2020 Copyright:
                      <a className="text-light text-decoration-none" href="https://neha-89.github.io/myprofile/">Neha</a>
                    </div> 
            </footer>
            </>
        )
    }
}

export default Footer;