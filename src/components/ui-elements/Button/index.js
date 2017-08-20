import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './style.scss';

export default class Button extends Component{
    static propTypes = {
        style: PropTypes.string,
        className: PropTypes.string,
        onClick: PropTypes.func.isRequired,
        title: PropTypes.string.isRequired
    };

    render(){
        return(
            <div
                style={this.props.style}
                className={`button ${this.props.className}`}
                onClick={this.props.onClick}
            >
                <span className="button__title">{this.props.title}</span>
            </div>
        )
    }
}