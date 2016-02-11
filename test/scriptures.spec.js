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
		assert.ok(checkString(inSunday.complementary.gospel[0]), inName);
		assert.ok(checkString(inSunday.complementary.psalm[0]), inName);
		assert.ok(checkString(inSunday.complementary.first[0]), inName);
		assert.ok(checkString(inSunday.complementary.second[0]), inName);

		assert.ok(checkString(inSunday.semicontinuous.gospel[0]), inName);
		assert.ok(checkString(inSunday.semicontinuous.psalm[0]), inName);
		assert.ok(checkString(inSunday.semicontinuous.first[0]), inName);
		assert.ok(checkString(inSunday.semicontinuous.second[0]), inName);

		// the psalm is always different between semicontinuous and complementary
		assert.notEqual(inSunday.semicontinuous.psalm[0], inSunday.complementary.psalm[0], inName + ' different psalm');
		// the second and gospel readings are the same between semicontinuous and complementary
		assert.equal(inSunday.semicontinuous.second[0], inSunday.complementary.second[0], inName + ' matching second');
		assert.equal(inSunday.semicontinuous.gospel[0], inSunday.complementary.gospel[0], inName + ' matching gospel');
	} else {
		assert.ok(checkString(inSunday.gospel[0]), inName);
		assert.ok(checkString(inSunday.psalm[0]), inName);
		assert.ok(checkString(inSunday.first[0]), inName);
		assert.ok(checkString(inSunday.second[0]), inName);
	}
}

describe('scriptures', function() {
	describe('try easter 7', function() {
		it('has a gospel', function() {
			var simulatedLectionaryDay = { lectionaryYear: "B", lectionaryShortName: "Easter 7" }
			assert.ok(checkString(scriptures(simulatedLectionaryDay).gospel[0]));
		});
	});

	describe('try year A advent 3', function() {
		it('has two psalms', function() {
			var simulatedLectionaryDay = { lectionaryYear: "A", lectionaryShortName: "Advent 3" }
			assert.equal(2, scriptures(simulatedLectionaryDay).psalm.length);
		});
	});

	describe('try transfiguration', function() {
		it('has a gospel', function() {
			var simulatedLectionaryDay = { lectionaryYear: "B", lectionaryShortName: "Transfiguration" }
			assert.ok(checkString(scriptures(simulatedLectionaryDay).gospel[0]));
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
