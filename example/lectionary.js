var lectionary = require('../');
var lectionaryDates = lectionary(process.argv[2]);
console.dir(lectionaryDates);
