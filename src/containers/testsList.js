import React, { Component } from 'react';
import CategorysList from '../components/TestsList/CategorysList';
import jsonData from '../json/file.json';

export default class allTests extends Component{
    componentWillMount(){
        this.tests = jsonData.categories;
    }
    render(){
        return(
            <CategorysList tests = { this.tests }/>
        );
    }
}