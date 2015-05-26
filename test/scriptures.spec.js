var assert = require('assert');

var scriptures = require('../lib/scriptures');

describe('scriptures', function() {
    describe('try easter 7', function() {
    	it('has a gospel', function() {
    		var simulatedLectionaryDay = { lectionaryYear: "B", lectionaryShortName: "Easter 7" }
    		assert.ok(scriptures(simulatedLectionaryDay).gospel != "");
    	});
    });
});
