import axios from 'axios';

export const FETCH_START = 'FETCH_START';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAIL = 'FETCH_FAIL';
export const FETCH_FAV = 'FETCH_FAV';

export const getCat = () => (dispatch) => {
    console.log("getting a cat here")
    dispatch(fetchStart())
    axios.get(`https://api.thecatapi.com/v1/images/search`)
    .then(res => dispatch(fetchSuccess(res.data[0])))
    .catch(err => dispatch(fetchFail(err)))
}

export const fetchStart = () => {
    return ({type:FETCH_START});
}
export const fetchSuccess = (cat) => {
    return ({type:FETCH_SUCCESS, payload: cat});
}
export const fetchFail = (errMessage) => {
    return ({type:FETCH_FAIL, payload: errMessage});
}
export const fetchFavCats = (cat) => {
    return ({type:FETCH_FAV, payload: cat})
}