var yearA = require('./year-a');
var yearB = require('./year-b');
var yearC = require('./year-c');

module.exports = function (inLectionaryDay) {
	if (inLectionaryDay.lectionaryYear == 'A' || inLectionaryDay.lectionaryYear == 'A-B-C') {			
		var scriptures = yearA[inLectionaryDay.lectionaryShortName];
	} else if (inLectionaryDay.lectionaryYear == 'B') {			
		var scriptures = yearB[inLectionaryDay.lectionaryShortName];
	} else if (inLectionaryDay.lectionaryYear == 'C') {			
		var scriptures = yearC[inLectionaryDay.lectionaryShortName];
	} else {
		throw 'unknown lectionary year ' + JSON.stringify(inLectionaryDay);
	}

	if (! scriptures) {
		throw 'missing scriptures ' + JSON.stringify(inLectionaryDay);
	}

	return scriptures;
}