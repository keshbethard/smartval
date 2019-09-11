import React from 'react';
import './style.scss';

class Rate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          like: false
        };
    }

    toggleLike = () => {
        this.setState(prevState => ({
            like: !prevState.like
        }));
    }

    render() {
        console.log(this.state.like);
        
        return (
            <div className={this.state.like ? 'like up' : 'like'} onClick={this.toggleLike}>
                {this.state.like ? (
                    <i className="material-icons">exposure_plus_1</i>
                ) : (
                    <i className="material-icons">star_border</i>
                )}
            </div>
        )

    }
}

 export default Rate;
