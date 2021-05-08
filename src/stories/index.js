import { storiesOf } from '@kadira/storybook';

import ProfileChart from './ProfileChart';
import HeightChangeChart from './HeightChangeChart';

storiesOf('React Echarts', module)
  .add('Custom chart type', ProfileChart)
  .add('Complex profile chart', HeightChangeChart);
