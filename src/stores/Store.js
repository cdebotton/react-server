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
      Store.addChangeListener(this.handleChange);
    },

    componentWillUnmount() {
      Store.removeChangeListener(this.handleChange);
    },

    handleChange() {
      console.log(CHANGE_EVENT);
    }
  },

  emitChange() {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener(callback: Function) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener(callback: Function) {
    this.removeListener(CHANGE_EVENT, callback);
  }
});

module.exports = Store;
