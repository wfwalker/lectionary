# lectionary

[![Build Status](https://travis-ci.org/revdave33/lectionary.png)](https://travis-ci.org/revdave33/lectionary)
[![Dependencies Status](https://david-dm.org/revdave33/lectionary.png)](https://david-dm.org/revdave33/lectionary)

The Revised Common Lectionary provides a three year cycle of Scripture
readings for Christian churches that use it. This module does not provide the
actual scripture readings, but it calculates the names and year of the Sundays
and other days celebrated in the lectionary.

This provides the calculation of the basic Lectionary services accepted by
almost all of the churches that use the RCL. There are some non-Sunday days
that are extensions of the basic dates that are not currently calculated.

Currently not doing anything useful.

# Example

``` js
var lectionary = require('lectionary');
var lectionaryDates = lectionary(2014, 4);
console.dir(lectionaryDates);
```

***

```
[ 
  {
    "date": "Sun Apr 06 2014 00:00:00 GMT+0000 (GMT)",
    "lectionaryYear": "A",
    "lectionaryShortName": "Lent 5",
    "lectionaryLongName": "Fifth Sunday of Lent"
  },
  {
    "date": "Sun Apr 13 2014 00:00:00 GMT+0000 (GMT)",
    "lectionaryYear": "A",
    "lectionaryShortName": "Lent 6",
    "lectionaryLongName": "Sixth Sunday of Lent"
  } 
 
]
```

# Methods

``` js
var lectionary = require('lectionary')
```

## lectionary(year, month)

Return an array with the lectionary days for a given month. If the month is
not provided will provide an array for the entire year.

Each item in the array is a json object providing the date, lectionaryYear,
lectionaryShortName, and lectionaryLongName.

# Install

With [npm](https://npmjs.org) do:

```
npm install lectionary
```

# License

MIT

# Thanks

* ["Guðmundur Bjarni Ólafsson](https://github.com/gudmundur) for the basic module that calculated Icelandic holidays.
* [Árni Hermann](https://github.com/arnihermann) for telling Guðmundur that there is a function for calculating holidays.
* [Steinar Hugi](https://github.com/steinar) for giving Guðmundur a python implementation.
