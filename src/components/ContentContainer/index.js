import React, {Component} from 'react';
import './style.scss';

export default class ContentContainer extends Component {
    render(){
        return(
            <view className="content-container">
                {this.props.children}
            </view>
        );
    }
}