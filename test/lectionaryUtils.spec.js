var assert = require('assert');

var lectUtils = require('../lib/lectionaryUtils');

var datePart = function(date) {
    return date.toISOString().substring(0, 10);
};

var assertDate = function(actual, expected) {
    assert.equal(datePart(actual), expected);
};

describe('lectionary utils', function() {
    describe('easter day', function() {
        it('is correct for 2012, 2013 and 2014', function() {
            assertDate(lectUtils.easterDay(2012), '2012-04-08');
            assertDate(lectUtils.easterDay(2013), '2013-03-31');
            assertDate(lectUtils.easterDay(2014), '2014-04-20');
        });
    });

    describe('advent begins', function() {
        it('is correct for 2012, 2013, 2014', function() {
            assertDate(lectUtils.advent(2012), '2012-12-02');
            assertDate(lectUtils.advent(2013), '2013-12-01');
            assertDate(lectUtils.advent(2014), '2014-11-30');
        });
    });

    describe('day of Pentecost', function() {
        it('is correct for 2012, 2013, 2014', function() {
            assertDate(lectUtils.pentecost(2012), '2012-05-27');
            assertDate(lectUtils.pentecost(2013), '2013-05-19');
            assertDate(lectUtils.pentecost(2014), '2014-06-08');
        });
    });

    describe('Epiphany', function() {
        it('is correct 2014', function() {
            assertDate(lectUtils.epiphany(2014), '2014-01-06');
        });
    });

    describe('Thanksgiving day in USA', function() {
        it('is correct for 2012, 2013, 2014', function() {
            assertDate(lectUtils.thanksgivingDayUSA(2012), '2012-11-22');
            assertDate(lectUtils.thanksgivingDayUSA(2013), '2013-11-28');
            assertDate(lectUtils.thanksgivingDayUSA(2014), '2014-11-27');
        });
    });

    describe('liturgical year', function() {
        it('is correct for season before Advent', function() {
            var yearA = lectUtils.liturgicalYear(new Date (2014,5,6));
            var yearB = lectUtils.liturgicalYear(new Date (2015,5,6));
            var yearC = lectUtils.liturgicalYear(new Date (2016,5,6));

            assert.equal(yearA, 'A');
            assert.equal(yearB, 'B');
            assert.equal(yearC, 'C');
        });
        it('is correct for season after Advent', function() {
            var yearA = lectUtils.liturgicalYear(new Date (2013,11,6));
            var yearB = lectUtils.liturgicalYear(new Date (2014,11,6));
            var yearC = lectUtils.liturgicalYear(new Date (2015,11,6));

            assert.equal(yearA, 'A');
            assert.equal(yearB, 'B');
            assert.equal(yearC, 'C');
        });
    });

});
