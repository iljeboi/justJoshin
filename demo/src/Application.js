import React, {Component} from "react";

class Application extends Component {
    constructor(props){
        super(props);

        this.state={
            count: 0,
            overTen: false,
            chokeCount: 0,
            choked: false
        }
    }

    handleClick = () => {
        this.setState({count: this.state.count + 1});
    }
    handleOtherClick = () => {
        this.setState({count: this.state.count - 1});
    }
    chokeCheck = () => {
        if (this.state.choked){
            return <h1>Nevermind.</h1>
        }
    }
    componentDidUpdate(props, state){
        console.log("Updated from", state, "to", this.state);
        if (this.state.count > 10 && this.state !== state && !this.state.overTen){
            this.setState({overTen: true, choked: false});
        }
        else if (this.state.count < 11 && this.state !== state && this.state.overTen){
            this.setState({overTen: false ,chokeCount: this.state.chokeCount + 1, choked: true})
        }
        
    }

    render(){
        let {count} = this.state;

        return(

            <div>
                <div>
                    {(this.state.overTen) ? <h1>You Did It</h1> : this.chokeCheck()}
                    <h1>You Clicked for a Total of {this.state.count} points</h1>
                    <button onClick={() => this.handleClick()} >Click Me</button>
                    <button onClick={() => this.handleOtherClick()}>Don't Click Me!</button>
                </div>
            </div>
        )
    }
}

export default Application;