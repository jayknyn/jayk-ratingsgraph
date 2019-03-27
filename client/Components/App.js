import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      default: null
    }
  }

  render() {
    return (
      <div>
        <img width="100%" src="https://photos.smugmug.com/photos/i-6gqm6Cv/0/0efb698d/XL/i-6gqm6Cv-XL.png"></img>
      </div>
    )
  }
}

export default App;