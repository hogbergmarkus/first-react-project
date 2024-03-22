import React, { Component } from "react";

export class ControlledForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            category: "website",
            comments: "",
        };
    }

    // handleNameChange = (event) => {
    //     this.setState({
    //         name: event.target.value,
    //     });
    // };

    // handleCategoryChange = (event) => {
    //     this.setState({
    //         category: event.target.value,
    //     });
    // };

    // handleCommentsChange = (event) => {
    //     this.setState({
    //         comments: event.target.value,
    //     });
    // };

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value,
        });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
    };

    render() {
        return (
            <div>
                <h2>Please fill out the form below:</h2>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="id-name">Your Name: </label>
                        <input
                            value={this.state.name}
                            onChange={this.handleChange}
                            id="id-name"
                            name="name"
                            type="text"
                        />
                    </div>
                    <div>
                        <label htmlFor="id-category">Query Category: </label>
                        <select
                            value={this.state.category}
                            onChange={this.handleChange}
                            id="id-category"
                            name="category"
                        >
                            <option value="website">Website issue</option>
                            <option value="order">Order issue</option>
                            <option value="general">General inquiry</option>
                        </select>
                        <input type="submit" value="Submit" />
                    </div>
                    <div>
                        <label htmlFor="id-comments">Comments: </label>
                        <textarea
                            value={this.state.comments}
                            onChange={this.handleChange}
                            id="id-comments"
                            name="comments"
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default ControlledForm;
