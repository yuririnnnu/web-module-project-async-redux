import React,{useEffect} from 'react';
import {connect} from 'react-redux';
import {getCat} from './../actions';
import axios from 'axios';
import FavoriteCats from './../components/FavoriteCats';

const Cat = ({cat, favCats, dispatch}) => {
    console.log('This is cat=>',cat)
    // console.log('This is dispatch=>',dispatch)
    
    useEffect(()=> {
        dispatch(getCat())
    },[])

    const handleFav = favCat => {
        favCats.push(favCat)
        dispatch(getCat())
        console.log("Just pushed favCat", favCats)
    }
    const handleClick = () => {
        dispatch(getCat())
    }
    return (
        <div className='cats'>
            <h1>Love cats??</h1>
            <button onClick={handleClick}>More Cats</button>
            <img width='500' src={cat.url}/>
            <button onClick={()=>handleFav(cat)}>Love her/him!</button>            
            <FavoriteCats />            
        </div>
    )
}
const mapStateToProps = state => {
    return {
        cat: state.cat,
        isFetching: state.isFetching,
        error: state.error,
        favCats: state.favCats
    };
};

export default connect(mapStateToProps)(Cat);