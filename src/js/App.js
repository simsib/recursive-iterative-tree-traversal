import React from 'react';
import Data from '../helpers/DataFeed';
import TreeNode from '../helpers/TreeNode.js';
import TreeList from './TreeList';
import {Preprocess as IterativePreprocess} from '../helpers/Iterative';
import {Preprocess as RecursivePreprocess} from '../helpers/Recursive';

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
        <TreeList name="Iterative" data={this.state.data} handleAdd={this.handleAdd.bind(this)} preprocess={IterativePreprocess}></TreeList>
        <TreeList name="Recursive" data={this.state.data} handleAdd={this.handleAdd.bind(this)} preprocess={RecursivePreprocess}></TreeList>
      </div>);
  }
}

export default App;