import React from 'react';
import RecursiveTreeList from './RecursiveTreeList';
import IterativeTreeList from './IterativeTreeList';
class App extends React.Component {
  render () {
    return (
      <div>
         <h1>Wazeeee</h1>
         <IterativeTreeList name="Iterative"></IterativeTreeList>         
         <RecursiveTreeList name="Recursive"></RecursiveTreeList>
      </div>);
  }
}

export default App;