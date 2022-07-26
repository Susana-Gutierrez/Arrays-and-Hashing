function validPalindrome(str) {

  var firstStr = [];
  var secStr = [];

  var alfa = /[a-z0-9]/;

  for (let i = 0; i < str.length; i++) {
    if ((str[i] !== ' ') && (str[i].toLowerCase().match(alfa) !== null)) {
      firstStr.push(str[i].toLowerCase());
    }
  }

  for (let i = firstStr.length - 1; i >= 0; i-- ) {
    secStr.push(firstStr[i]);
  }

  if ( firstStr.join('') === secStr.join('')) {
    return true;
  }

  return false;

}
