'use strict';

module.exports = function Counter() {
    var count = 0;

    this.increment = function() {
        count++;
    };

    this.getValue = function() {
        return count;
    };
};