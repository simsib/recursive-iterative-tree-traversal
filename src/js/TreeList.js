import React from 'react';
import ListItem from './ListItem';
import InputForm from './InputForm';

class TreeList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showInput: false,
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
    handleSubmit(newValue) {
        this.props.handleAdd(null, newValue);
        this.setState({ showInput: false});
    }

    renderForm(formStyle) {
        if (this.state.showInput) {
            return (
                <InputForm formStyle={formStyle} handleSubmit={this.handleSubmit.bind(this)}/>
            )
        }
    }
    render() {
        let items = this.props.preprocess(this.props.data);
        return (
            <div className="list-container">
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