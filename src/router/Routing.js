import React, { Component } from 'react';
import {
    Route,
    Link,
    Switch
} from 'react-router-dom';
import '../css/menu.css';
import 'bootstrap/dist/css/bootstrap.css'
// import $ from 'jQuery';


import SingIn from '../containers/checkSingIn';
import Home from '../containers/home';
import Profile from '../containers/profile';
import Search from '../containers/search';
import Test from '../containers/test';
import AllTests from '../containers/allTests';



export default class Routing extends Component{
    constructor(props){
        super(props);
        this.Console = this.Console.bind(this);
        this.onClickButtonSearch = this.onClickButtonSearch.bind(this);
    }
    Console(){
        this.test = this.searchInput.value;
    }
    onClickButtonSearch(){
       console.log(this.searchInput.value);
       this.props.onSearch(this.searchInput.value);
    }
    render(){
        // let test = this.InputSearch;
        // console.log('/search/'+this.InputSearch);
        return(
            <div>
                <nav className = "navbar navbar-default">
                    <div className = "container-fluid">
                        <div className = "navbar-header">
                            <Link to = "/" className = "navbar-brand">WebsiteLogo</Link>
                        </div>
                        <ul className = "nav navbar-nav">
                            <li><Link to = '/'>Home</Link></li>
                            <li><Link to = '/allTests'>All tests</Link></li>
                            {/*<ul className="submenu">*/}
                            {/*<li><Link to = '/cate/subCate1'>Subcate1</Link></li>*/}
                            {/*<li><Link to = '/cate/subCate2'>Subcate2</Link></li>*/}
                            {/*<li><Link to = '/cate/subCate3'>Subcate3</Link></li>*/}
                            {/*</ul>*/}
                            {this.props.logIn}
                            <li>
                                <label>
                                    <input
                                        type="text"
                                        ref = {(input) => {this.searchInput = input;}}
                                        defaultValue = 'sdaada'
                                        onChange = {this.Console}
                                    />
                                    <Link to = '/search'><button onClick ={this.onClickButtonSearch} >Search</button></Link>
                                </label>
                            </li>
                        </ul>
                    </div>
                </nav>
                <Switch>
                    <Route exact path = '/' component = {Home}/>
                    {/*<Route path = '/about' component = {About}/>*/}
                    {/*<Route path = '/cate' component = {Categories}/>*/}
                    <Route path = '/profile' component = {Profile}/>
                    <Route path = '/singIn' component = {SingIn}/>
                    <Route path = '/allTests' component = {AllTests}/>
                    <Route path = '/search'
                    render = {(props) => <Search test = {this.test} {...props}/>} />
                    <Route path = '/test/:categoryId/:testId' component = {Test}/>
                    {/*<Route path = '/logIn' component = {LogIn}/>*/}
                </Switch>
            </div>
        )
    }
}