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
                <i className="material-icons">star</i>
            </div>
        )

    }
}

 export default Rate;
