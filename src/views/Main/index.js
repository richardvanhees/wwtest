import React, {Component} from 'react';
import {connect} from 'react-redux';

import MainContainer from '../../components/MainContainer';
import ContentContainer from '../../components/ContentContainer';
import './style.scss';

import {getRetirementDate} from '../../actions/RetirementActions';

class App extends Component {
    render() {
        this.props.getRetirementDate({
            gender: 'M',
            dob: '1989-03-08'
        });

        return (
            <MainContainer>
                <ContentContainer>
                    <div className="intro">
                        <div className="intro__text">Enter your birth date and gender</div>
                    </div>
                </ContentContainer>
            </MainContainer>
        );
    }
}

const mapStateToProps = state => {
    return {};
};

const mapDispatchToProps = dispatch => {
    return {
        getRetirementDate: data => dispatch(getRetirementDate(data))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
