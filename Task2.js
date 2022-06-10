function checkKeyInObj(obj,string){
    for (let key in obj) {
        if (userInfo.hasOwnProperty(key)){
          return string in obj;
        }
    }
    return false;
}
  
const person = {
    sex: "male"
}
let checkString = prompt("Input check string: ");//Obj has or not has value
const userInfo  = Object.create(person);
userInfo.name = "Irina";
userInfo.age = 18;
userInfo.ownSex = "female";
let result = checkKeyInObj(userInfo, checkString);
console.log(result);
