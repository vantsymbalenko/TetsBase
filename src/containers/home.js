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
export default connect(mapStateToProps)(home);