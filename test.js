/**
 * This is the testscript for the @jelleklaver/jsdateformat package.
 */
const jsdateformat = require('./index');
const results = {
    'bad': 0,
    'total': 0
};

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
    results.total += 1;
    const result = jsdateformat.formatDate(inputDate, inputString);

    if (result !== expected) {
        results.bad += 1;
        console.log(`Input ${inputString}, expected ${expected}, but received ${result}.`);
    }
}

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
    results.total += 1;

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
    const result = jsdateformat.formatDate(inputDate, inputString);

    if (result !== expected) {
        results.bad += 1;
        console.log(`Input ${inputString}, expected ${expected}, but received ${result}.`);
    }
}

/**
 * The main test function which executes all tests.
 * This function should be called for an overall test.
 * The results are shown in the console.
 *
 *
 * @returns {null} - Output is shown in console
 */
function test () {
    console.log('Tests starting....');

    const defaultTestDate = new Date(2000, 2, 1, 4, 5);

    testFormatDate(defaultTestDate, 'd-m-Y H:i', '01-03-2000 04:05');
    testFormatDate(defaultTestDate, 'd', '01');
    testFormatDate(defaultTestDate, 'D', 'Wed');
    testFormatDate(defaultTestDate, 'jS', '1st');
    testFormatDate(defaultTestDate, 'l', 'Wednesday');
    testFormatDate(defaultTestDate, 'N', '3');
    testFormatDate(defaultTestDate, 'w', '2');
    testFormatDate(defaultTestDate, 'F', 'March');
    testFormatDate(defaultTestDate, 'm', '03');
    testFormatDate(defaultTestDate, 'M', 'Mar');
    testFormatDate(defaultTestDate, 'n', '3');
    testFormatDate(defaultTestDate, 't', '31');
    testFormatDate(new Date(2000, 5, 13, 4, 5), 't', '30');
    testFormatDate(defaultTestDate, 'Y', '2000');
    testFormatDate(defaultTestDate, 'y', '00');
    testFormatDate(defaultTestDate, 'G', '4');
    testFormatDate(defaultTestDate, 'H', '04');
    testFormatDate(defaultTestDate, 'i', '05');
    testFormatDate(defaultTestDate, 's', '00');

    testFormatDateNL(defaultTestDate, 'D', 'Woe');
    testFormatDateNL(defaultTestDate, 'jS', '1ste');
    testFormatDateNL(defaultTestDate, 'l', 'Woensdag');
    testFormatDateNL(defaultTestDate, 'F', 'Maart');
    testFormatDateNL(defaultTestDate, 'M', 'Maa');

    console.log('Tested: ' + results.total);
    console.log('Passed: ' + (results.total - results.bad));
    if (results.bad > 0) {
        console.log(`\u001b[31mFailed: ${results.bad}\u001b[0m`);
    } else {
        console.log(`\u001b[32mFailed: ${results.bad}\u001b[0m`);
    }
}

/**
 * Export the test function so node can execute it
 */
module.exports = {
    test
};
