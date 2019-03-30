import React from 'react';
import {VictoryBar, VictoryChart, VictoryAxis, VictoryTheme} from 'victory';
import StarRatings from 'react-star-ratings'; //https://www.npmjs.com/package/react-star-ratings

const data = [
  {star: 1, ratings: 5},
  {star: 2, ratings: 7},
  {star: 3, ratings: 14},
  {star: 4, ratings: 19},
  {star: 5, ratings: 25}
];

class Graph extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      default: null,
      rating: 3.5
    }
  }

  changeRating(newRating) {
    this.setState({
      rating: newRating
    })
  }

  render() {
    return (
      <div>
        <StarRatings
          rating={this.state.rating}
          starRatedColor="orange"
          numberOfStars={5}
          starDimension="30px"
          starSpacing="5px"
        />
        <VictoryChart
          theme={VictoryTheme.material}
          domainPadding={10} // padding from the axis
          style={{tickLabels: {fontFamily: "'Fira Sans', sans-serif", fontSize: 20}}}
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
              data: {fill: "#a00000", width: 30},
              tickLabels: {color: "red"}
            }}
            alignment="middle"
            //barRatio={0.8}
            barWidth={40}
            cornerRadius={{ top: 7}}
            labels={data}
            
          />
        </VictoryChart>
      </div>
    )
  }
}

export default Graph;