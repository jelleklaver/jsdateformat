const jsdateformat = require('../index');

/**
 * Tests the now function according to multi-input
 * and an expected result. Failures are shown in the console.
 *
 * @param {string} inputString - Format string
 * @param {string} expected - Expected outcome
 *
 * @returns {null} - Output is shown in console
 */
function testNow (inputString, expected) {
    const output = jsdateformat.now(inputString),
        result = output === expected;

    if (!result) {
        process.stdout.write(`\ntestNow: Input "${inputString}", expected "${expected}", but received "${output}".`);
    }

    return result;
}

module.exports = {
    'default': testNow
};
