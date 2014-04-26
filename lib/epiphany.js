var utils = require('./utils');
var lectUtils = require('./lectionaryUtils');

module.exports = function (year) {
    var date = utils.previousWeekday(lectUtils.epiphany(year), 0);
    var liturgicalYear = lectUtils.liturgicalYearPreAdvent(year);
    var seasonList = [];

    // Epiphany Day
    seasonList.push({
      date: date,
      lectionaryYear: 'A-B-C',
      lectionaryShortName: 'Epiphany Day',
      lectionaryLongName: "Sunday of Epiphany"
    });

    seasonList.push({
      date: lectUtils.epiphany(year),
      lectionaryYear: 'A-B-C',
      lectionaryShortName: "Epiphany Day",
      lectionaryLongName: "Epiphany Day"
    });

    // First Sunday after Epiphany
    date = utils.offsetDays(date, 7);
    seasonList.push({
      date: date,
      lectionaryYear: liturgicalYear,
      lectionaryShortName: 'Baptism',
      lectionaryLongName: "Baptism of our Lord"
    });
    date = utils.offsetDays(date, 7);

    // Season of Epiphany
    for (var i = 2; i <= 8; i++) {
      if (date >= lectUtils.transfiguration(year)) { break; }
      seasonList.push({
        date: date,
        lectionaryYear: liturgicalYear,
        lectionaryShortName: 'Epiphany ' + i,
        lectionaryLongName: utils.ordinalize(i) + ' Sunday of Epiphany'
      });
      date = utils.offsetDays(date, 7);
    }


    // Transfiguration
    date = lectUtils.transfiguration(year);
    seasonList.push({
      date: date,
      lectionaryYear: liturgicalYear,
      lectionaryShortName: "Transfiguration",
      lectionaryLongName: "Transfiguration Sunday"
    });
    
    return seasonList;
};