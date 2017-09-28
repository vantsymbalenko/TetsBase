import React, { Component } from 'react';
import Test from '../components/Test';
import jsonData from '../json/file.json';

export default class allTests extends Component{
    componentWillMount(){
        this.tests = jsonData.categories;
    }
    render(){
        return(
            <div>
                {this.tests.map( (item,categoryId) => {
                        return item.map((item, testId) => {
                            if(typeof item === 'string'){
                                return <span>{item}</span>
                            }
                            return (
                                <Test
                                    key={testId}
                                    testTitle={item[0]}
                                    categoryId={categoryId}
                                    testId={testId}
                                />
                            )
                        })
                })}
            </div>
        );
    }
}