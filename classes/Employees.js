class Employees {
    #salary
    #isHired

    static #allEmployees = [];

    constructor (name, title, salary){
        this.name = name;
        this.title = title;
        this.#salary = salary;
        this.#isHired = true;
        Employees.#allEmployees.push(this);
    }

    getSalary(){
        return this.#salary;
    }

    setSalary(amount){
        this.#salary = amount;
    }

    getStatus(){
        return this.#isHired;
    }

    setStatus(command){
        if (this.#isHired){
            this.#isHired = false;
        }
        else{
            this.#isHired = true;
        }
    }

    static getEmployees(){ return this.#allEmployees}

    static getTotalPayroll(){
        let total = 0;
        for (let x = 0; x < Employees.#allEmployees.length; x++){
            console.log(Employees.#allEmployees.length + ' ' + x);
            console.log(Employees.#allEmployees);
            total += Employees.#allEmployees[x].getSalary();
        }
        return total;
    }
}

module.exports = {
    Employees,
}