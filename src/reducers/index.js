import {FETCH_START, FETCH_SUCCESS, FETCH_FAIL, FETCH_FAV} from './../actions';

const initialState = {
    cat: {
        url: 'https://cdn2.thecatapi.com/images/MTY5NzI5NQ.jpg',
        id: 123,
    },
    isFetching: false,
    error: '',
    favCats:[]
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
        case FETCH_FAV:
            return {
                ...state,
                favCats: action.payload,
                error: '',
                isFetching: false
            }
        default:
            return state;
    }
}