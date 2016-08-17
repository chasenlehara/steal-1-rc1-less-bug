import QUnit from 'steal-qunit';
import { ViewModel } from './test';

// ViewModel unit tests
QUnit.module('steal-1-rc-1-less-bug/test');

QUnit.test('Has message', function(){
  var vm = new ViewModel();
  QUnit.equal(vm.attr('message'), 'This is the test component');
});
