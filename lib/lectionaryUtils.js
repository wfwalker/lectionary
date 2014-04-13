'use strict';
var utils = require('./utils');
var offsetDays = utils.offsetDays;
var previousWeekday = utils.previousWeekday;

// Algorithm: http://www.smart.net/~mmontes/nature1876.html
// Python implementation: http://code.activestate.com/recipes/576517-calculate-easter-western-given-a-year/
var easterDay = function(year) {
    var a = year % 19;
    var b = Math.floor(year / 100);
    var c = year % 100;
    var d = (19 * a + b - Math.floor(b / 4) - Math.floor((b - Math.floor((b + 8) / 25) + 1) / 3) + 15) % 30;
    var e = (32 + 2 * (b % 4) + 2 * Math.floor(c / 4) - d - (c % 4)) % 7;
    var f = d + e - 7 * Math.floor((a + 11 * d + 22 * e) / 451) + 114;
    var month = Math.floor(f / 31) - 1;
    var day = f % 31 + 1;
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
    advent: advent,
    
    epiphany: function (year) {
      return new Date(year, 0, 6);
    },

    transfiguration: function (year) {
      return utils.offsetDays(easterDay(year), -49);
    },

    easterDay: easterDay,

    pentecost: function(year) {
      return offsetDays(this.easterDay(year), 49);
    },


    thanksgivingDayUSA: function (year) {
      var novFirst = new Date(year, 10, 1);
      var dayOfWeek = novFirst.getDay();
      return offsetDays(novFirst, 21 + (11 - dayOfWeek) % 7);
    },

    liturgicalYearPreAdvent: function (year) {
      var cycle = ['A', 'B', 'C'];
      return cycle[((year - 1 - 2001) % 3)];
    },
    liturgicalYearAdvent: function (year) {
      var cycle = ['A', 'B', 'C'];
      return cycle[(year - 2001) % 3];
    }
};
