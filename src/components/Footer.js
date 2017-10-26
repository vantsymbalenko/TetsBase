import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Footer extends Component{
    render(){
        let year = this.props.year;
        return (
            <footer className= "container text-center">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="col-md-4">
                            <ul className="nav nav-pills nav-stacked">
                                <li><Link to = "/about">About us</Link></li>
                                <li><Link to = "/allTests">All test </Link></li>
                            </ul>
                        </div>
                        <div className="col-md-4">
                            <ul className="nav nav-pills nav-stacked">
                                <li><Link to = "/">Home</Link></li>
                                <li><Link to = "/singIn">Log In</Link></li>
                            </ul>
                        </div>
                        {/*<div className="col-md-3">*/}
                            {/*<ul className ="nav nav-pills nav-stacked">*/}
                                {/*<li><a href="#">Web analytics</a></li>*/}
                                {/*<li><a href="#">Presentations</a></li>*/}
                            {/*</ul>*/}
                        {/*</div>*/}
                        <div className ="col-md-4">
                            <ul className ="nav nav-pills nav-stacked">
                                <li><Link to = "/about">Product Help</Link></li>
                                <li><Link to="#">Developer API</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr/>
                <div className="row">
                    <div className ="col-lg-12">
                        <ul className="nav nav-pills nav-justified">
                            <li><Link to = "/">© {year} Company Name.</Link></li>
                            <li><a href="https://www.facebook.com/profile.php?id=100016694803709">Follow me</a></li>
                            <li><Link to="#">Privacy</Link></li>
                        </ul>
                    </div>
                </div>
            </footer>
        );
    }
}