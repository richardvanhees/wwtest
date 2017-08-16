import immutable from 'seamless-immutable';

import { RetirementType }  from '../actions/ActionTypes';

const INITIAL_STATE = immutable({
    date: null
});


export default function (state = INITIAL_STATE, {type, payload}) {
    switch (type) {
        case RetirementType.REQUEST_DATE_SUCCESS:
            return state.merge({ date: payload.date });

        default:
            return state
    }
}