var assert = require('assert');

var yearA = require('../lib/year-a.json');
var yearB = require('../lib/year-b.json');
var yearC = require('../lib/year-c.json');

var scriptures = require('../lib/scriptures');

function checkString(inString) {
	return inString && (inString.trim().length > 0) && (inString != 'undefined');
}

function checkSunday(inSunday, inName) {
	// console.log(JSON.stringify(inSunday));

	if (inSunday.complementary || inSunday.semicontinuous) {
		assert.ok(checkString(inSunday.complementary.gospel), inName);
		assert.ok(checkString(inSunday.complementary.psalm), inName);
		assert.ok(checkString(inSunday.complementary.first), inName);
		assert.ok(checkString(inSunday.complementary.second), inName);

		assert.ok(checkString(inSunday.semicontinuous.gospel), inName);
		assert.ok(checkString(inSunday.semicontinuous.psalm), inName);
		assert.ok(checkString(inSunday.semicontinuous.first), inName);
		assert.ok(checkString(inSunday.semicontinuous.second), inName);

		// the psalm is always different between semicontinuous and complementary
		assert.notEqual(inSunday.semicontinuous.psalm, inSunday.complementary.psalm, inName + ' different psalm');
		// the second and gospel readings are the same between semicontinuous and complementary
		assert.equal(inSunday.semicontinuous.second, inSunday.complementary.second, inName + ' matching second');
		assert.equal(inSunday.semicontinuous.gospel, inSunday.complementary.gospel, inName + ' matching gospel');
	} else {
		assert.ok(checkString(inSunday.gospel), inName);
		assert.ok(checkString(inSunday.psalm), inName);
		assert.ok(checkString(inSunday.first), inName);
		assert.ok(checkString(inSunday.second), inName);
	}
}

describe('scriptures', function() {
    describe('try easter 7', function() {
    	it('has a gospel', function() {
    		var simulatedLectionaryDay = { lectionaryYear: "B", lectionaryShortName: "Easter 7" }
    		assert.ok(checkString(scriptures(simulatedLectionaryDay).gospel));
    	});
    });

    describe('try transfiguration', function() {
    	it('has a gospel', function() {
    		var simulatedLectionaryDay = { lectionaryYear: "B", lectionaryShortName: "Transfiguration" }
    		assert.ok(checkString(scriptures(simulatedLectionaryDay).gospel));
    	});
    });

    describe('completeness of year a', function() {
    	it('has all slots', function() {
			for (var index in yearA) {
				var aSunday = yearA[index];
				checkSunday(aSunday, index);
			}
    	})
    });

    describe('completeness of year b', function() {
    	it('has all slots', function() {
			for (var index in yearB) {
				var aSunday = yearB[index];
				checkSunday(aSunday, index);
			}
    	})
    });

    describe('completeness of year c', function() {
    	it('has all slots', function() {
			for (var index in yearC) {
				var aSunday = yearC[index];
				checkSunday(aSunday, index);
			}
    	})
    });

});
