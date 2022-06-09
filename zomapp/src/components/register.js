import React from 'react';
import { Component } from 'react';


const url ='https://sparkleloginapi.herokuapp.com/api/auth/register';
class register extends Component(){
    constructor(){
        super()
        this.state= {
            name:'',
            email:'',
            password:'',
            phone:'',

        }
    }
     handleChange = (event)=> {
        this.setState(event.target.value);
    }
    register = () => {
        fetch(url,{
            method:'POST',
            headers:{
                'accept':'application/json',
                'content-type':'application/json'
            },
            body:JSON.stringify(this.state)
        })
        .then(this.props.history.push('/login'))
    }
    
    
    render(){
        return(
            <>
            <form>
                <div class="mb-3 mt-3">
                    <label for="name" class="form-label">Name:</label>
                    <input type="text" class="form-control" id="name" value = {this.state.name} onChange = {this.handleChange} placeholder="Enter name" name="name"/>
                </div>
                <div class="mb-3 mt-3">
                    <label for="email" class="form-label">Email:</label>
                    <input type="email" class="form-control" id="email" value = {this.state.email} onChange = {this.handleChange} placeholder="Enter email" name="email"/>
                </div>
                <div class="mb-3">
                    <label for="pwd" class="form-label">Password:</label>
                    <input type="password" class="form-control" id="pwd" value = {this.state.password} onChange = {this.handleChange} placeholder="Enter password" name="pswd"/>
                </div>
                <div class="mb-3 mt-3">
                    <label for="phone" class="form-label">phone:</label>
                    <input type="text" class="form-control" id="phone" value = {this.state.phone} onChange = {this.handleChange} placeholder="Enter phone no." name="phone"/>
                </div>
                <button type="submit" onClick= {this.register} class="btn btn-primary">Submit</button>
            </form>
            </>
        )
    }
}

export default register;