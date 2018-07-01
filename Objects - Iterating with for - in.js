const checkObj = {
  oddNum: 1,
  evenNum: 2,
  foundNum: 5,
  randomNum: 18
};
const objToArray = [];

for(const property in checkObj){
  if(checkObj[property]>=2){
    objToArray.push(checkObj[property]);
  }
}
console.log(objToArray);