import React, { Component } from 'react';

import ReactEcharts from '../index';

class ChartComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      height: 400,
    };
    this._handleClick = this._handleClick.bind(this);
  }

  _handleClick() {
    this.setState({
      height: 300 + Math.floor(Math.random() * 200),
    });
  }

  render() {
    const option = {
      title: { text: 'Chart Example' },
      tooltip: {},
      xAxis: {
        data: ['A', 'B', 'C', 'D', 'E', 'F'],
      },
      yAxis: {},
      series: [{
        name: 'sales',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20],
      }],
    };

    return (
      <div>
        <button onClick={this._handleClick}>Change height</button>
        <ReactEcharts
          height={this.state.height}
          option={option}
        />
      </div>
    );
  }
}

const HeightChangeChart = () => (
  <ChartComponent />
);

export default HeightChangeChart;
