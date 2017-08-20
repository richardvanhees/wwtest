import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './style.scss';

export default class Dropdown extends Component {
    static propTypes = {
        onChange: PropTypes.func.isRequired,
        nullLabel: PropTypes.string.isRequired,
        values: PropTypes.array.isRequired
    };

    render() {
        return (
            <select className="dropdown" onChange={ev => {
                this.props.onChange(ev.target.value)
            }}>
                <option value={null}>{this.props.nullLabel}</option>
                {this.props.values.map(value => <option key={`option-${value}`} value={value}>{value}</option>)}
            </select>
        )
    }
}