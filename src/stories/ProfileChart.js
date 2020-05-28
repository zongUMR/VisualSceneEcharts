import React from 'react';
import 'echarts/lib/component/toolbox';
import 'echarts/lib/chart/pie';
import 'echarts/lib/chart/funnel';
import ReactEcharts from '../index';

const option = {

  title: {
    x: 'center',
    text: 'ECharts Chart Statistics',
    subtext: 'Rainbow bar example',
    link: 'https://echarts.baidu.com/doc/example.html'
  },
  tooltip: {
    trigger: 'item'
  },
  toolbox: {
    show: true,
    feature: {
      dataView: {show: true, readOnly: false},
      restore: {show: true},
      saveAsImage: {show: true}
    }
  },
  calculable: true,
  grid: {
    borderWidth: 0,
    y: 80,
    y2: 60
  },
  xAxis: [
    {
      type: 'category',
      show: false,
      data: ['Line', 'Bar', 'Scatter', 'K', 'Pie', 'Radar', 'Chord', 'Force', 'Map', 'Gauge', 'Funnel']
    }
  ],
  yAxis: [
    {
      type: 'value',
      show: false
    }
  ],
  series: [
    {
      name: 'ECharts Ion Number Statistics',
      type: 'bar',
      itemStyle: {
        normal: {
          color: function(params) {
            // build a color map as your need.
            var colorList = [
              '#C1232B','#B5C334','#FCCE10','#E87C25','#27727B',
              '#FE8463','#9BCA63','#FAD860','#F3A43B','#60C0DD',
              '#D7504B','#C6E579','#F4E001','#F0805A','#26C0C0'
            ];
            return colorList[params.dataIndex]
          },
          label: {
            show: true,
            position: 'top',
            formatter: '{b}\n{c}'
          }
        }
      },
      data: [12,21,10,4,12,5,6,5,25,23,7],
      markPoint: {
        tooltip: {
          trigger: 'item',
          backgroundColor: 'rgba(0,0,0,0)',
          formatter: function(params){
            return '<img src="'
              + params.data.symbol.replace('image://', '')
              + '"/>';
          }
        },
        data: [
          {xAxis:0, y: 460, name:'Line', symbolSize:20, symbol: 'image://https://www.jwtechwriter.com/demos/echarts/line.png'},
          {xAxis:1, y: 460, name:'Bar', symbolSize:20, symbol: 'image://https://www.jwtechwriter.com/demos/echarts/bar.png'},
          {xAxis:2, y: 460, name:'Scatter', symbolSize:20, symbol: 'image://https://www.jwtechwriter.com/demos/echarts/scatter.png'},
          {xAxis:3, y: 460, name:'K', symbolSize:20, symbol: 'image://https://www.jwtechwriter.com/demos/echarts/k.png'},
          {xAxis:4, y: 460, name:'Pie', symbolSize:20, symbol: 'image://https://www.jwtechwriter.com/demos/echarts/pie.png'},
          {xAxis:5, y: 460, name:'Radar', symbolSize:20, symbol: 'image://https://www.jwtechwriter.com/demos/echarts/radar.png'},
          {xAxis:6, y: 460, name:'Chord', symbolSize:20, symbol: 'image://https://www.jwtechwriter.com/demos/echarts/chord.png'},
          {xAxis:7, y: 460, name:'Force', symbolSize:20, symbol: 'image://https://www.jwtechwriter.com/demos/echarts/force.png'},
          {xAxis:8, y: 460, name:'Map', symbolSize:20, symbol: 'image://https://www.jwtechwriter.com/demos/echarts/map.png'},
          {xAxis:9, y: 460, name:'Gauge', symbolSize:20, symbol: 'image://https://www.jwtechwriter.com/demos/echarts/gauge.png'},
          {xAxis:10, y: 460, name:'Funnel', symbolSize:20, symbol: 'image://https://www.jwtechwriter.com/demos/echarts/funnel.png'},
        ]
      }
    }
  ]
};

const ProfileChart = () => (
  <ReactEcharts
    height={500}
    option={option}
  />
);

export default ProfileChart;
