# React Echarts Component

Echarts component for React

For details about how to use echarts. Please refer to [Echarts homepage](https://echarts.apache.org/en/index.html)

Types of charts supported/examples: [Echart examples](https://echarts.apache.org/examples/en/index.html)

## Installation

```bash
npm install --save VisualSceneEcharts
```

## Usage

```js
// es6
import ReactEcharts from 'visual-scene-echarts'
// es5
var VisualSceneEcharts = require('visual-scene-echarts')

<VisualSceneEcharts
  height={400}
  option={{...}}
  showLoading={true}
/>
```

Props Taken:

+ __height__ (required, number)

  height of the chart, unit: `px`

+ __option__ (required, object)

  settings for the chart, for details, refer to [Echarts option configuration](https://echarts.apache.org/en/option.html#title)

+ __showLoading__ (optional, bool, default: `false`)

  whether to show a spinning loader

+ __onClick__ (optional, func)

  callback when data clicked

+ __onReady__ (optional, func)

  callback when then chart is initialized, the echart instance is passed in

## License

MIT
