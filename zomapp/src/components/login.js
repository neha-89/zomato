import React from 'react';
import { Component } from 'react';


const url ='https://sparkleloginapi.herokuapp.com/api/auth/login';

class login extends Component(){
    constructor(){
        super()
        this.state= {
            email:'',
            password:'',
            message : ''
        }
    }    
    handleChange = (event)=> {
        this.setState(event.target.value);
    }
    login = () => {
        fetch(url,{
            method:'POST',
            headers:{
                'accept':'application/json',
                'content-type':'application/json'
            },
            body:JSON.stringify(this.state)
        })
        .then(this.props.history.push('/home'))
    }
    
    render(){
        return(
            <>
            <form>
                <div class="mb-3 mt-3">
                    <label for="email" class="form-label">Email:</label>
                    <input type="email" class="form-control" id="email" value = {this.state.email} onChange = {this.handleChange} placeholder="Enter email" name="email"/>
                </div>
                <div class="mb-3">
                    <label for="pwd" class="form-label">Password:</label>
                    <input type="password" class="form-control" id="pwd" value = {this.state.password} onChange = {this.handleChange} placeholder="Enter password" name="pswd"/>
                </div>
                <label for="comment">Comments:</label>
                <textarea class="form-control" rows="5" id="comment" value = {this.state.value} onChange= {this.handleChange} name="text"></textarea>
                <button type="submit" onClick= {this.login} class="btn btn-primary">Submit</button>
            </form>
            </>
        )
    }
}

export default login;