import React from 'react';
import CenteredGrid from './Grid.js';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productId: 1,
      reviews: [[], [], [], [], []],
      ratingAverage: 3,
      ratings: [1, 2, 3, 4, 5],
      pros: [2, 3, 5, 4, 1],
      cons: [-3, -2, 0, -1, -4]
    }
  }

  handleNewProduct(e) {
    e.preventDefault();
    const data = {
      productId: e.target.value
    }
    console.log('in App, data:', data)
    axios.post('http://localhost:4000/api/getreviews', data)
      .then(res => {
        console.log('axios getreviews success, res.data', res.data)
        const reviews = res.data;
        const newRatings = [0, 0, 0, 0, 0];
        const newPros = [0, 0, 0, 0, 0];
        const newCons = [0, 0, 0, 0, 0];
        for (let review of reviews) {
          if (review.score === 1) {
            newRatings[0]++
          } else if (review.score === 2) {
            newRatings[1]++
          } else if (review.score === 3) {
            newRatings[2]++
          } else if (review.score === 4) {
            newRatings[3]++
          } else if (review.score === 5) {
            newRatings[4]++
          }
        }
        for (let review of reviews) {
          if (review.proscons.value === true) {
            newPros[0]++
          } else {
            newCons[0]--
          }
          if (review.proscons.reliability === true) {
            newPros[1]++
          } else {
            newCons[1]--
          }
          if (review.proscons.performance === true) {
            newPros[2]++
          } else {
            newCons[2]--
          }
          if (review.proscons.looks === true) {
            newPros[3]++
          } else {
            newCons[3]--
          }
          if (review.proscons.durability === true) {
            newPros[4]++
          } else {
            newCons[4]--
          }
        }

        const newRatingAverage = (newRatings.reduce(((acc, curr) => acc + curr), 0) / 5);
        console.log('newRatingAverage:', newRatingAverage, 'newRatings:', newRatings)
        console.log('newPros:', newPros, 'newCons:', newCons)
        this.setState({
          reviews: reviews,
          ratingAverage: newRatingAverage,
          ratings: newRatings,
          pros: newPros,
          cons: newCons
        })
      })
      .catch(err => {
        console.log('axios getreviews error:', err)
      })
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
        <CenteredGrid 
          ratings={this.state.ratings} 
          ratingAverage={this.state.ratingAverage}
          reviews={this.state.reviews}
          pros={this.state.pros} 
          cons={this.state.cons}
        />
      </div>
    )
  }
}

export default App;