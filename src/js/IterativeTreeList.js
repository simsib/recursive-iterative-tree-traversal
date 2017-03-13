import React from 'react';
import ListItem from './ListItem';

import Preprocess from '../helpers/Iterative';
class IterativeTreeList extends React.Component {
    constructor(props) {
        super(props);
    }
    renderItems(items) {
        return items.map(item => {
            return (
                <ListItem key={item.value} handleAdd={(node,value)=>{
                    this.props.handleAdd(node,value)}} {...item}></ListItem>
            );
        }).concat();
    }
    render() {
        let items = Preprocess(this.props.data);
        return (
            <div>
                <h3>{this.props.name}</h3>
                <div className="list">
                    {this.renderItems(items)}
                </div>
            </div>
        );
    }
}

export default IterativeTreeList;