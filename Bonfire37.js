
function telephoneCheck(str) {
	var stringToTest = str.replace(/\D+/g, '');

	if(falseIfTooManyNumbers(stringToTest)){
		return false;
	}
	if(falseIfDoesNotStartWith1(str, stringToTest)){
		return false;
	}
	if(falseIfWrongCharsOrParens(str)){
		return false;
    }
    return true;
}

function falseIfTooManyNumbers(stringToTest) {
    return stringToTest.length > 11 || stringToTest.length < 10;
}
function falseIfDoesNotStartWith1(str, stringToTest) {
    return str.charAt(0) !== "1" && stringToTest.length === 11;
}
function falseIfWrongCharsOrParens(str) {
    return /\(|\)/.test(str) && !/\(\d{3}\)/.test(str) || /\?/g.test(str);
}

telephoneCheck("555-5?55-5555");
