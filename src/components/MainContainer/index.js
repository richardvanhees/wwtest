import React, {Component} from 'react';

import Header from '../Header';
import './style.scss';

export default class MainContainer extends Component {
    render(){
        return(
            <div className="main-container">
                <Header/>
                {this.props.children}
            </div>
        );
    }
}