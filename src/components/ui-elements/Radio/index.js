import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './style.scss';

export default class Radio extends Component {
    static propTypes = {
        onChange: PropTypes.func.isRequired,
        name: PropTypes.string.isRequired,
        values: PropTypes.array.isRequired
    };

    constructor(props){
        super(props);

        this.setOnChange = this.setOnChange.bind(this);

        this.state = {
            selected: null
        }
    }

    setOnChange(ev){
        if(ev.target.value !== this.state.selected) {
            this.setState({
                selected: ev.target.value
            });
            this.props.onChange(ev.target.value);
        }

    }


    render() {
        return (
            <div className="radio">
                {this.props.values.map(item =>
                    <label
                        className="radio__option"
                        key={`radio-${item.value}`}
                    >
                        <input onClick={this.setOnChange}
                               className="radio__input"
                               name={this.props.name}
                               type="radio"
                               value={item.value}
                        />
                        {item.label}
                    </label>)}
            </div>

        )
    }
}