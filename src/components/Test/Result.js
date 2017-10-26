import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import 'bootstrap/dist/js/bootstrap.js';
import '../../css/result.css';

function Result(props) {

    return (
        <ReactCSSTransitionGroup
            className="container result"
            component="div"
            transitionName="fade"
            transitionEnterTimeout={800}
            transitionLeaveTimeout={500}
            transitionAppear
            transitionAppearTimeout={500}
        >
            <div className="result">
                <p>You result is <strong>{props.quizResult}</strong>! right answers</p>
                <Link className="btn btn-lg btn-primary btn-block" to="/allTests">New Test?</Link>
            </div>
        </ReactCSSTransitionGroup>
    );

}

Result.propTypes = {
    quizResult: PropTypes.number.isRequired,
};

export default Result;