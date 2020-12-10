/* const address = ['Mounds View', 'Minneapolis', 'Minnesota', '19147'];

const [, city, state = 'New York'] = address;
console.log(`You are in ${city} ${state}.`);

const item = ['Coffee (iced)', '$3.00', '$3.50', '$3.75'];
const [itemName, , mediumPrice] = item;

console.log(`A medium ${itemName} costs ${mediumPrice}`); */

//------------------------------

//bracket operator and assignment



const person = {
    name: 'Sergio',
    age: 3,
    location: {
        city: 'SanTa Ronica',
        temp: 88
    }
};

//const { name, age } = person;
const { name: firstName = 'Anonymous', age } = person;

console.log(`It's ${firstName} in ${age}.`);


// console.log(`${firstName} is ${age}.`);

/* const { city, temp: temperature } = person.location;
if (city && temperature) {
    console.log(`It's ${temperature} in ${city}.`);
}
 */

const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday',
    publisher: {
        name: 'Not Empty'
    }
};

const { name: publisherName = 'Self-Published' } = book.publisher;

console.log(publisherName); // Penguin, Self-Published

//
// Array destructuring
//