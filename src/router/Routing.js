import React, { Component } from 'react';
import {
    Route,
    Link,
    Switch
} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import 'bootstrap/dist/js/bootstrap.js';

import SingIn from '../containers/checkSingIn';
import Home from '../containers/home';
import Profile from '../containers/profile';
import Search from '../containers/search';
import Test from '../containers/test';
import AllTests from '../containers/allTests';
import About from '../containers/about';

export default class Routing extends Component{
    constructor(props){
        super(props);
        this.onClickSearch = this.onClickSearch.bind(this);
    }
    onClickSearch(){
       this.props.onSearch(this.searchInput.value);
    }
    render(){
        return(
            <div>
                <nav className="navbar navbar-inverse">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <button
                                type="button"
                                className="navbar-toggle"
                                data-toggle="collapse"
                                data-target="#myNavbar"
                            >
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <Link className="navbar-brand" to="/">WebSiteName</Link>
                        </div>
                        <div className="collapse navbar-collapse" id="myNavbar">
                            <ul className="nav navbar-nav">
                                <li><Link to="/about">About us</Link></li>
                                <li><Link to="/allTests">All Tests</Link></li>
                            </ul>
                            <ul className="nav navbar-nav navbar-right">
                                <li>
                                    <form className="navbar-form navbar-left">
                                        <div className="input-group">
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Search"
                                                ref = {(input) => {this.searchInput = input;}}
                                            />
                                                <div className="input-group-btn">
                                                    <Link
                                                        to="/search"
                                                        className="btn btn-default"
                                                        onClick ={this.onClickSearch}
                                                    >
                                                            <i className="glyphicon glyphicon-search"></i>
                                                    </Link>
                                                </div>
                                        </div>
                                    </form>
                                </li>
                                {this.props.logIn}
                            </ul>
                        </div>
                    </div>
                </nav>
                <Switch>
                    <Route exact path = '/' component = {Home}/>
                    <Route path = '/about' component = {About}/>
                    <Route path = '/profile' component = {Profile}/>
                    <Route path = '/singIn' component = {SingIn}/>
                    <Route path = '/allTests' component = {AllTests}/>
                    <Route path = '/search'
                    render = {(props) => <Search test = {this.test} {...props}/>} />
                    <Route path = '/test/:categoryId/:testId' component = {Test}/>
                </Switch>
            </div>
        )
    }
}