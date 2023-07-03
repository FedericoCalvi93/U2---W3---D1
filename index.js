class User {
    constructor (_firstName, _lastName, _age, _location) {
        this.firstName = _firstName
        this.lastName = _lastName
        this.age = _age
        this.location = _location
    }

sayHello() {
    return 'Ciao!' + this.firstName
}

showAges() {
    return this.firstName + 'ha' + this.age
}
compareAges() { 
    if (x.age > y.age) {
        return x.firstName + "è più grande di" + y.firstName;}
        else if (x.age < y.age) {
            return y.firstName + "è più piccolo di" + x.firstName;
        }
        else {
            return x.firstName + "ha la stessa età di" + y.firstName;
        }
    }
}


const x = new User(
    'Marco',
    'Verdi',
    '34',
    'Roma'
)

console.log(x)
console.log(x.sayHello())
console.log(x.showAges())

const y = new User(
    'Luca',
    'Bianchi',
    '28',
    'Genova'
)

console.log(y)
console.log(y.sayHello())
console.log(y.showAges())

console.log (x > y)