import React, { Component } from 'react';

class InputForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newValue: ""
        }
    }
    handleChange(event) {
        this.setState({ newValue: event.target.value });
    }
    render() {
        return (
            <form
                style={this.props.formStyle}
                onSubmit={
                    (e) => {e.preventDefault();this.props.handleSubmit(this.state.newValue)}}
            >            
                <label>
                    <input autoFocus type="text" value={this.state.newValue} onChange={this.handleChange.bind(this)} />
                </label>
                <input type="submit" value="add new node" />
            </form>
        );
    }
}

export default InputForm;