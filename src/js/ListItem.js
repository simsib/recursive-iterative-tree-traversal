import React from 'react';
class ListItem extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let style = {
            paddingLeft: `${this.props.level*20}px`
        }
        console.log(...this.props);
        return (
            <div>
                <div className="list-item" style={style}>- {this.props.value}</div>
            </div>
        );
    }
}

export default ListItem;