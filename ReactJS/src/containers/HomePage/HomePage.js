import React, { Component } from 'react';
import { connect } from 'react-redux';
import HomeHeader from './HomeHeader';
import Spectalty from './Section/Spectalty';
import MedicalFacility from './Section/MedicalFacility';
import OutStadingDoctor from './Section/OutStadingDoctor';
import HandBook from './Section/HandBook';
import './HomePage.scss';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class HomePage extends Component {

    render() {
        let settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,
        };
        return (
            <div>
                <HomeHeader />
                <Spectalty
                    settings={settings} />
                <MedicalFacility
                    settings={settings} />
                <OutStadingDoctor
                    settings={settings} />
                <HandBook
                    settings={settings} />
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
