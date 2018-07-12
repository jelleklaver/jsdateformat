var jsdateformat = require('./index');

var results = {
    total: 0,
    bad: 0
}


function test() {
    console.log('Tests starting....');

    var defaultTestDate = new Date(2000, 2, 1, 4, 5);

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

    console.log('Tested: ' + results.total);
    console.log('Passed: ' + (results.total - results.bad));
    if(results.bad !== 0) {
        console.log('\033[0;31mFailed: ' + results.bad + '\033[0m');
    } else {
        console.log('\033[0;32mFailed: ' + results.bad + '\033[0m');
    }
}

function testFormatDate(inputDate, inputString, expected) {
    results.total++;
    var result = jsdateformat.formatDate(inputDate, inputString);

    if(result !== expected) {
        results.bad++;
        console.log('Input "' + inputString + '", expected "' + expected + '", but received "' + result + '"');
    }
}

module.exports = {
    test: test
}
