import { storiesOf } from '@kadira/storybook';

import SimpleBarChart from './SimpleBarChart';
import HeightChangeChart from './HeightChangeChart';

storiesOf('React Echarts', module)
  .add('simple bar chart', SimpleBarChart)
  .add('height change chart', HeightChangeChart);
