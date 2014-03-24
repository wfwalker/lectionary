var assert = require('assert');

var holidays = require('../');

var datePart = function(date) {
    return date.toISOString().substring(0, 10);
};

describe('holidays in Iceland in 2013', function() {
    it('are correct', function() {
        var days = holidays(2013);
        var dates = days.map(function(d) { return datePart(d); });

        var correctDates = [
            '2013-01-01',
            '2013-03-28',
            '2013-03-29',
            '2013-03-31',
            '2013-04-01',
            '2013-04-25',
            '2013-05-01',
            '2013-05-09',
            '2013-05-19',
            '2013-05-20',
            '2013-06-17',
            '2013-08-05',
            '2013-12-24',
            '2013-12-25',
            '2013-12-26',
            '2013-12-31'
        ];

        assert.deepEqual(dates, correctDates);
    });
});
