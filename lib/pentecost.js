var utils = require('./utils');
var lectUtils = require('./lectionaryUtils');

module.exports = function (year) {
    var trinity = utils.offsetDays(lectUtils.pentecost(year), 7);
    var liturgicalYear = lectUtils.liturgicalYearPreAdvent(year);
    var seasonList = [];
    var date = utils.previousWeekday(new Date(year, 4, 27) , 0);
    var sundayName = 2;

    // Season of Pentecost
    for (var i = 3; i <= 29; i++) {
      if (date > trinity) {
        seasonList.push({
          date: date,
          lectionaryYear: liturgicalYear,
          lectionaryShortName: 'Proper ' + i,
          lectionaryLongName: utils.ordinalize(sundayName) + ' Sunday after Pentecost'
        });
        sundayName += 1;
      }
      date = utils.offsetDays(date, 7);
    }

    // All Saints
    seasonList.push({
      date: new Date(year, 10, 1),
      lectionaryYear: liturgicalYear,
      lectionaryShortName: "All Saints",
      lectionaryLongName: "All Saints"
    });
     // Thanksgiving
    seasonList.push({
      date: lectUtils.thanksgivingDayUSA(year),
      lectionaryYear: liturgicalYear,
      lectionaryShortName: "Thanksgiving",
      lectionaryLongName: "Thanksgiving"
    });

    return seasonList;
};
