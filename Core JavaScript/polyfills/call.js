let employee = {
    getInfo: function (company, salary) {
        return `|name: ${this.firstName} ${this.lastName} \n|company: ${company} \n|salary: ${salary}`;
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

Function.prototype.call = null;

if (!Function.prototype.call) {
    Function.prototype.call = function (context, ...args) {
        context.fn = this;
        
        const result = context.fn(...args);
        delete context.fn;

        return result;
    };
}

console.log(employee.getInfo.call(employee1, "Google", "$100k"));
console.log(employee.getInfo.call(employee2, "Facebook", "$200k"));
