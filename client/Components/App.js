import React from 'react';
import {VictoryBar, VictoryChart, VictoryAxis, VictoryTheme} from 'victory';

const data = [
  {stars: 1, reviews: 13000},
  {stars: 2, reviews: 16500},
  {stars: 3, reviews: 14250},
  {stars: 4, reviews: 19000},
  {stars: 5, reviews: 22000}
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      default: null
    }
  }

  // handleNewReview(e) {
  //   e.preventDefault();
  //   const data = {
  //     username: document.getElementById('username').value,
  //     body: document.getElementById('body').value,
  //     score: document.getElementById('score').value,
  //     proscons: {
  //       reliability: Boolean,
  //       durability: Boolean,
  //       looks: Boolean,
  //       performance: Boolean,
  //       value: Boolean
  //     },
  //     likes: document.getElementById('likes').value,
  //     dislikes: document.getElementById('dislikes').value,
  //     productId: document.getElementById('productId').value
  //   }
  // }

  render() {
    return (
      <div>
        <img width="100%" src="https://photos.smugmug.com/photos/i-6gqm6Cv/0/0efb698d/XL/i-6gqm6Cv-XL.png"></img>
        {/* <form>
          <input type='text' id='username' placeholder='username'></input><br></br>
          <input type='text' id='body' placeholder='the review'></input><br></br>
          <input type='text' id='score' placeholder='1 to 5'></input><br></br>
          Reliable:
          <input type='radio' id='reliability' value='True'></input>Yes
          <input type='radio' id='reliability' value='False'></input>No<br></br>
          <input type='text' id='likes' placeholder='likes'></input><br></br>
          <input type='text' id='dislikes' placeholder='dislikes'></input><br></br>
          <input type='text' id='productId' placeholder='productId'></input><br></br>

          <input type='submit' onClick={(e) => this.handleNewReview(e)}></input>
        </form> */}
        <VictoryChart theme={VictoryTheme.material} domainPadding={20}>
          <VictoryAxis
          dependentAxis
            // tickValues specifies both the number of ticks and where
            // they are placed on the axis
            tickValues={[1, 2, 3, 4, 5]}
            tickFormat={["1 stars", "2 stars", "3 stars", "4 stars", "5 stars"]}
          />
          <VictoryAxis
            
            // tickFormat specifies how ticks should be displayed
            tickFormat={(y) => (`${y / 1000}k`)}
          />
          <VictoryBar
            data={data}
            // data accessor for x values
            y="stars"
            // data accessor for y values
            x="reviews"
          />
        </VictoryChart>
      </div>
    )
  }
}

export default App;