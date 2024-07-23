/* 
                                                                Day 7: Objects

Tasks/Activities:

Activity 1: Object Creation and Access

Task 1: Create an object representing a book with properties like title, author, and year, and log the object to the console.
Task 2: Access and log the title and author properties of the book object
*/

let book = {
    title : 'Atomic Habits',
    author : 'James Clear',
    year : 2018,
    getTitleAndAuthor: function() {
        return `${this.title} by ${this.author}`;
    }
}
console.log(book);
console.log(book.author, book.title);
console.log(book.getTitleAndAuthor);

/* 
Activity 2: Object Methods

Task 3: Add a method to the book object that returns a string with the book's title and author, and log the result of calling this method.
Task 4: Add a method to the book object that takes a parameter (year) and updates the book's year property, then log the updated object.
*/

book.year = 2020;
console.log(book.year);
let library = {
    'Name': 'Officer Mess Library',
    'Books': ['Science', 'Math', 'Urdu'],
    "English": {
        "tenses": 'Yes',
        "present": 'Yes',
        "past": 'Yes',
    },
    getLibraryInfo: function(year) {
        return `The ${this.Name} has books like ${this.Books.join(', ')}. Year: ${year}.`;
    }
}

console.log(library.getLibraryInfo(2023));
for (let property in library) {
    if (library.hasOwnProperty(property)) {
        console.log(`${property}: ${library[property]}`);
    }
}
// Get keys and values of the 'English' object
let englishKeys = Object.keys(library.English);
let englishValues = Object.values(library.English);

// Log all keys
console.log("Keys:");
englishKeys.forEach(key => console.log(key));

// Log all values
console.log("Values:");
englishValues.forEach(value => console.log(value));