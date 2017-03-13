import React from 'react';
import Data from '../helpers/DataFeed';
import TreeNode from '../helpers/TreeNode.js';
import RecursiveTreeList from './RecursiveTreeList';
import IterativeTreeList from './IterativeTreeList';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: Data.Data
    }
  }
  handleAdd(item,value) {
    let node = Data.Find(item);
    node.addNewNode(new TreeNode(value));
    this.setState({ data: Data.Data });
  }
  render() {
    return (
      <div>
        <h1>Wazeeee</h1>
        <IterativeTreeList name="Iterative" data={this.state.data} handleAdd={this.handleAdd.bind(this)}></IterativeTreeList>
        <RecursiveTreeList name="Recursive" data={this.state.data} handleAdd={this.handleAdd.bind(this)}></RecursiveTreeList>
      </div>);
  }
}

export default App;