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

Function.prototype.apply = null;

if (!Function.prototype.apply) {
    Function.prototype.apply = function (context, args) {
        const fnSymbol = Symbol("fn");

        context[fnSymbol] = this;

        const result = context[fnSymbol](...args);
        delete context[fnSymbol];

        return result;
    };
}

console.log(employee.getInfo.apply(employee1, ["Google", "$100k"]));
console.log(employee.getInfo.apply(employee2, ["Facebook", "$200k"]));
