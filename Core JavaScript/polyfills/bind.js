let employee = {
    getInfo: function (company, salary) {
        return `|name: ${this.firstName} ${this.lastName} \n| company: ${company} \n| salary: ${salary}`;
    },
};

let employee1 = {
    firstName: "John",
    lastName: "Doe",
};

let employee2 = {
    firstName: "Jane",
    lastName: "Doe",
};

Function.prototype.bind = null;

if (!Function.prototype.bind) {
    Function.prototype.bind = function (context, ...args1) {
        var fn = this;
        return function (...args2) {
            return fn.apply(context, [...args1, ...args2]);
        };
    };
}

let googleEmployeeInfo = employee.getInfo.bind(employee1, "Google");
let faceBookEmployeeInfo = employee.getInfo.bind(employee2, "Facebook");

console.log(googleEmployeeInfo("$100k"));
console.log(faceBookEmployeeInfo("$200k"));
