import React, { Component } from 'react';
import TestName from './TestName';
import '../../css/categoryList.css';

export default class Category extends Component{
    render(){
        let tests = this.props.tests;
        return(
            <div className="row">
                {tests.map((item, categoryId) => {
                    return (
                        <div className="col-lg-6 col-md-6" key = { categoryId }>
                            <div className="wrapper1">
                                <ul>
                                    {
                                        item.map((item, testId) => {
                                            if(typeof item === 'string'){
                                                return <li key = { testId } className = "categoryTitle">
                                                    <span >{item}</span>
                                                </li>
                                            }
                                            return (
                                                <TestName
                                                    key={testId}
                                                    testTitle={item[0]}
                                                    categoryId={categoryId}
                                                    testId={testId}
                                                />
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        </div>
                    );
                })}
            </div>
        );
    }
}