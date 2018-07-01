class Employee {

  constructor(name, salary){
    this.state = {
      name: name, 
      salary: salary
    }
  }

  changeSalary(amount){
    this.state.salary += amount;
  }

  description(){
    const { name, salary } = this.state;
    return `${name} makes ${salary}`
  }
}

//data is supplied to an object at the time that the object is created
const joe = new Employee('Joe', 10000000000);
console.log(joe);
joe.changeSalary(5000);
console.log(joe);