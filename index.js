const options = {
        'language': 'en'
    },
    i18n = {
        'en': {
            'dayNames': {
                '1': 'Monday',
                '2': 'Tuesday',
                '3': 'Wednesday',
                '4': 'Thursday',
                '5': 'Friday',
                '6': 'Saturday',
                '7': 'Sunday'
            },
            'monthNames': {
                '1': 'January',
                '2': 'February',
                '3': 'March',
                '4': 'April',
                '5': 'May',
                '6': 'June',
                '7': 'July',
                '8': 'August',
                '9': 'September',
                '10': 'October',
                '11': 'November',
                '12': 'December'
            },
            'ordinalSuffixes': {
                '0': 'th',
                '1': 'st',
                '2': 'nd',
                '3': 'rd',
                '4': 'th',
                '5': 'th',
                '6': 'th',
                '7': 'th',
                '8': 'th',
                '9': 'th'
            }
        }
    };

/**
 * Formats date in a PHP-like way
 *
 * @param {date} date - The date to be formatted
 * @param {string} dateFormat - The output format
 *
 * @returns {string} - Formatted date
 */
function formatDate (date, dateFormat) {
    const
        shortEnd = 3,
        shortStart = 0,
        modulus = 10,

        yearFull = date.getFullYear(),
        yearShort = yearFull.toString().substr(-2),

        month = date.getMonth() + 1,
        monthNamed = i18n[options.language].monthNames[month],
        monthNamedShort = monthNamed.substr(shortStart, shortEnd),
        monthPrefixed = month < modulus ? `0${month}` : month,

        dateOfMonth = date.getDate(),
        dateOfMonthPrefixed = dateOfMonth < modulus ? `0${dateOfMonth}` : dateOfMonth,
        daysInMonth = new Date(yearFull, month, 0).getDate(),
        ordinalSuffix = i18n[options.language].ordinalSuffixes[dateOfMonth % modulus],

        dayOfTheWeekISO = date.getDay(),
        dayOfTheWeek = dayOfTheWeekISO - 1,
        dayOfTheWeekNamed = i18n[options.language].dayNames[dayOfTheWeekISO],
        dayOfTheWeekNamedShort = dayOfTheWeekNamed.substr(shortStart, shortEnd),

        hours = date.getHours(),
        hoursPrefixed = hours < modulus ? `0${hours}` : hours,
        minutes = date.getMinutes(),
        minutesPrefixed = minutes < modulus ? `0${minutes}` : minutes,

        seconds = date.getSeconds(),
        secondsPrefixed = seconds < modulus ? `0${seconds}` : seconds,
        milliseconds = date.getMilliseconds();

    // Replace
    const replaceChars = {
            'D': dayOfTheWeekNamedShort,
            'd': dateOfMonthPrefixed,
            'F': monthNamed,
            'G': hours,
            'H': hoursPrefixed,
            'i': minutesPrefixed,
            'j': dateOfMonth,
            'l': dayOfTheWeekNamed,
            'M': monthNamedShort,
            'm': monthPrefixed,
            'N': dayOfTheWeekISO,
            'n': month,
            'S': ordinalSuffix,
            's': secondsPrefixed,
            't': daysInMonth,
            'v': milliseconds,
            'w': dayOfTheWeek,
            'Y': yearFull,
            'y': yearShort
        },
        replaceRegex = new RegExp(
            Object.keys(replaceChars).join('|'),
            'g'
        ),
        formattedDate = dateFormat.replace(
            replaceRegex,
            (match) => replaceChars[match]
        );

    return formattedDate;
}

/**
 * Export the formatDate function and i18n and options objects
 */
module.exports = {
    formatDate,
    i18n,
    options
};
