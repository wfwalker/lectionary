var assert = require('assert');

var lectUtils = require('../lib/lectionaryUtils');

var datePart = function(date) {
    return date.toISOString().substring(0, 10);
};

var assertDate = function(actual, expected) {
    assert.equal(datePart(actual), expected);
};

describe('lectionary utils', function() {
    describe('advent begins', function() {
        it('is correct for 2012, 2013, 2014', function() {
            assertDate(lectUtils.advent(2012), '2012-12-02');
            assertDate(lectUtils.advent(2013), '2013-12-01');
            assertDate(lectUtils.advent(2014), '2014-11-30');
        });
    });

    describe('Epiphany', function() {
        it('is correct 2014', function() {
            assertDate(lectUtils.epiphany(2014), '2014-01-06');
        });
    });


    describe('transfiguration Sunday', function() {
        it('is correct for 2012, 2013 and 2014', function() {
            assertDate(lectUtils.transfiguration(2012), '2012-02-19');
            assertDate(lectUtils.transfiguration(2013), '2013-02-10');
            assertDate(lectUtils.transfiguration(2014), '2014-03-02');
        });
    });

    describe('easter day', function() {
        it('is correct for 2012, 2013 and 2014', function() {
            assertDate(lectUtils.easterDay(2012), '2012-04-08');
            assertDate(lectUtils.easterDay(2013), '2013-03-31');
            assertDate(lectUtils.easterDay(2014), '2014-04-20');
        });
    });

    describe('day of Pentecost', function() {
        it('is correct for 2012, 2013, 2014', function() {
            assertDate(lectUtils.pentecost(2012), '2012-05-27');
            assertDate(lectUtils.pentecost(2013), '2013-05-19');
            assertDate(lectUtils.pentecost(2014), '2014-06-08');
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
            var yearA = lectUtils.liturgicalYearPreAdvent(2014);
            var yearB = lectUtils.liturgicalYearPreAdvent(2015);
            var yearC = lectUtils.liturgicalYearPreAdvent(2016);

            assert.equal(yearA, 'A');
            assert.equal(yearB, 'B');
            assert.equal(yearC, 'C');
        });
        it('is correct for season after Advent', function() {
            var yearA = lectUtils.liturgicalYearAdvent(2013);
            var yearB = lectUtils.liturgicalYearAdvent(2014);
            var yearC = lectUtils.liturgicalYearAdvent(2015);

            assert.equal(yearA, 'A');
            assert.equal(yearB, 'B');
            assert.equal(yearC, 'C');
        });
    });

});
