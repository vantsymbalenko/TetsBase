import React, { Component } from 'react';
import Home from '../components/Home';
import { connect } from 'react-redux';

class home extends Component{
    render(){
        return(
            <Home imgSrc = {this.props.imgSrc}/>
        );
    }
}
function mapStateToProps(state) {
    return{
        imgSrc: state.auth.imgSrc
    }
}
function mapDispatchToProps(){
    return{

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(home);