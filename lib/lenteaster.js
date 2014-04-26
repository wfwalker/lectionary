var utils = require('./utils');
var lectUtils = require('./lectionaryUtils');

module.exports = function (year) {
    var date = lectUtils.transfiguration(year);
    var liturgicalYear = lectUtils.liturgicalYearPreAdvent(year);
    var seasonList = [];

    // Ash Wednesday
    seasonList.push({
      date: utils.nextWeekday(date, 3),
      lectionaryYear: 'A-B-C',
      lectionaryShortName: 'Ash Wednesday',
      lectionaryLongName: "Ash Wednesday"
    });

    date = utils.offsetDays(date, 7);

    // Season of Lent
    for (var i = 1; i <= 5; i++) {
      seasonList.push({
        date: date,
        lectionaryYear: liturgicalYear,
        lectionaryShortName: 'Lent ' + i,
        lectionaryLongName: utils.ordinalize(i) + ' Sunday of Lent'
      });
      date = utils.offsetDays(date, 7);
    }

    // Palms
    seasonList.push({
      date: date,
      lectionaryYear: liturgicalYear,
      lectionaryShortName: "Palms",
      lectionaryLongName: "Liturgy of the Palms"
    });
     // Passion
    seasonList.push({
      date: date,
      lectionaryYear: liturgicalYear,
      lectionaryShortName: "Passion",
      lectionaryLongName: "Passion Sunday"
    });

    // Holy Thursday
    seasonList.push({
      date: utils.nextWeekday(date, 4),
      lectionaryYear: 'A-B-C',
      lectionaryShortName: "Holy Thursday",
      lectionaryLongName: "Holy Thursday"
    });
     // Good Friday
    seasonList.push({
      date: utils.nextWeekday(date, 5),
      lectionaryYear: 'A-B-C',
      lectionaryShortName: "Good Friday",
      lectionaryLongName: "Good Friday"
    });

     // Easter
    date = lectUtils.easterDay(year);
    seasonList.push({
      date: date,
      lectionaryYear: liturgicalYear,
      lectionaryShortName: "Easter Day",
      lectionaryLongName: "Easter Sunday"
    });
    
    date = utils.offsetDays(date, 7);

    // Season of Easter
    for (i = 2; i <= 7; i++) {
      seasonList.push({
        date: date,
        lectionaryYear: liturgicalYear,
        lectionaryShortName: 'Easter ' + i,
        lectionaryLongName: utils.ordinalize(i) + ' Sunday of Easter'
      });
      date = utils.offsetDays(date, 7);
    }

    // Ascension
    date = utils.offsetDays(lectUtils.easterDay(year), 39);
    seasonList.push({
      date: date,
      lectionaryYear: 'A-B-C',
      lectionaryShortName: "Ascension",
      lectionaryLongName: "Ascension Day"
    });

     // Pentecost
    date = lectUtils.pentecost(year);
    seasonList.push({
      date: date,
      lectionaryYear: liturgicalYear,
      lectionaryShortName: "Pentecost Day",
      lectionaryLongName: "Pentecost Sunday"
    });
    
     // Trinity
    date = utils.offsetDays(date, 7);
    seasonList.push({
      date: date,
      lectionaryYear: liturgicalYear,
      lectionaryShortName: "Trinity",
      lectionaryLongName: "Trinity Sunday"
    });

    return seasonList;
};
