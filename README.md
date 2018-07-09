# @jelleklaver/jsdateformat
Format JS dates in a PHP-like way

# Install
This repo is available via npm ([jsdateformat](https://www.npmjs.com/package/@jelleklaver/jsdateformat))

```bash
npm install @jelleklaver/jsdateformat
```

# Usage
Import it and play. The `formatDate()`function returns the formatted date.
```javascript
var jsdateformat = require('@jelleklaver/jsdateformat');

jsdateformat.formatDate(new Date(), 'd-m-Y H:i');       // 01-01-2000 13:01
```

## Formatting Options
Table mostly copied from the [PHP Date function](http://php.net/manual/en/function.date.php) explanation.

| Format character | Description | Example or range returned values |
|   :---:   | :---        | :---  |
| d | Day of the month, 2 digits with leading zeros | (01 - 31) |
| D | A textual representation of a day, three letters | (Mon - Sun) |
| j | Day of the month without leading zeros | (1 - 31) |
| l | A full textual representation of the day of the week | (Monday - Sunday) |
| N | ISO-8601 numeric representation of the day of the week | (1 (Mon) - 7 (Sun)) |
| w | Numeric representation of the day of the week | (0 (Sun) - 6 (Sat)) |
| F | A full textual representation of a month | (January - December) |
| m | Numeric representation of a month, with leading zeros | (01 - 12) |
| M | A short textual representation of a month, three letters | (Jan - Dec) |
| n | Numeric representation of a month, without leading zeros | (1 - 12) |
| Y | A full numeric representation of a year, 4 digits | (e.g. 1999) |
| y | A full numeric representation of a year, 2 digits | (e.g. 99) |
| G | 24-hour format of an hour without leading zeros | (0 - 23) |
| H | 24-hour format of an hour with leading zeros | (00 - 23) |
| i | Minutes with leading zeros | (00 - 59) |
| s | Seconds with leading zeros | (00 - 59) |

As you've probably noticed, not all options from the PHP Date function are available yet. This function is work in progress and any help would be greatly appreciated.