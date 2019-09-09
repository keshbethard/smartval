import React from 'react';
import './style.scss';

const stars = value => {
    const number = parseInt(value);

    if(number === 5) {
        return (
            <div className="five-stars">
                <i className="material-icons first">star</i>
                <i className="material-icons second">star</i>
                <i className="material-icons third">star</i>
                <i className="material-icons fourth">star</i>
                <i className="material-icons fifth">star</i>
            </div>
        )
    }
    if(number === 4) {
        return (
            <div>
                <i className="material-icons">star</i>
                <i className="material-icons">star</i>
                <i className="material-icons">star</i>
                <i className="material-icons">star</i>
                <i className="material-icons empty">star</i>
            </div>
        )
    }
    if(number === 3) {
        return (
            <div>
                <i className="material-icons">star</i>
                <i className="material-icons">star</i>
                <i className="material-icons">star</i>
                <i className="material-icons empty">star</i>
                <i className="material-icons empty">star</i>
            </div>
        )
    }
    if(number === 2) {
        return (
            <div>
                <i className="material-icons">star</i>
                <i className="material-icons">star</i>
                <i className="material-icons empty">star</i>
                <i className="material-icons empty">star</i>
                <i className="material-icons empty">star</i>
            </div>
        )
    }
    if(number === 1) {
        return (
            <div>
                <i className="material-icons">star</i>
                <i className="material-icons empty">star</i>
                <i className="material-icons empty">star</i>
                <i className="material-icons empty">star</i>
                <i className="material-icons empty">star</i>
            </div>
        )
    }
    if(number === 0) {
        return (
            <div>
                <i className="material-icons empty">star</i>
                <i className="material-icons empty">star</i>
                <i className="material-icons empty">star</i>
                <i className="material-icons empty">star</i>
                <i className="material-icons empty">star</i>
            </div>
        )
    }
 };

 export default stars;
