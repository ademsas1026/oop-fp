//data is separate from methods
const employees = [['Joe', 1000000], ['Amy', 100000000000]];

const changeSalary = (employeeName, amount) => {
  employees.forEach(employee => {
    if (employee[0] === employeeName) employee[1] += amount;
  })
}

const description = employeeName => {
  return employees.forEach(employee => {
    if (employee[0] == employeeName) console.log(`${employee[0]} makes ${employee[1]}`)
  })
}

description('Joe');
changeSalary('Amy', -1000);
description('Joe');
