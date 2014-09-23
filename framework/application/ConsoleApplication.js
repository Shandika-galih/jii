/**
 * Console application class.
 *
 * @author Dmitriy Yurchenko <evildev@evildev.ru>
 * @license MIT
 */

'use strict';

/**
 * @class Jii.application.ConsoleApplication
 * @extends Jii.base.Application
 */
Jii.defineClass('Jii.application.ConsoleApplication', {

	__extends: Jii.base.Application,

	/**
	 * @constructor
	 */
	constructor: function (config) {
		this.__super(config);
	},

	/**
	 * Init console application.
	 */
	init: function () {
		/**
		 * Detect parameter in argument.
		 * @param {string} arg argument name.
		 * @returns {Boolean|boolean} true if argument is parameter.
		 */
		/*var isParam = function (arg) {
			return _.isString(arg) && (arg.substr(0, 2) === '--' || !/^[a-zA-Z][a-zA-Z0-9]+$/.test(arg));
		};

		var argv = require('optimist').argv,
			controllerName = isParam(argv._[0]) ? 'Index' : _.string.capitalize(argv._.shift()),
			actionName = isParam(argv._[0]) ? 'Index' : _.string.capitalize(argv._.shift()),
			params = {},
			controller = null;//Jii.createObject(Jii.app.controllerNamespace + '.' + controllerName + 'Controller');

		_.each(argv._ || [], function (value) {
			var splitted = value.split('=');
			params[splitted[0]] = splitted[1] || '';
		});

		//console.log(controller, action, params);
		//console.log(Jii.app.controllers);

		//	TODO: Run action in controller.
		console.log('Need call action!', controllerName, actionName, params);*/
	},

	/**
	 * @type {object} base application's config.
	 * @private
	 */
	_getBaseConfig: function() {
		return {
			bootstrap: [
			],
			components: {
			}
		};
	}

});