var assert = require('assert');

var utils = require('../lib/utils');

var datePart = function(date) {
    return date.toISOString().substring(0, 10);
};

var assertDate = function(actual, expected) {
    assert.equal(datePart(actual), expected);
};

describe('utils', function() {
    describe('clone date', function() {
        it('creates a copy', function() {
            var d = new Date();
            var c = utils.cloneDate(d);

            assert.equal(d.toString(), c.toString());
            c.setYear(1900);
            assert.notEqual(d.toString(), c.toString());
        });
    });

    describe('offset days', function() {
        it('calculates next day', function() {
            var d = new Date(2013, 0, 1);
            var n = utils.offsetDays(d, 1);

            assert.ok(n.getFullYear() == 2013);
            assert.ok(n.getMonth() === 0);
            assert.ok(n.getDate() == 2);
        });

        it('calculates previous day', function() {
            var d = new Date(2013, 1, 1);
            var n = utils.offsetDays(d, -1);

            assert.ok(n.getFullYear() == 2013);
            assert.ok(n.getMonth() === 0);
            assert.ok(n.getDate() == 31);
        });

        it('calculates across years', function() {
            var d = new Date(2013, 11, 31);
            var n = utils.offsetDays(d, 1);

            assert.ok(n.getFullYear() == 2014);
            assert.ok(n.getMonth() === 0);
            assert.ok(n.getDate() == 1);
        });
    });

    describe('next weekday', function() {
        it('finds the next weekdays after 2013-01-01', function() {
            var day = new Date(2013, 0, 1);

            var tuesday = utils.nextWeekday(day, 2);
            var monday = utils.nextWeekday(day, 1);
            var sunday = utils.nextWeekday(day, 0);

            assertDate(tuesday, '2013-01-01');
            assertDate(monday,  '2013-01-07');
            assertDate(sunday,  '2013-01-06');
        });
    });

    describe('previous weekday', function() {
        it('finds the previous weekdays before 2013-01-01', function() {
            var day = new Date(2013, 0, 1);

            var tuesday = utils.previousWeekday(day, 2);
            var thursday = utils.previousWeekday(day, 4);
            var sunday = utils.previousWeekday(day, 0);

            assertDate(tuesday, '2013-01-01');
            assertDate(thursday,'2012-12-27');
            assertDate(sunday,  '2012-12-30');
        });
    });

    describe('ordinalize numbers', function() {
        it('returns a string that ordinalizes an integer', function() {
            var first = utils.ordinalize(1);
            var second = utils.ordinalize(2);
            var third = utils.ordinalize(3);
            var tenth = utils.ordinalize(10);

            assert.equal(first, "1st");
            assert.equal(second, "2nd");
            assert.equal(third, "3rd");
            assert.equal(tenth, "10th");
        });
    });
});
