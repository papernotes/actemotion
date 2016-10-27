import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import * as Actions from '../actions';

class Settings extends Component {
    render() {
        return(
            <div>
                <h2>Settings Page</h2>
                <li ><Link to={'/analytics/'}>Analytics</Link></li>
                <li ><Link to={'/'}>Home</Link></li>
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

