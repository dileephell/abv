function reverseString(string) {
    var reversedString = "";
    var stringLength = string.length - 1;
    for (var i = stringLength; i >= 0; i--) {
        reversedString += string[i];
    }
    return reversedString;
}
