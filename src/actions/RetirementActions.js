import {post} from '../utils/AxiosWrapper';
import {RetirementType} from './ActionTypes';

export const getRetirementDate = data => {
    return dispatch => {
        dispatch({type: RetirementType.REQUEST_DATE_STARTED});

        post({
            route: 'rules',
            data
        }).then(success => {
            dispatch({type: RetirementType.REQUEST_DATE_SUCCESS, payload: success});
        }, error => {
            dispatch({type: RetirementType.REQUEST_DATE_FAILED, payload: error});
        });


    }
};
