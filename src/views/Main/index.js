import React, {Component} from 'react';
import {connect} from 'react-redux';
import moment from 'moment';

import MainContainer from '../../components/MainContainer';
import ContentContainer from '../../components/ContentContainer';
import {Button, Dropdown, Radio} from '../../components/ui-elements';

import './style.scss';

import {getRetirementDate} from '../../actions/RetirementActions';

const days = [...Array(31)].map((v, i) => ((i + 1) < 10 ? `0${i + 1}` : i + 1).toString());
const months = [...Array(12)].map((v, i) => ((i + 1) < 10 ? `0${i + 1}` : i + 1).toString());
const years = [...Array(150)].map((v, i) => (i + 1899).toString());
const genders = [{label: 'Male', value: 'M'}, {label: 'Female', value: 'F'}];

class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            gender: null,
            day: null,
            month: null,
            year: null,
            date: null
        };

        this.calculateDate = this.calculateDate.bind(this);
    }

    calculateDate() {
        this.props.getRetirementDate({
            gender: this.state.gender,
            dob: `${this.state.year}-${this.state.month}-${this.state.day}`
        });
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            date: nextProps.retirementDate
        });
    }

    render() {
        return (
            <MainContainer>
                <ContentContainer>
                    <div className="intro">
                        <h1 className="intro__header">Check your state pension</h1>
                        <div className="intro__text">Enter your birth date and gender</div>
                    </div>
                    <div className="calculator">
                        <div className="calculator__dropdowns">
                            <Dropdown
                                onChange={val => this.setState({day: val})}
                                nullLabel="Day"
                                values={days}
                            />
                            <Dropdown
                                onChange={val => this.setState({month: val})}
                                nullLabel="Month"
                                values={months}
                            />
                            <Dropdown
                                onChange={val => this.setState({year: val})}
                                nullLabel="Year"
                                values={years}
                            />
                        </div>
                        <div className="calculator__radios">
                            <Radio
                                onChange={val => this.setState({gender: val})}
                                values={genders}
                                name="genders"
                            />
                        </div>


                        <Button
                            className="calculator__button"
                            title="Check"
                            onClick={this.calculateDate}
                        />

                        {this.state.date &&
                        <div className="calculator__result">
                            <div className="calculator__result-intro">You can start enjoying your retirement on the</div>
                            <div className="calculator__result-date">{moment(this.state.date).format('Do [of] MMMM, YYYY')}</div>
                        </div>
                        }
                    </div>
                </ContentContainer>
            </MainContainer>
        );
    }
}

const mapStateToProps = state => {
    return {
        retirementDate: state.retirement.date
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getRetirementDate: data => dispatch(getRetirementDate(data))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
