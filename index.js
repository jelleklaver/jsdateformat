/**
 * Day
 *
 * d	Day of the month, 2 digits with leading zeros              01 to 31
 * D	A textual representation of a day, three letters           Mon through Sun
 * j	Day of the month without leading zeros                     1 to 31
 * l	A full textual representation of the day of the week       Sunday through Saturday
 * N	ISO-8601 numeric representation of the day of the week     1 (Monday) through 7 (Sunday)
 * -----S	English ordinal suffix for the day of the month, 2 characters	st, nd, rd or th. Works well with j
 * w	Numeric representation of the day of the week              0 (Sunday) through 6 (Saturday)
 * -----z	The day of the year (starting from 0)	               0 through 365
 *
 * Week
 * -----W	ISO-8601 week number of year, weeks starting on Monday 1 through 52
 *
 * Month
 * F	A full textual representation of a month                   January through December
 * m	Numeric representation of a month, with leading zeros      01 through 12
 * M	A short textual representation of a month, three letters   Jan through Dec
 * n	Numeric representation of a month, without leading zeros   1 through 12
 * ------t	Number of days in the given month	                   28 through 31
 *
 * Year
 * ------L	Whether it's a leap year	                           1 (leap year), 0 otherwise.
 * ------o	ISO-8601 week-numbering year. This has the same value as Y, except that if the ISO week number (W) belongs to the previous or next year, that year is used instead. (added in PHP 5.1.0)	Examples: 1999 or 2003
 * Y	A full numeric representation of a year, 4 digits	       Examples: 1999 or 2003
 * ------y	A two digit representation of a year	Examples: 99 or 03
 *
 * Time
 * ------a	Lowercase Ante meridiem and Post meridiem	am or pm
 * ------A	Uppercase Ante meridiem and Post meridiem	AM or PM
 * ------B	Swatch Internet time	000 through 999
 * ------g	12-hour format of an hour without leading zeros	1 through 12
 * G	24-hour format of an hour without leading zeros	0 through 23
 * ------h	12-hour format of an hour with leading zeros	01 through 12
 * H	24-hour format of an hour with leading zeros	00 through 23
 * i	Minutes with leading zeros	00 to 59
 * s	Seconds, with leading zeros	00 through 59
 * ------u	Microseconds (added in PHP 5.2.2). Note that date() will always generate 000000 since it takes an integer parameter, whereas DateTime::format() does support microseconds if DateTime was created with microseconds.	Example: 654321
 * ------v	Milliseconds (added in PHP 7.0.0). Same note applies as for u.	Example: 654

*/

exports.formatDate = function(date, dateFormat) {
    /**
     * Day of the month
     */
    var j = date.getDate();     // Day of the month (1 - 31)
    var d = j < 10 ? '0'+j : j; // Day of the month (01 - 31)

    /**
     * Year
     */
    var Y = date.getFullYear(); // Year (1999)
    var y = Y.toString().substr(-2);       // Year (99)

    /**
     * Day of the week
     */
    var N = date.getDay();      // Day of the week (1 - 7)

    var dayNames = {
        1: 'Monday',
        2: 'Tuesday',
        3: 'Wednesday',
        4: 'Thursday',
        5: 'Friday',
        6: 'Saturday',
        7: 'Sunday'
    }

    var l = dayNames[N];        // Day of the week (text)
    var D = l.substr(0,3);      // Short day of the week (text)
    var w = N - 1;              // Day of the week (0 - 6)

    /**
     * Month of the year
     */
    var n = date.getMonth() +1; // Month of the year (1 - 12)
    var m = n < 10 ? '0'+n : n; // Month of the year (01 - 12)

    var monthNames = {
        1: 'January',
        2: 'February',
        3: 'March',
        4: 'April',
        5: 'May',
        6: 'June',
        7: 'July',
        8: 'August',
        9: 'September',
        10: 'October',
        11: 'November',
        12: 'December',
    }

    var F = monthNames[j];      // Month of the year (text)
    var M = F.substr(0,3);      // Short month of the year (text)

    /**
     * Time
     */
    var G = date.getHours();    // Hours (0 - 23)
    var H = G < 10 ? '0'+G : G; // Hours (00 - 23)

    var minutes = date.getMinutes();                // Minutes (0 - 59)
    var i = minutes < 10 ? '0'+minutes : minutes;   // Minutes (00 - 59)

    var seconds = date.getSeconds();                // Seconds (0 - 59)
    var s = seconds < 10 ? '0'+seconds : seconds;   // Seconds (00 - 59)

    var v = date.getMilliseconds();                 // Milliseconds

    /**
     * Replace
     */
    var replaceChars = {
        'd': d,
        'D': D,
        'j': j,
        'l': l,
        'N': N,
        'w': w,
        'F': F,
        'm': m,
        'M': M,
        'n': n,
        'Y': Y,
        'y': y,
        'G': G,
        'H': H,
        'i': i,
        's': s,
    }
    var regex = new RegExp( Object.keys(replaceChars).join("|"), "g");
    var formattedDate = dateFormat.replace(regex,function(match) {return replaceChars[match];})

    return formattedDate;
}
