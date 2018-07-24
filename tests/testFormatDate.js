const jsdateformat = require('../index');

/**
 * Tests the formatDate function according to multi-input
 * and an expected result. Failures are shown in the console.
 *
 * @param {date} inputDate - Date to be formatted
 * @param {string} inputString - Format string
 * @param {string} expected - Expected outcome
 *
 * @returns {null} - Output is shown in console
 */
function testFormatDate (inputDate, inputString, expected) {
    const output = jsdateformat.formatDate(inputDate, inputString),
        result = output === expected;

    if (!result) {
        process.stdout.write(`\ntestFormatDate: Input date "${inputDate}", "${inputString}", expected "${expected}", but received "${output}".\n`);
    }

    return result;
}

module.exports = {
    'default': testFormatDate
};
