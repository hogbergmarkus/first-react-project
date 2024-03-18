import React from "react";

class StatefulGreetingWithCallback extends React.Component {
    constructor(props) {
        // Super calls the constructor for React.Component
        super(props);
        this.state = {
            introduction: "Hello!",
            buttonText: "Exit",
        };
    }

    handleClick() {
        this.setState(
            {
                introduction: "Goodbye!",
                buttonText: "Enter",
            },
            () => {
                console.log("New state", this.state.introduction);
                console.log("New state", this.state.buttonText);
            }
        );
        console.log(this.state.introduction);
        console.log(this.state.buttonText);
    }

    render() {
        return (
            <div>
                <h1>
                    {this.state.introduction} {this.props.greeting}
                </h1>
                <button onClick={() => this.handleClick()}>
                    {this.state.buttonText}
                </button>
            </div>
        );
    }
}

export default StatefulGreetingWithCallback;
