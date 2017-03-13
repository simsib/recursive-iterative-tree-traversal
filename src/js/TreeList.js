import React from 'react';
import ListItem from './ListItem';

class TreeList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showInput: false,
            newValue: ""
        }
    }
    renderItems(items) {
        return items.map(item => {
            return (
                <ListItem key={item.value} handleAdd={(node, value) => {
                    this.props.handleAdd(node, value)
                }} {...item}></ListItem>
            );
        }).concat();
    }
    handleChange(event) {
        this.setState({ newValue: event.target.value });
    }
    handleSubmit(e) {
        e.preventDefault();
        this.props.handleAdd(null, this.state.newValue);
        this.setState({ showInput: false, newValue: "" });
    }

    renderForm(formStyle) {
        if (this.state.showInput) {
            return (
                <form
                    style={formStyle}
                    onSubmit={this.handleSubmit.bind(this)}
                >
                    <label>
                        <input autoFocus type="text" value={this.state.newValue} onChange={this.handleChange.bind(this)} />
                    </label>
                    <input type="submit" value="add new node" />
                </form>
            )
        }
    }
    render() {
        let items = this.props.preprocess(this.props.data);
        return (
            <div>
                {/*<h3 onClick={() => { this.props.handleAdd(null, "new tree node") }}>{this.props.name}</h3>*/}
                <h3 onClick={() => { this.setState({ showInput: !this.state.showInput }) }}>{this.props.name}</h3>
                {this.renderForm({})}
                <div className="list">
                    {this.renderItems(items)}
                </div>
            </div>
        );
    }
}

export default TreeList;