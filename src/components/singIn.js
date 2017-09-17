import React, { Component } from 'react';

export default class SingIn extends Component{
    constructor(props){
        super(props);
        this.singIn = this.singIn.bind(this);
        this.singInOnFacebook = this.singInOnFacebook.bind(this);
    }
    singInOnFacebook(e){
        e.preventDefault();
        this.props.checkFBLogin();
    }
    singIn(e){
        e.preventDefault();
        this.props.setAccess(this.inputLogin.value,this.passwordInput.value);
    }
    render(){
        return(
            <form>
                <label>
                    <div>Enter login</div>
                    <input type="text" ref = {(input) => {this.inputLogin = input;}}/>
                </label>
                <label>
                    <div>Enter password</div>
                    <input type="text" ref = {(input) => { this.passwordInput = input;}}/>
                </label>
                <button onClick = {this.singIn}>Enter</button>
                <button onClick = {this.singInOnFacebook}>Enter on Facebook</button>
                <div>{this.props.errors}</div>
                <div>{this.props.loading}</div>
            </form>
         );
    }
}