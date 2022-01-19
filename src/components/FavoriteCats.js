import {connect} from 'react-redux';
import React from 'react';

export const FavoriteCats = ({favCats}) => {
    console.log("this is my favCats", favCats)
    
    return (
        <div>
            <h2>My favorite Cats🐱💕</h2>
            {
                favCats.map((favCat) => {
                    return (
                        <img width='300' src={favCat.url} />
                    )
                })
            }
        </div>
    )
}
const mapStateToProps = state => {
    console.log(state)
    return {
        cat: state.cat,
        isFetching: state.isFetching,
        error: state.error,
        favCats: state.favCats
    };
};

export default connect(mapStateToProps)(FavoriteCats);