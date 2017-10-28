import React, { Component } from 'react';
// import Test from '../components/Test';
import Category from '../components/TestsList/CategorysList';
import jsonData from '../json/file.json';
// import '../css/categoryList.css';

export default class allTests extends Component{
    componentWillMount(){
        this.tests = jsonData.categories;
    }
    render(){
        return(
            <Category tests = { this.tests }/>
        );
    }
}