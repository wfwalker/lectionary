  // def check_lent_easter_pentecost
  //   return_value = []
  //   return [] if @date < (easter(@year) - 48.days)
  //   return [] if @date > (easter(@year) + 56.days)
  //   return_value << 'Ash Wednesday' if @date == easter(@year) - 46.days
  //   1.upto(5) do |x|
  //     return_value << full_title("Lent #{x}") if @date == easter(@year) - 49.days + (x * 7).days
  //   end
  //   return_value << 'Holy Thursday' if @date == easter(@year) - 3.days
  //   return_value << 'Good Friday' if @date == easter(@year) - 2.days
  //   return_value << 'Ascension' if @date == easter(@year) + 39.days
  //   return_value << full_title('Passion') if @date == easter(@year) - 7.days
  //   return_value << full_title('Palms') if @date == easter(@year) - 7.days
  //   return_value << full_title('Easter Day') if @date == easter(@year)
  //   2.upto(7) do |x|
  //     return_value << full_title("Easter #{x}") if @date == easter(@year) + ((x - 1) * 7).days
  //   end
  //   return_value << full_title('Pentecost Day') if @date == easter(@year) + 49.days
  //   return_value << full_title('Trinity') if @date == easter(@year) + 56.days
  //   return_value
  // end
var utils = require('./utils');
var lectUtils = require('./lectionaryUtils');

module.exports = {
  lentEaster: function (year) {
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
      lectionaryYear: liturgicalYear,
      lectionaryShortName: "Holy Thursday",
      lectionaryLongName: "Holy Thursday"
    });
     // Good Friday
    seasonList.push({
      date: utils.nextWeekday(date, 5),
      lectionaryYear: liturgicalYear,
      lectionaryShortName: "Good Friday",
      lectionaryLongName: "Good Friday"
    });

     // Easter
    date = lectUtils.easterDay(year);
    seasonList.push({
      date: date,
      lectionaryYear: liturgicalYear,
      lectionaryShortName: "Easter",
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
      lectionaryYear: liturgicalYear,
      lectionaryShortName: "Ascension",
      lectionaryLongName: "Ascension Day"
    });

     // Pentecost
    date = lectUtils.pentecost(year);
    seasonList.push({
      date: date,
      lectionaryYear: liturgicalYear,
      lectionaryShortName: "Pentecost",
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
  }
};
