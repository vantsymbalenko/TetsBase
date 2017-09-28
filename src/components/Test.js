import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Test extends Component{
    render(){
        let categoryId = this.props.categoryId,
        testId = this.props.testId,
        testTitle = this.props.testTitle;
        return(
            <div>
                <li><Link to = {'/test/'+categoryId+'/'+testId}>{ testTitle}</Link></li>
            </div>
        );
    }
}