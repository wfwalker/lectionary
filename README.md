# lectionary

[![Build Status](https://travis-ci.org/revdave33/lectionary.png)](https://travis-ci.org/revdave33/lectionary)

Calculates Sunday names according to the Revised Common Lectionary.

Currently not doing anything useful.

# Example

``` js
var holidays = require('holidays');
var dates = holidays(2013);
console.dir(dates);
```

***

```
[ Tue Jan 01 2013 00:00:00 GMT+0000 (GMT),
  Thu Mar 28 2013 00:00:00 GMT+0000 (GMT),
  Fri Mar 29 2013 00:00:00 GMT+0000 (GMT),
  Sun Mar 31 2013 00:00:00 GMT+0000 (GMT),
  Mon Apr 01 2013 00:00:00 GMT+0000 (GMT),
  Thu Apr 25 2013 00:00:00 GMT+0000 (GMT),
  Wed May 01 2013 00:00:00 GMT+0000 (GMT),
  Thu May 09 2013 00:00:00 GMT+0000 (GMT),
  Sun May 19 2013 00:00:00 GMT+0000 (GMT),
  Mon May 20 2013 00:00:00 GMT+0000 (GMT),
  Mon Jun 17 2013 00:00:00 GMT+0000 (GMT),
  Mon Aug 05 2013 00:00:00 GMT+0000 (GMT),
  Tue Dec 24 2013 13:00:00 GMT+0000 (GMT),
  Wed Dec 25 2013 00:00:00 GMT+0000 (GMT),
  Thu Dec 26 2013 00:00:00 GMT+0000 (GMT),
  Tue Dec 31 2013 13:00:00 GMT+0000 (GMT) ]
```

# Methods

``` js
var holidays = require('holidays')
```

## holidays(year)

Return an array with the holidays for a given year. Note that the hour part specifies after which hour in the day is it becomes a holiday.

# Install

With [npm](https://npmjs.org) do:

```
npm install holidays
```

# License

MIT

# Thanks

* [Árni Hermann](https://github.com/arnihermann) for telling me that there is a function for calculating holidays.
* [Steinar Hugi](https://github.com/steinar) for giving me a python implementation.
    "description": "Calculates holidays in a given year, currently only supports Icelandic holidays.",
    "author": "Guðmundur Bjarni Ólafsson <gudmundur.bjarni@gmail.com>",
