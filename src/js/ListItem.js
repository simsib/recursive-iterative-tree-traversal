import React from 'react';
class ListItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showInput: false,
            newValue: ""
        }
    }
    handleChange(event) {
        this.setState({ newValue: event.target.value });
    }
    handleSubmit(e) {
        e.preventDefault();
        this.props.handleAdd(this.props.value, this.state.newValue);
        this.setState({ showInput: false, newValue: "" });
    }
    componentDidMount() {
        if (this.state.showInput)
            this.nameInput.focus();
    }
    render() {
        let style = {
            paddingLeft: `${this.props.level * 20}px`,
            cursor: 'pointer'
        }
        let formStyle = {
            paddingLeft: `${(this.props.level + 1) * 20}px`,
        }
        if (this.state.showInput) {
            return (
                <div>
                    <div onClick={() => {
                        this.setState({ showInput: !this.state.showInput });
                    }}
                        className="list-item"
                        style={style}>- {this.props.value}</div>
                    <form
                        style={formStyle}
                        onSubmit={this.handleSubmit.bind(this)}
                    >
                        <label>
                            <input type="text" value={this.state.newValue} onChange={this.handleChange.bind(this)} />
                        </label>
                        <input type="submit" value="Submit" />
                    </form>
                </div>)
        } else {
            return (
                <div onClick={() => {
                    this.setState({ showInput: !this.state.showInput })
                }}
                    className="list-item"
                    style={style}>- {this.props.value}</div>
            )
        }
    }
}
export default ListItem;