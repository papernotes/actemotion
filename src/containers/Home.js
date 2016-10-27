import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as Actions from '../actions';
import Basic from '../components/Basic';
import Toolbar from '../components/Toolbar';

class Home extends Component {

    // render the home page and pass the 'settings' as a prop in Box
    render() {
        console.log(this.props)
        return(
            <div>
                <Toolbar/>
                <h2>Home Page</h2>
                <Basic/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        home: state.default.home
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(Actions, dispatch)
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Home);

