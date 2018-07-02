//ideally, each method has a single purpose, it can stand on its own
const changeSalary = (employees, employeeName, amount) => {
  //original data is NOT mutated. 
  //all methods that change something about the input data act on a copy of that data, rather than the original.
  return employees.map(employee => {
    if (employee[0] === employeeName) employee[1] += amount;
    return employee;
  })
}

const description = (employees, employeeName) => {
  return employees.forEach(employee => {
    if (employee[0] == employeeName) console.log(`${employee[0]} makes ${employee[1]}`)
  })
}

//data is separate from methods
const employees = [['Joe', 1000000], ['Amy', 100000000000]];
description(employees, 'Joe');
console.log(changeSalary(employees, 'Amy', -1000));
description(employees, 'Joe');
