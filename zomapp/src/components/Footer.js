import React from 'react';
import { Component } from 'react';

class Footer extends Component {
    constructor(){
        super()
    }

    render(){
        return(
            <>
            <footer class="text-center text-white" style="background-color: #f1f1f1;">
                   
                    <div class="container-fluid pt-4">
                    
                      <section class="mb-4">
                       
                        <a
                          class="btn btn-link btn-floating btn-lg text-dark m-1"
                          href="#!"
                          role="button"
                          data-mdb-ripple-color="dark">
                          <i class="bi bi-facebook"></i></a>
                  
                      
                        <a
                          class="btn btn-link btn-floating btn-lg text-dark m-1"
                          href="#!"
                          role="button"
                          data-mdb-ripple-color="dark">
                          <i class="bi bi-twitter"></i>
                        </a>
                  
                       
                        <a
                          class="btn btn-link btn-floating btn-lg text-dark m-1"
                          href="#!"
                          role="button"
                          data-mdb-ripple-color="dark"
                          ><i class="bi bi-google"></i></a>
                  
                       
                        <a
                          class="btn btn-link btn-floating btn-lg text-dark m-1"
                          href="#!"
                          role="button"
                          data-mdb-ripple-color="dark"
                          ><i class="bi bi-instagram"></i></a>

                      </section>
                   
                    </div>
                    
                  
                  
                    <div class=" text-center p-3 text-light footer">
                      © 2020 Copyright:
                      <a class="text-light text-decoration-none" href="https://neha-89.github.io/myprofile/">Neha</a>
                    </div> 
            </footer>
            </>
        )
    }
}