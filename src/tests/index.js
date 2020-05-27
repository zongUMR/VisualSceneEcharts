import React from 'react';
import { shallow } from 'enzyme';
import ReactEcharts from '../index';
import { expect } from 'chai';
const { describe, it } = global;

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

describe('React Echarts', () => {
  it('should render a single `div` wrapper', () => {
    const wrapper = shallow(
      <ReactEcharts
        height={500}
        option={option}
      />
    );
    expect(wrapper.find('div')).to.have.length(1);
  });
});
