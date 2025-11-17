"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const formatValue = (value) => {
    if (typeof value === 'string') {
        return value.toUpperCase();
    }
    else if (typeof value === 'number') {
        return value * 10;
    }
    else {
        return !value;
    }
};
const getLength = (value) => {
    if (typeof value === 'string') {
        return value.length;
    }
    else if (Array.isArray(value)) {
        return value.length;
    }
    return 0;
};
class Person {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getDetails() {
        return (`'Name: ${this.name}, Age: ${this.age}'`);
    }
}
const filterByRating = (items) => {
    return items.filter((item) => item.rating >= 4);
};
const products = [
    { title: 'Book A', rating: 5 },
    { title: 'Book B', rating: 3.2 },
    { title: 'Book C', rating: 5.0 }
];
const filterActiveUsers = (users) => {
    return users.filter((user) => user.isActive === true);
};
const users = [
    { id: 1, name: 'Rakib', email: 'rakib@example.com', isActive: true },
    { id: 2, name: 'Asha', email: 'asha@example.com', isActive: false },
    { id: 3, name: 'Rumi', email: 'rumi@example.com', isActive: true },
];
//# sourceMappingURL=solution.js.map