$.ajax()

/**
 * Create a person
 * @param {string} name Name of the person
 * @param {number} age Age of the person
 */
function Person(name, age) {
    this.name = name;
    this.age = age;
}

var p = new Person()