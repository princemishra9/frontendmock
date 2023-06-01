console.log("hello")
let userData = [
    { id: 1, name: 'prince', age: 23 },
    { id: 2, name: 'satyam', age: 21 },
    { id: 3, name: 'uma', age: 21 },
]
// local object storage 
localStorage.setItem('userData', JSON.stringify(userData));

// retrieving object from localstrage
let retrieveUserData = JSON.parse(localStorage.getItem('userData'));
console.log(retrieveUserData);

//session storage 

let employe = [
    { id: 1, name: 'tyr', age: 23 },
    { id: 2, name: 'satyam', age: 21 },
    { id: 2, name: 'satyam', age: 21 }
]
sessionStorage.setItem("emp", JSON.stringify(employe));
let getempData = sessionStorage.getItem('emp');
console.log(getempData);