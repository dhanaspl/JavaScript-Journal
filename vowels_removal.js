// Write a function disemvowel that takes in a string and returns a new string with all vowels removed.


function disemvowel(string) {

const object = {
  'a':true,
  'e':true,
  'i':true,
  'o':true,
  'u':true
};
  let result ='';
  for (let i=0;i<string.length;i++){
    var letter = string[i].toLowerCase();
    if(!object[letter]){
     result= result+string[i];
    }
  }
  return result;
}



 console.log(disemvowel('CodeSmith')); // => 'CdSmth'
 console.log(disemvowel('BANANA')); // => 'BNN'
 console.log(disemvowel('hello world')); // => 'hll wrld'