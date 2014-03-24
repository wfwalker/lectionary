var cloneDate = function(date) {
    return new Date(date.getTime());
};

var offsetDays = function(date, offset) {
        return new Date(cloneDate(date).setDate(date.getDate()+offset));
};

module.exports = {
    cloneDate: cloneDate,
    offsetDays: offsetDays,

    nextWeekday: function(date, weekday) {
        var day = date.getDay();
        return offsetDays(date, (7 - day + weekday) % 7);
    },

    previousWeekday: function(date, weekday) {
        var day = date.getDay();
        return offsetDays(date, (weekday - day - 7) % 7);
    },

    ordinalize: function(number) {
        if (11 <= parseInt(number) % 100 && parseInt(number) % 100 <= 13) {
            return number + "th";
        } else {
            switch (parseInt(number) % 10) {
            case  1: return number + "st";
            case  2: return number + "nd";
            case  3: return number + "rd";
            default: return number + "th";
            }
        }
    }
};
