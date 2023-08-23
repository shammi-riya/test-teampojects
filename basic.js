const user ={
    name:'riya',
    age:22,
    'ami vat khai':true
}


const func = (function getUserData(user) {
    
    return user;
})(user['ami vat khai'])


// console.log(func);


const property  = 'fristname'
const name = "riya"


const user2={

    [property] :name
}
// console.log(user2);


const user3 = {
    name: 'hasan',
    age: 22,
    name: 'hasan hossain',
}

// console.log(user3);


const obj = {
    num1 : 6,
    num2:7,
    num3 :8,
    name:'riya moni'

}



function multiply(obj) {
    
    for (const key in obj) {
      console.log(obj[key]);
      if(typeof obj[key] == 'number'){
        obj[key] *=2
      }
    }

}

multiply(obj)

console.log(obj);


