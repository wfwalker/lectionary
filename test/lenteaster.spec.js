var assert = require('assert');

var season = require('../lib/lenteaster');

describe('Season of Epiphany', function() {
  it('correct', function() {
    var days = season.lentEaster(2014);
    var shortTitles = days.map(function(d) {
      return d.lectionaryShortName;
    })

    // console.log(days);
    // console.log(shortTitles);

    var correctTitles = [
      "Ash Wednesday",
      "Lent 1",
      "Lent 2",
      "Lent 3",
      "Lent 4",
      "Lent 5",
      "Palms",
      "Passion",
      "Holy Thursday",
      "Good Friday",
      "Easter",
      "Easter 2",
      "Easter 3",
      "Easter 4",
      "Easter 5",
      "Easter 6",
      "Easter 7",
      "Ascension",
      "Pentecost",
      "Trinity",
    ];

    assert.equal(days.length, 20);
    assert.deepEqual(shortTitles, correctTitles);
  });
});