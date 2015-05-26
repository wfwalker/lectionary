'use strict';
var advent = require('./lib/advent');
var epiphany = require('./lib/epiphany');
var lentEaster = require('./lib/lenteaster');
var pentecost = require('./lib/pentecost');
var scriptures = require('./lib/scriptures');

module.exports = function(year, month) {
    var churchYear = [];
    churchYear = advent(year).concat(epiphany(year), lentEaster(year), pentecost(year));

    // add scriptures
    for (var index in churchYear) {
        var churchDay = churchYear[index];
        churchDay.scriptures = scriptures(churchDay);
    }

    if (typeof month === 'undefined') {
        return churchYear;
    } else {
        var churchMonth = [];

        churchMonth = churchYear.filter(function (day) {
            if (day.date.getMonth() === month) { return day; }
        } );

        return churchMonth;
    }
};
