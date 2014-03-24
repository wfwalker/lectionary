var assert = require('assert');

var pentecost = require('../lib/pentecost');

describe('Season of Pentecost', function() {
  it('correct', function() {
    var days = pentecost(2014);
    var shortTitles = days.map(function(d) {
      return d.lectionaryShortName;
    })

    // console.log(days);
    // console.log(shortTitles);

    var correctTitles = [
      'Proper 7',
      'Proper 8',
      'Proper 9',
      'Proper 10',
      'Proper 11',
      'Proper 12',
      'Proper 13',
      'Proper 14',
      'Proper 15',
      'Proper 16',
      'Proper 17',
      'Proper 18',
      'Proper 19',
      'Proper 20',
      'Proper 21',
      'Proper 22',
      'Proper 23',
      'Proper 24',
      'Proper 25',
      'Proper 26',
      'Proper 27',
      'Proper 28',
      'Proper 29',
      'All Saints',
      'Thanksgiving'
    ];

    assert.equal(days.length, 25);
    assert.deepEqual(shortTitles, correctTitles);
  });
});