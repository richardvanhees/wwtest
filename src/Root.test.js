import React from 'react';
import Root from './Root';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
    global.document = {
        createElement: function() { return {
            on: function() {}
        }}
    };
    const div = document.createElement('div');
    shallow(<Root />);
});
