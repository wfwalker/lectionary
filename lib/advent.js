var utils = require('./utils');
var lectUtils = require('./lectionaryUtils');

module.exports = function (year) {
    var date = lectUtils.advent(year);
    var liturgicalYear = lectUtils.liturgicalYearAdvent(year);
    var seasonList = [];

    // Advent
    for (var i = 1; i <= 4; i++) {
      seasonList.push({
        date: date,
        lectionaryYear: liturgicalYear,
        lectionaryShortName: 'Advent ' + i,
        lectionaryLongName: utils.ordinalize(i) + ' Sunday of Advent'
      });
      date = utils.offsetDays(date, 7);
    }

    // Christmas Eve and Day
    var christmas = new Date(year, 11, 25);
    seasonList.push({
      date: utils.offsetDays(christmas, -1),
      lectionaryYear: 'A-B-C',
      lectionaryShortName: "Christmas Eve",
      lectionaryLongName: "Christmas Eve"
    });
    seasonList.push({
      date: christmas,
      lectionaryYear: 'A-B-C',
      lectionaryShortName: "Christmas Day",
      lectionaryLongName: "Christmas Day"
    });

    // Sunday after Christmas
    date = utils.nextWeekday(utils.offsetDays(christmas, 1), 0);
    seasonList.push({
      date: date,
      lectionaryYear: liturgicalYear,
      lectionaryShortName: "Christmas 1",
      lectionaryLongName: "First Sunday after Christmas"
    });
    
    return seasonList;
};