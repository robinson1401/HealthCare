import React, { Component } from 'react';
import { connect } from 'react-redux';
import './MedicalFacility.scss';

import Slider from 'react-slick';

class MedicalFacility extends Component {

    render() {
        return (
            <div className="section-share section-medical-facility">
                <div className="section-container">
                    <div className="section-header">
                        <span className='title-section'>Chuyên khoa phổ biến</span>
                        <button className="btn-section">xem thêm</button>
                    </div>
                    <div className='section-body'>
                        <Slider {...this.props.settings}>
                            <div className="section-customize">
                                <div className="bg-image section-medical-factility"></div>
                                <h3>Hệ thống y tế Thu Cúc  1</h3>
                            </div>
                            <div className="section-customize">
                                <div className="bg-image section-medical-factility"></div>
                                <h3>Hệ thống y tế Thu Cúc  2</h3>
                            </div>
                            <div className="section-customize">
                                <div className="bg-image section-medical-factility"></div>
                                <h3>Hệ thống y tế Thu Cúc  3</h3>
                            </div>
                            <div className="section-customize">
                                <div className="bg-image section-medical-factility"></div>
                                <h3>Hệ thống y tế Thu Cúc  4</h3>
                            </div>
                            <div className="section-customize">
                                <div className="bg-image section-medical-factility"></div>
                                <h3>Hệ thống y tế Thu Cúc  5</h3>
                            </div>
                            <div className="section-customize">
                                <div className="bg-image section-medical-factility"></div>
                                <h3>Hệ thống y tế Thu Cúc  6</h3>
                            </div>
                        </Slider>
                    </div>
                </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(MedicalFacility);
