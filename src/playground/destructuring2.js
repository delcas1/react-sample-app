console.log('destructure-this-bitch');

const person = {
    name: 'Andrew',
    age: 27,
    location: {
        city: 'Philadelphia',
        temp: 88
    }
};

console.log(`${person.name} is ${person.age}.`);

const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday',
    publisher: {
        // name: 'Penguin'
    }
};

const { name: publisherName = 'Self-Published' } = book.publisher;

console.log(publisherName); // Penguin, Self-Published

const item = ['Coffee (iced)', '$3.00', '$3.50', '$3.75'];
const [itemName, , mediumPrice] = item;

console.log(`A medium ${itemName} costs ${mediumPrice}`);