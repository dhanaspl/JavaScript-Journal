//  Try to make the calls variable equal to 'JerryKramerGeorgeElaine' with only a single invocation to the function jerry.

let calls = " ";

function jerry(str) {
  str = 'Jerry'
  return kramer(str);
}

function george(str) {
str = str+'George';
return elaine(str);  
}

function elaine(str) {
str= str+'Elaine';
  return str;
}

function kramer(str) {
str=str+'Kramer';
  return george(str);
}



// should return: 'JerryKramerGeorgeElaine'
calls = jerry(calls);
