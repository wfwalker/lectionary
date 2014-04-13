var assert = require('assert');

var churchYear = require('../');

var datePart = function(date) {
    return date.toISOString().substring(0, 10);
};

describe('church year for 2014', function() {
    it('has the right number of services', function() {
        var days = churchYear(2014);
        // console.log(days);

        assert.equal(days.length, 62);
        // var dates = days.map(function(d) { return datePart(d); });

        // var correctDates = [
        //     '2013-01-01',
        //     '2013-03-28',
        //     '2013-03-29',
        //     '2013-03-31',
        //     '2013-04-01',
        //     '2013-04-25',
        //     '2013-05-01',
        //     '2013-05-09',
        //     '2013-05-19',
        //     '2013-05-20',
        //     '2013-06-17',
        //     '2013-08-05',
        //     '2013-12-24',
        //     '2013-12-25',
        //     '2013-12-26',
        //     '2013-12-31'
        // ];

        // assert.deepEqual(dates, correctDates);
    });
});

describe('slicing one month out of church year', function() {
    it('has the right number of services', function() {
        var jan = churchYear(2014, 0);
        var april = churchYear(2014, 3);
        var june = churchYear(2014, 5);
        // console.log(june);

        assert.equal(jan.length, 5);
        assert.equal(april.length, 7);
        assert.equal(june.length, 5);
    });
});
