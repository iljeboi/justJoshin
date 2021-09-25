import React, {Component} from "react";
class HighScore extends Component {

    render() {
        if(this.props.overTen){
            return(
                <div>
                    <h3>Beat High score of 10!</h3>
                    <button onClick={this.props.onReset}>onReset</button>
                </div>
            )
        }else{
            return null;
        }
    }
}

export default HighScore;