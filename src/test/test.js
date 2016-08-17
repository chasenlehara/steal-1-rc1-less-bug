import Component from 'can/component/';
import Map from 'can/map/';
import 'can/map/define/';
import './test.less!';
import template from './test.stache!';

export const ViewModel = Map.extend({
  define: {
    message: {
      value: 'This is the test component'
    }
  }
});

export default Component.extend({
  tag: 'test',
  viewModel: ViewModel,
  template
});