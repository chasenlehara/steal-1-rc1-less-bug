# steal-1-rc-1-less-bug

[![Build Status](https://travis-ci.org//steal-1-rc-1-less-bug.png?branch=master)](https://travis-ci.org//steal-1-rc-1-less-bug)



## Usage

### ES6 use

With StealJS, you can import this module directly in a template that is autorendered:

```js
import plugin from 'steal-1-rc-1-less-bug';
```

### CommonJS use

Use `require` to load `steal-1-rc-1-less-bug` and everything else
needed to create a template that uses `steal-1-rc-1-less-bug`:

```js
var plugin = require("steal-1-rc-1-less-bug");
```

## AMD use

Configure the `can` and `jquery` paths and the `steal-1-rc-1-less-bug` package:

```html
<script src="require.js"></script>
<script>
	require.config({
	    paths: {
	        "jquery": "node_modules/jquery/dist/jquery",
	        "can": "node_modules/canjs/dist/amd/can"
	    },
	    packages: [{
		    	name: 'steal-1-rc-1-less-bug',
		    	location: 'node_modules/steal-1-rc-1-less-bug/dist/amd',
		    	main: 'lib/steal-1-rc-1-less-bug'
	    }]
	});
	require(["main-amd"], function(){});
</script>
```

### Standalone use

Load the `global` version of the plugin:

```html
<script src='./node_modules/steal-1-rc-1-less-bug/dist/global/steal-1-rc-1-less-bug.js'></script>
```

## Contributing

### Making a Build

To make a build of the distributables into `dist/` in the cloned repository run

```
npm install
node build
```

### Running the tests

Tests can run in the browser by opening a webserver and visiting the `test.html` page.
Automated tests that run the tests from the command line in Firefox can be run with

```
npm test
```
