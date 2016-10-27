import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import * as Actions from '../actions';
import Box from '../components/Box';
import BoxStyles from '../styles/BoxStyles';
import {Button} from 'react-bootstrap';

class Home extends Component {

    // change the text in the button with an action
    changeText() {
        this.props.actions.changeTitle();
    }

    // render the home page and pass the 'settings' as a prop in Box
    render() {
        console.log(this.props)
        return(
            <div>
                <h2>Home Page</h2>
                <Button onClick={this.changeText.bind(this)}>Click me to change the text -> {this.props.home.text}</Button>
                <Box page={'settings'} style={BoxStyles}/>
                <li ><Link to={'/settings/'}>Settings</Link></li>
                <li ><Link to={'/analytics/'}>Analytics</Link></li>
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

