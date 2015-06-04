'use strict';
var advent = require('./lib/advent');
var epiphany = require('./lib/epiphany');
var lentEaster = require('./lib/lenteaster');
var pentecost = require('./lib/pentecost');
var scriptures = require('./lib/scriptures');

module.exports.days = function(year, month) {
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

module.exports.dayMap = function(year, month) {
    var churchYear = module.exports.days(year, month);
    var yearMap = {};

    for (var index in churchYear) {
        var churchDay = churchYear[index];
        yearMap[churchDay.lectionaryShortName] = churchDay;
    }

    return yearMap;
};

module.exports.seasons = function(year) {
    var dayMap = module.exports.dayMap(year);
    var endYear = new Date(year, 11, 31, 23, 59, 59);
    var beginYear = new Date(year, 0, 1, 0, 0, 0);

    return [
        { start: dayMap['Epiphany Day'].date, end: dayMap['Ash Wednesday'].date, name: 'Ordinary Time' },
        { start: dayMap['Ash Wednesday'].date, end: dayMap['Passion'].date, name: 'Lent' },
        { start: dayMap['Passion'].date, end: dayMap['Easter Day'].date, name: 'Holy Week' },
        { start: dayMap['Easter Day'].date, end: dayMap['Pentecost Day'].date, name: 'Easter' },
        { start: dayMap['Pentecost Day'].date, end: dayMap['Advent 1'].date, name: 'Ordinary Time' },
        { start: dayMap['Advent 1'].date, end: dayMap['Christmas Eve'].date, name: 'Advent' },
        { start: dayMap['Christmas Day'].date, end: endYear, name: 'Christmas' },
        { start: beginYear, end: dayMap['Epiphany Day'].date, name: 'Christmas' }
    ];
}
