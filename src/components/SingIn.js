import React, { Component } from 'react';
import '../css/login.css';

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
            <div className="wrapper">
                <form className="form-signin">
                    <h2 className="form-signin-heading">Please login</h2>
                    <input
                        type="text"
                        ref = {(input) => { this.inputLogin = input;}}
                        className="form-control login"
                        name="username"
                        placeholder="Login"
                        required=""
                        autoFocus="" />
                    <input
                        type="password"
                        ref = {(input) => { this.passwordInput = input;}}
                        className="form-control password"
                        name="password"
                        placeholder="Password"
                        required=""/>
                    <label className="checkbox">
                        <input
                            type="checkbox"
                            value="remember-me"
                            id="rememberMe"
                            name="rememberMe"/> Remember me
                    </label>
                    <button
                        className="btn btn-lg btn-primary btn-block"
                        type="submit"
                        onClick = {this.singIn}
                    >Login</button>
                    <button
                        className="btn btn-lg btn-primary btn-block"
                        type="submit"
                        onClick = {this.singInOnFacebook}
                    >Continue with Facebook</button>
                    <div>{this.props.errors}</div>
                    <div>{this.props.loading}</div>
                </form>
            </div>
         );
    }
}