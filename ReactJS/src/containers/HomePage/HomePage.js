import React, { Component } from 'react';
import { connect } from 'react-redux';
import HomeHeader from './HomeHeader';
import Spectalty from './Section/Spectalty';

class HomePage extends Component {

    render() {
        return (
            <div>
                <HomeHeader />
                <Spectalty />
                <div style={{ height: '300px' }}></div>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
