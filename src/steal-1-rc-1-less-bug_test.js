import QUnit from 'steal-qunit';
import plugin from './steal-1-rc-1-less-bug';

QUnit.module('steal-1-rc-1-less-bug');

QUnit.test('Initialized the plugin', function(){
  QUnit.equal(typeof plugin, 'function');
  QUnit.equal(plugin(), 'This is the steal-1-rc-1-less-bug plugin');
});
