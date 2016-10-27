import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as Actions from '../actions';
import Toolbar from '../components/Toolbar';

class Settings extends Component {
    render() {
        return(
            <div>
                <Toolbar/>
                <h2>Settings Page</h2>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        Settings: state.default.Settings
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(Actions, dispatch)
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Settings);

