import React from 'react';
import {VictoryBar, VictoryChart, VictoryAxis, VictoryTheme} from 'victory';
import StarRatings from 'react-star-ratings'; //https://www.npmjs.com/package/react-star-ratings

class Graph extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: 3.5
    }
  }
  
  changeRating(newRating) {
    this.setState({
      rating: newRating
    })
  }
  
  render() {
    
    const data = [
      {star: 1, ratings: 5},
      {star: 2, ratings: 7},
      {star: 3, ratings: 14},
      {star: 4, ratings: 19},
      {star: 5, ratings: 25}
    ];

    return (
      <div>
        <StarRatings
          rating={this.state.rating}
          starRatedColor="orange"
          numberOfStars={5}
          starDimension="20px"
          starSpacing="5px"
        />
        <span>{this.state.rating}</span>
        <VictoryChart
          theme={VictoryTheme.material}
          domainPadding={10} // padding from the axis
          style={{tickLabels: {fontFamily: "'Fira Sans', sans-serif", fontSize: 20}}}
          padding={{ top: 20, bottom: 5, left: 50, right: 20 }}
          height={150}

        >
          <VictoryAxis
            //tickValues={[1, 2, 3, 4, 5]}
            tickFormat={["1 Star", "2 Stars", "3 Stars", "4 Stars", "5 Stars"]}
            style={{ 
              tickLabels: { fontSize: 12, fill: '#808080', fontFamily: "'Fira Sans', sans-serif" }
            }}
            
          />
          <VictoryBar horizontal
            data={data}
            x="star"
            y="ratings"
            animate={{
              duration: 2000,
              onLoad: { duration: 1000 }
            }}
            style={{
              data: {fill: "#a00000", width: 20},
              tickLabels: {color: "red"}
            }}
            alignment="middle"
            //barWidth={30}
            cornerRadius={{ top: 5}}
            //labels={data}
            
          />
        </VictoryChart>
      </div>
    )
  }
}

export default Graph;