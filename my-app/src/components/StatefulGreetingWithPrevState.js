import React from "react";

class StatefulGreetingWithPrevState extends React.Component {
    constructor(props) {
        // Super calls the constructor for React.Component
        super(props);
        this.state = {
            introduction: "Hello!",
            buttonText: "Exit",
            count: 0,
        };
    }

    handleClick() {
        this.setState(
            {
                introduction:
                    this.state.introduction === "Hello!"
                        ? "Goodbye!"
                        : "Hello!",
                buttonText: this.state.buttonText === "Exit" ? "Enter" : "Exit",
            },
            () => {
                console.log("New state", this.state.introduction);
                console.log("New state", this.state.buttonText);
            }
        );
        console.log(this.state.introduction);
        console.log(this.state.buttonText);
    }

    increment() {
        this.setState({
            count: this.state.count + 1,
        });
        console.log(this.state.count);
    }

    incrementFive() {
        this.increment();
        this.increment();
        this.increment();
        this.increment();
        this.increment();
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
                <button onClick={() => this.incrementFive()}>
                    Increment Five
                </button>
                <p>You've clicked {this.state.count} times</p>
            </div>
        );
    }
}

export default StatefulGreetingWithPrevState;
