import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';

import registerServiceWorker from './registerServiceWorker';

import Root from './Root';

ReactDOM.render((
    <div>
        <Root />
    </div>
), document.getElementById('root'));

registerServiceWorker();
