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
      'Pentecost 2',
      'Pentecost 3',
      'Pentecost 4',
      'Pentecost 5',
      'Pentecost 6',
      'Pentecost 7',
      'Pentecost 8',
      'Pentecost 9',
      'Pentecost 10',
      'Pentecost 11',
      'Pentecost 12',
      'Pentecost 13',
      'Pentecost 14',
      'Pentecost 15',
      'Pentecost 16',
      'Pentecost 17',
      'Pentecost 18',
      'Pentecost 19',
      'Pentecost 20',
      'Pentecost 21',
      'Pentecost 22',
      'Pentecost 23',
      'Pentecost 24',
      'All Saints',
      'Thanksgiving'
    ];

    assert.equal(days.length, 25);
    assert.deepEqual(shortTitles, correctTitles);
  });
});