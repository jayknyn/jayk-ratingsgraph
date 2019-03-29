import React from 'react';
import {VictoryBar, VictoryChart, VictoryAxis, VictoryTheme} from 'victory';

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
      default: null
    }
  }

  render() {
    return (
      <div>
        <VictoryChart
          // adding the material theme provided with Victory
          theme={VictoryTheme.material}
          domainPadding={20}
        >
          <VictoryAxis
            tickValues={[1, 2, 3, 4, 5]}
            tickFormat={["1 Star", "2 Stars", "3 Stars", "4 Stars", "5 Stars"]}
          />
          <VictoryAxis
            dependentAxis
            tickFormat={(x) => (`${x}`)}
          />
          <VictoryBar horizontal
            data={data}
            x="star"
            y="ratings"
            animate={{
              duration: 2000,
              onLoad: { duration: 1000 }
            }}
          />
        </VictoryChart>
      </div>
    )
  }
}

export default Graph;