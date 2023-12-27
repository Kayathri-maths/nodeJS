// arrow function 
const product = (a, b) => {
    return a*b;
}
console.log(product(10,22));

//student object
const student = {
    name:"kayathri",
    age : 20,
    greet(){
        console.log('Hi, My name is ' + this.name + ' and age is ' + this.age);
    }
}
console.log(student.name);
student.greet();