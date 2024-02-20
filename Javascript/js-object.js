// Object 

var myInfor = {
    'name': 'Tran Dinh Van',
    'age': 23,
    'address': 'Quy Nhon'
}

console.log(myInfor);

// Object constructor

function User(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
}

var user = new User('Tran', 'Van', 23);

console.log(user);

// Object prototype

function User(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
}

var user = new User('Tran', 'Van', 23);

User.prototype.className = 'DC20'
console.log(user);