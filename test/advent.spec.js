var assert = require('assert');

var advent = require('../lib/advent');

describe('Advent and Christmas Season', function() {
  it('correct', function() {
    var days = advent(2014);
    var shortTitles = days.map(function(d) {
      return d.lectionaryShortName;
    })

    var correctTitles = [
      "Advent 1",
      "Advent 2", 
      "Advent 3", 
      "Advent 4", 
      "Christmas Eve", 
      "Christmas Day", 
      "Christmas 1"
    ];

    assert.equal(days.length, 7);
    assert.deepEqual(shortTitles, correctTitles);

  });
});