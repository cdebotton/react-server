/**
 * @providesModule Store
 * @flow
 */

var {EventEmitter}  = require('events');
var {extend}        = require('lodash');

var CHANGE_EVENT = 'change';

var Store = extend(EventEmitter.prototype, {
  StoreMixin: {
    componentDidMount() {
      Store.addChangeListener(callback);
    },

    componentWillUnmount() {
      Store.removeChangeListener(callback);
    }
  },

  emitChange() {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener(callback: Function) {
    this.on(CHANGE_EVENT, callback);
  },

  removeListener(callback: Function) {
    this.off(CHANGE_EVENT, callback);
  }
});

module.exports = Store;
