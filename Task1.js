function showOwnElements(obj){
    for (let key in userInfo) {
        if (userInfo.hasOwnProperty(key)) {
            console.log("obj." + key + " = " + userInfo[key]);
        }   
    }
}
  
const person = {
    sex: "male"
}

const userInfo  = Object.create(person);
userInfo.name = "Irina";
userInfo.age = 18;
userInfo.ownSex = "female";
showOwnElements(userInfo);

  