const jsdateformat = require('../index');

/**
 * Tests the formatDate function according to multi-input with UTC
 * and an expected result. Failures are shown in the console.
 *
 * @param {date} inputDate - Date to be formatted
 * @param {string} inputString - Format string
 * @param {string} expected - Expected outcome
 *
 * @returns {null} - Output is shown in console
 */
function testFormatDateUTC (inputDate, inputString) {
    const timezoneOffset = inputDate.getTimezoneOffset() * 60 * 1000,
        offsetDate = new Date(inputDate.getTime() + timezoneOffset),
        output = jsdateformat.formatDate(inputDate, inputString, true) ===
        jsdateformat.formatDate(offsetDate, inputString, false),
        result = output === true;

    if (!result) {
        process.stdout.write(`\ntestFormatDateUTC: Input date "${inputDate}", "${inputString}", expected true, but received "${output}".\n`);
    }

    return result;
}

module.exports = {
    'default': testFormatDateUTC
};
