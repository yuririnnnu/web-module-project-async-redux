import React,{useEffect} from 'react';
import {connect} from 'react-redux';
import {getCat} from './../actions';
import axios from 'axios';

const Cat = ({cat, dispatch}) => {
    console.log('This is cat=>',cat)
    // console.log('This is dispatch=>',dispatch)
    
    useEffect(()=> {
        dispatch(getCat())
    },[])
    const handleClick = () => {
        dispatch(getCat())
    }
    return (
        <div className='cats'>
            <h1>Love cats??</h1>
            <button onClick={handleClick}>More Cats</button>
            <img width='500' src={cat.url}/>
            
            <button onClick={handleClick}>Love her/him!</button>            
            
        </div>
    )
}
const mapStateToProps = state => {
    return {
        cat: state.cat,
        isFetching: state.isFetching,
        error: state.error,
    };
};

export default connect(mapStateToProps)(Cat);