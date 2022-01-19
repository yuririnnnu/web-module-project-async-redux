import {FETCH_START, FETCH_SUCCESS, FETCH_FAIL} from './../actions';

const initialState = {
    cat: {
        url: 'https://cdn2.thecatapi.com/images/MTY5NzI5NQ.jpg',
        id: 123,
    },
    isFetching: false,
    error: ''
}

export const reducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_START:
            return {
                ...state,
                cat: {},
                isFetching: true,
                error: ''
            }
        case FETCH_SUCCESS:
            return {
                ...state,
                cat: action.payload,
                isFetching: false,
                error: ''
            }
        case FETCH_FAIL:
            return {
                ...state,
                cat:{},
                isFetching: false,
                error: action.payload
            }
        default:
            return state;
    }
}