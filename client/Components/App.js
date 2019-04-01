import React from 'react';
import CenteredGrid from './Grid.js';
// import CheckboxList from './List.js';
import AppBar from '@material-ui/core/AppBar';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productId: 1
    }
  }

  handleNewProduct(e) {
    e.preventDefault();
    const data = {
      productId: e.target.value
    }
    console.log('data:', data)

  }

  render() {
    return (
      <div>
        {/* <img width="100%" src="https://photos.smugmug.com/photos/i-6gqm6Cv/0/0efb698d/XL/i-6gqm6Cv-XL.png"></img> */}
        <form>
          <button value='1' onClick={(e) => this.handleNewProduct(e)}>Product 1</button>
          <button value='2' onClick={(e) => this.handleNewProduct(e)}>Product 2</button>
          <button value='3' onClick={(e) => this.handleNewProduct(e)}>Product 3</button>
          <button value='4' onClick={(e) => this.handleNewProduct(e)}>Product 4</button>
          <button value='5' onClick={(e) => this.handleNewProduct(e)}>Product 5</button>
        </form><br></br>
        <CenteredGrid />
        
      </div>
    )
  }
}

export default App;