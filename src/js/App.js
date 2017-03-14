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
  handleAdd(id,value) {
    console.log(id,value);
    let node = Data.Find(id);
    Data.AddNewNode(node,value)
    this.setState({ data: Data.Data });
  }
  render() {
    return (
      <div className="flex-container">
        <TreeList name="Iterative" data={this.state.data} handleAdd={this.handleAdd.bind(this)} preprocess={IterativePreprocess}></TreeList>
        <TreeList name="Recursive" data={this.state.data} handleAdd={this.handleAdd.bind(this)} preprocess={RecursivePreprocess}></TreeList>
      </div>);
  }
}

export default App;