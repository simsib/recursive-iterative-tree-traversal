import React from 'react';
import Data from '../helpers/DataFeed';
import RecursiveTreeList from './RecursiveTreeList';
import IterativeTreeList from './IterativeTreeList';
class App extends React.Component {
  render () {
    return (
      <div>
         <h1>Wazeeee</h1>
         <IterativeTreeList name="Iterative" data={Data}></IterativeTreeList>         
         <RecursiveTreeList name="Recursive" data={Data}></RecursiveTreeList>
      </div>);
  }
}

export default App;