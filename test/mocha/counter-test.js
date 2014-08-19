'use strict';

var expect = require('chai').expect;
var assert = require('chai').assert;
var Counter = require('../../lib/Counter.js');

describe('counter', function() {
    var counter;

    beforeEach(function() {
        counter = new Counter();
    });

    describe('constructor', function() {
        it('should have a private "count" variable', function() {
            expect(counter.count).to.be.undefined;
        });

        it('should have an "increment" function', function() {
            expect(counter.increment).to.be.a('function');
        });

        it('should have a "getValue" function', function() {
            expect(counter.getValue).to.be.a('function');
        });

        it('should initialize the count value to 0', function() {
            expect(counter.getValue()).to.equal(0);
        });
    });

    describe('.getValue()', function() {
        it('should return a number', function() {
            expect(counter.getValue()).to.be.a('number');
        })
    });

    describe('.increment()', function() {
        it('should increment the counter by one', function() {
            expect(counter.getValue()).to.equal(0);
            counter.increment();
            expect(counter.getValue()).to.equal(1);
        });
    });

    // it('Count should be zero at instantiation', function() {
    //     expect(counter.getValue()).to.eql(0);
    // });
}); 