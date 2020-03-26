import { CREATE_COURSE } from '../actions/actionTypes';

export default function courseReducer(state = [], action) {
    if (action.type === CREATE_COURSE) {
        return [...state, { ...action.course }];
    }
    return state;
}
