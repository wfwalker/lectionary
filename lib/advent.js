var utils = require('./utils');
var lectUtils = require('./lectionaryUtils');

module.exports = {
  adventChristmas: function (year) {
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
  }

  // def check_advent_christmas
  //   return_value = []
  //   return [] if @date < advent(@year)
  //   1.upto(4) do |x|
  //     return_value << full_title("Advent #{x}") if @date == advent(@year) + ((x - 1) * 7).days
  //   end
  //   return_value << full_title('Christmas 1') if @date == advent(@year) + 28.days
  //   return_value << 'Christmas Eve' if @date == Date.new(@year, 12, 24)
  //   return_value << 'Christmas Day' if @date == Date.new(@year, 12, 25)
  //   return_value
  // end
};