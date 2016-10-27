import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import * as Actions from '../actions';

class Analytics extends Component {
    render() {
        return(
            <div>
                <h2>Analytics Page</h2>
                <li ><Link to={'/settings/'}>Settings</Link></li>
                <li ><Link to={'/'}>Home</Link></li>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        Analytics: state.default.Analytics
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(Actions, dispatch)
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Analytics);

