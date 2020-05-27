import React from 'react';
import { action } from '@kadira/storybook';
import ReactEcharts from '../index';

const option = {
  title: { text: 'Bar Chart Example' },
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

function onReady(e) {
  console.log(e);
  action('onReady')('check dev console to see args');
}

function onClick(e) {
  console.log(e);
  action('onClick')('check dev console to see args');
}

const SimpleBarChart = () => (
  <ReactEcharts
    height={500}
    option={option}
    onReady={onReady}
    onClick={onClick}
  />
);

export default SimpleBarChart;
