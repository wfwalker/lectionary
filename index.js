var utils = require('./lib/utils');
var lectUtils = require('./lib/lectionaryUtils');

var easterDay = lectUtils.easterDay;
var offsetDays = utils.offsetDays;
var nextWeekday = utils.nextWeekday;

module.exports = function(year) {
    // var epiphany = epiphanyDay(year);
    var easter = easterDay(year);
    var easterOffset = function(days) { return offsetDays(easter, days); };
    // var transfiguration = easterOffset(-39);
    // var trinity = easterOffset(57);
    // var advent = adventDay(year);

// # extends the LectionaryParser Module adding month-based calculations
// module LectionaryParser
//   def liturgical_month(any_date, full_description = false)
//     result = []
//     any_date.beginning_of_month.upto(any_date.end_of_month) do |this_date|
//       work_day =
//         LectionaryDay.new(this_date.year, this_date.month, this_date.day)
//       unless work_day.liturgical.empty?
//         work_day.liturgical.each do |title|
//           if full_description
//             result << this_date.to_s
//           else
//             result << [this_date.to_s, title]
//           end
//         end
//       end
//     end
//     result
//   end
// end

    return [
        new Date(year, 0, 1),       // 1. janúar
        easterOffset(-3),           // Skírdagur
        easterOffset(-2),           // Föstudagurinn langi
        easter,                     // Páskadagur
        easterOffset(1),            // Annar i páskum
        nextWeekday(new Date(year, 3, 19), 4), // Sumardagurinn fyrsti
        new Date(year, 4 , 1),      // 1. maí
        easterOffset(39),           // Uppstigningardagur
        easterOffset(49),           // Hvítasunnudagur
        easterOffset(50),           // Annar í hvítasunnu
        new Date(year, 5, 17),      // 17. júni
        nextWeekday(new Date(year, 7, 1), 1), // Frídagur verslunarmanna
        new Date(year, 11, 24, 13), // Aðfangadagur
        new Date(year, 11, 25),     // Jóladagur
        new Date(year, 11, 26),     // Annar í jólum
        new Date(year, 11, 31, 13)  // Gamlársdagur
    ];
};
