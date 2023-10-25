const { Employees } = require("./Employees");

class SoftwareEngineer extends Employees{
    #programmingLanguages = [];
    constructor(name, title, salary, lang){
        super(name,title,salary);
        this.#programmingLanguages = lang;
    }

    getProgrammingLanguages(){
        return this.#programmingLanguages;
    }

    setProgrammingLanguage(language){
        this.#programmingLanguages.push(language);
    }

    setProgrammingLanguages(language){
        this.#programmingLanguages.push(language);
    }
}

/* const programmer = new SoftwareEngineer("Becca", "Senior Software Engineer", 100000, ["JavaScript", "Java", "Python"]);
console.log(programmer.getProgrammingLanguages()); // ["JavaScript", "Java", "Python"]
programmer.setProgrammingLanguage("C#"); 
console.log(programmer.getProgrammingLanguages()); // ["JavaScript", "Java", "Python", "C#"] */

module.exports = {
    SoftwareEngineer,
}