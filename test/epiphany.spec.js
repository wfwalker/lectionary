var assert = require('assert');

var epiphany = require('../lib/epiphany');

describe('Season of Epiphany', function() {
  it('correct', function() {
    var days = epiphany(2014);
    var shortTitles = days.map(function(d) {
      return d.lectionaryShortName;
    })

    // console.log(days);
    // console.log(shortTitles);

    var correctTitles = [
      "Epiphany Day",
      "Epiphany Day", 
      "Baptism",
      "Epiphany 2",
      "Epiphany 3",
      "Epiphany 4",
      "Epiphany 5",
      "Epiphany 6",
      "Epiphany 7",
      "Transfiguration" 
    ];

    assert.equal(days.length, 10);
    assert.deepEqual(shortTitles, correctTitles);
  });
});
