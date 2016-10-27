import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as Actions from '../actions';
import Toolbar from '../components/Toolbar';

class Analytics extends Component {
    render() {
        return(
            <div>
                <Toolbar/>
                <h2>Analytics Page</h2>
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

