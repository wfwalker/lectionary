// 'use strict';
var utils = require('./utils');
var offsetDays = utils.offsetDays;
var previousWeekday = utils.previousWeekday;

// Algorithm: http://www.smart.net/~mmontes/nature1876.html
// Python implementation: http://code.activestate.com/recipes/576517-calculate-easter-western-given-a-year/
var easterDay = function(year) {
    a = year % 19;
    b = Math.floor(year / 100);
    c = year % 100;
    d = (19 * a + b - Math.floor(b / 4) - Math.floor((b - Math.floor((b + 8) / 25) + 1) / 3) + 15) % 30;
    e = (32 + 2 * (b % 4) + 2 * Math.floor(c / 4) - d - (c % 4)) % 7;
    f = d + e - 7 * Math.floor((a + 11 * d + 22 * e) / 451) + 114;
    month = Math.floor(f / 31) - 1;
    day = f % 31 + 1;
    return new Date(year, month, day);
};

var advent =  function(year) {
    var christmas = new Date(year, 11, 25);
    var day = christmas.getDay();
    if (day === 0) {
      return offsetDays(christmas, -28);
    } else {
      return offsetDays(previousWeekday(christmas, 0), -21);
    }
  };

module.exports = {
    easterDay: easterDay,
    advent: advent,

    pentecost: function(year) {
      return offsetDays(this.easterDay(year), 49);
    },

    epiphany: function (year) {
      return new Date(year, 0, 6);
    },

    thanksgivingDayUSA: function (year) {
      var novFirst = new Date(year, 10, 1);
      var dayOfWeek = novFirst.getDay();
      return offsetDays(novFirst, 21 + (11 - dayOfWeek) % 7);
    },

    liturgicalYear: function (date) {
      var cycle = ['A', 'B', 'C'];
      var year = 1900 + date.getYear();
      if (date < advent(year)) {
        return cycle[((year - 1 - 2001) % 3)];
      } else {
        return cycle[(year - 2001) % 3];
      }
    }
};
