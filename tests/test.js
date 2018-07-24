/**
 * This is the testscript for the @jelleklaver/jsdateformat package.
 */
const testFormatDate = require('./testFormatDate').default,
    testFormatDateNL = require('./testFormatDateNL').default,
    testFormatDateUTC = require('./testFormatDateUTC').default,
    testNow = require('./testNow').default;

const results = {
    'bad': 0,
    'total': 0
};

/**
 * Increases total and shows progress in console.
 *
 * @param {boolean} result - Result of the test to log
 *
 * @returns {null} - Shown in console
 */
function logTest (result) {
    results.total += 1;
    if (result) {
        process.stdout.write('.');
    } else {
        results.bad += 1;
    }
}

/**
 * Tests default formatDate (testFormatDate) function
 * @param {date} defaultTestDate - Date to be tested (and formatted)
 *
 * @returns {null} - Output is shown in console
 */
function testDefaultFormatDate (defaultTestDate) {
    const tests = [ /* eslint array-element-newline: ["error", "consistent"] */
        [defaultTestDate, 'd-m-Y H:i', '01-03-2000 04:05'],
        [defaultTestDate, 'd', '01'],
        [defaultTestDate, 'D', 'Wed'],
        [defaultTestDate, 'jS', '1st'],
        [defaultTestDate, 'l', 'Wednesday'],
        [defaultTestDate, 'N', '3'],
        [defaultTestDate, 'w', '2'],
        [defaultTestDate, 'F', 'March'],
        [defaultTestDate, 'm', '03'],
        [defaultTestDate, 'M', 'Mar'],
        [defaultTestDate, 'n', '3'],
        [defaultTestDate, 't', '31'],
        [new Date(2000, 5, 13, 4, 5), 't', '30'],
        [defaultTestDate, 'Y', '2000'],
        [defaultTestDate, 'y', '00'],
        [defaultTestDate, 'G', '4'],
        [defaultTestDate, 'H', '04'],
        [defaultTestDate, 'i', '05'],
        [defaultTestDate, 's', '00']
    ];

    for (let i = 0; i < tests.length; i += 1) {
        logTest(testFormatDate(tests[i][0], tests[i][1], tests[i][2]));
    }

    testNow(
        'j',
        new Date().getDate().
            toString()
    );
    testNow(
        'G',
        new Date().getHours().
            toString()
    );
}

/**
 * Tests i18n formatDate (testFormatDateNL) function
 * @param {date} defaultTestDate - Date to be tested (and formatted)
 *
 * @returns {null} - Output is shown in console
 */
function testi18nFormatDate (defaultTestDate) {
    const tests = [ /* eslint array-element-newline: ["error", "consistent"] */
        [defaultTestDate, 'D', 'Woe'],
        [defaultTestDate, 'jS', '1ste'],
        [defaultTestDate, 'l', 'Woensdag'],
        [defaultTestDate, 'F', 'Maart'],
        [defaultTestDate, 'M', 'Maa']
    ];

    for (let i = 0; i < tests.length; i += 1) {
        logTest(testFormatDateNL(tests[i][0], tests[i][1], tests[i][2]));
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
    const defaultTestDate = new Date(2000, 2, 1, 4, 5);

    process.stdout.write('--------------------\n\n');
    process.stdout.write('Testing formatDate\n');
    testDefaultFormatDate(defaultTestDate);

    process.stdout.write('\nTesting UTC\n');
    logTest(testFormatDateUTC(defaultTestDate, 'd-m-Y H:i'));

    process.stdout.write('\nTesting i18n\n');
    testi18nFormatDate(defaultTestDate);

    process.stdout.write('\n\n--------------------\n');
    process.stdout.write(`Tested: ${results.total}\n`);
    process.stdout.write(`Passed: ${(results.total - results.bad)}\n`);
    if (results.bad > 0) {
        process.stdout.write(`\u001b[31mFailed: ${results.bad}\u001b[0m\n`);
    } else {
        process.stdout.write(`\u001b[32mFailed: ${results.bad}\u001b[0m\n`);
    }
    process.stdout.write('--------------------\n');
}

/**
 * Export the test function so node can execute it
 */
module.exports = {
    test
};
