const jsdateformat = require('../index');

/**
 * Tests the formatDate function with internationalization
 * according to multi-input and an expected result.
 * Failures are shown in the console.
 *
 * @param {date} inputDate - Date to be formatted
 * @param {string} inputString - Format string
 * @param {string} expected - Expected outcome
 *
 * @returns {null} - Output is shown in console
 */
function testFormatDateNL (inputDate, inputString, expected) {
    jsdateformat.i18n.nl = {
        'dayNames': {
            '1': 'Maandag',
            '2': 'Dinsdag',
            '3': 'Woensdag',
            '4': 'Donderdag',
            '5': 'Vrijdag',
            '6': 'Zaterdag',
            '7': 'Zondag'
        },
        'monthNames': {
            '1': 'Januari',
            '2': 'Februari',
            '3': 'Maart',
            '4': 'April',
            '5': 'Mei',
            '6': 'Juni',
            '7': 'Juli',
            '8': 'Augustus',
            '9': 'September',
            '10': 'Oktober',
            '11': 'November',
            '12': 'December'
        },
        'ordinalSuffixes': {
            '0': 'de',
            '1': 'ste',
            '2': 'de',
            '3': 'de',
            '4': 'de',
            '5': 'de',
            '6': 'de',
            '7': 'de',
            '8': 'ste',
            '9': 'de'
        }
    };

    jsdateformat.options.language = 'nl';
    const output = jsdateformat.formatDate(inputDate, inputString),
        result = output === expected;

    if (!result) {
        process.stdout.write(`\ntestFormatDateNL: Input date "${inputDate}", "${inputString}", expected "${expected}", but received "${output}".\n`);
    }

    return result;
}

module.exports = {
    'default': testFormatDateNL
};
