import React from 'react';
import InputForm from './InputForm';
class ListItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showInput: false,
        }
    }
    handleSubmit(newValue) {
        this.props.handleAdd(this.props.value,newValue);
        this.setState({ showInput: false});
    }
    renderListItem(style) {
        return (
            <div onClick={() => {
                this.setState({ showInput: !this.state.showInput })
            }}
                className="list-item"
                style={style}>- {this.props.value}</div>
        )
    }
    renderForm(formStyle) {
        if (this.state.showInput) {
            return (<InputForm formStyle={formStyle} handleSubmit={this.handleSubmit.bind(this)}/>
            )
        }
    }
    render() {
        let style = {
            marginLeft: `${this.props.level * 20}px`,
        }
        let formStyle = {
            marginLeft: `${(this.props.level + 1) * 20}px`,
        }
        return (
            <div>
                {this.renderListItem(style)}
                {this.renderForm(formStyle)}
            </div>
        )
    }
}
export default ListItem;