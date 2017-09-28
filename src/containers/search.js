import React, { Component } from 'react';
import Search from '../components/Search';
import { connect } from 'react-redux';
import jsonData from '../json/file.json';

class search extends Component{
    render(){
        console.log(this.props.searchCat);
        return(
            <Search searchCat = {this.props.searchCat}/>
        )
    }
}

function mapStateToProps(state){
    // let keys = Object.keys(state.categories);
    // console.log('keys = '+keys);
    // let keys2 = keys.map((item) => {
    //    return (Object.keys(state.categories[item]));
    // });
    // console.log(keys2);
    // for(let i = keys2.length-1; i>0;i--){
    //     keys2[i-1] = keys2[i-1].concat(keys2[i]);
    // }
    // let keys3 = keys2[0].filter((item) => {
    //    return item.includes(state.search.words);
    // });
    // console.log(keys3);
    // let keys3 = [];
    // state.categories.map((item,index) =>{
    //     let category = index;
    //     let test;
    //     let search = [];
    //     console.log(item);
    //     console.log(typeof item);
    //     for( let key in item){
    //         console.log(key);
    //         console.log(item.key);
    //         item[key].map((item,index) => {
    //             let test = index;
    //             for( let key in item){
    //                 if(key.includes(state.search.words)){
    //                    keys3.push({
    //                         category: category,
    //                         test: test,
    //                         search: key
    //                     });
    //                 }
    //             }
    //         })
    //     }
    // });
    let keys3 = [];
    const categories = jsonData.categories;
    categories.map((item,index) => {
       for( let i=1;i<item.length;i++){
           if(item[i][0].includes(state.search.words)){
               keys3.push({
                   categoryId: index,
                   testId: i,
                   testTitle: item[i][0]
               });
           }
       }
       return null;
    });
    return {
        searchCat: keys3
    }
}
export default connect(mapStateToProps)(search);
