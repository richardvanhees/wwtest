import React, {Component} from 'react';
import crown from '../../static/images/crown.png';
import './style.scss';

export default class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className="header__logo">
                    <img className="header__logo-src" src={crown} alt="Logo"/>
                </div>
                <div className="header__title">
                    GOV.UK
                </div>
            </div>
        );
    }
}