import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
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
                <p>You have is <strong>{props.quizResult}</strong> correct answers</p>
                <Link className="btn btn-lg btn-primary btn-block" to="/allTests">New Test?</Link>
            </div>
        </ReactCSSTransitionGroup>
    );
}

Result.propTypes = {
    quizResult: PropTypes.number.isRequired,
};

export default Result;