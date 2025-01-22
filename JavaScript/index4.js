
const Person = {
    name: "Bob",
    age: 25,
    city: "London",
    greeting: function (){
        return `Hello, my name is ${Person.name}!`
    }
}
console.log(Person.name);
console.log(Person);
console.log(Person.greeting())

Person.age = 26;
Person.lastName = "Doe"; // is there a way to add this in the 2nd position?

console.log(Person)

// Nested Object Example Reference
const films = {
    Oppenheimer: {
        title: "Oppenheimer",
        year: 2023,
        genre: "Drama"
    },
    Barbie: {
        title: "Barbie",
        year: 2023,
        genre: "Comedy"
    },
    Dune1: {
        title: "Dune: Part One",
        year: 2021,
        genre: "Sci-Fi"
    }
}
//  ? Nested Objects for tasks
const employee = {
    id: 1,
    name: 'John Doe',
    position: 'Software Engineer',
    department: {
        name: 'Engineering',
        location: 'Building A',
        supervisor: {
            name: 'Jane Smith',
            position: 'Engineering Manager'
        }
    }
}

const library = {
    name: 'Public Library',
    location: 'City Center',
    books: [
        {
            id: 'B001',
            title: 'The Great Gatsby',
            author: 'F. Scott Fitzgerald',
            details: {
                genre: 'Fiction',
                year: 1925
            }
        },
        {
            id: 'B002',
            title: 'To Kill a Mockingbird',
            author: 'Harper Lee',
            details: {
                genre: 'Fiction',
                year: 1960
            }
        }
    ]
};

console.log(employee.department.supervisor.name)
console.log(library.books[0].title)

// Vehicles task
const Car1 = {
    name: "BigRed",
    colour: "Red",
    size: "Big",
    topSpeed: 200
}
const Car2 = {
    name: "MediumBlue",
    colour: "Blue",
    size: "Medium",
    topSpeed: 190
}
const Car3 = {
    name: "SmallGreen",
    colour: "Green",
    size: "Small",
    topSpeed: 210
}
const cars = [Car1, Car2, Car3];
cars.push(Car4 = {name: "TinyYellow", colour: "Yellow", size: "Tiny", topSpeed: 220})

console.log(cars);
console.log(Car4);

let fastest = {topSpeed: 0};
for (let car of cars){
    if (car.topSpeed > fastest.topSpeed){
        {fastest = car}
    }
}
console.log(fastest)


// PM Tasks
// Adds text written by user of page in a textbox to the page after submit button
function newElement(type, text){
    let newText = document.createElement(type);
    newText.textContent = text;
    document.body.appendChild(newText);
}

const secretText = "You have found the secret text"
function displayText(type, text){
    let hiddenText = document.createElement(type);
    hiddenText.textContent = text;
    document.body.appendChild(hiddenText);
}

// Light/Dark Mode
function lightDark(){
    
}