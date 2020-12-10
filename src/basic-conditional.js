import React from 'react';
import ReactDOM from 'react-dom';

console.log('app.js is running');


/* var userName = 'Taylor';
var age = 202;
var userLocation = 'New York'

var template = (
    <div>
        <h1>{userName}</h1>
        <p>Age: {age} </p>
        <p>{userLocation}</p>
    </div>
); */

var user = {
    name: 'Zen',
    age: 26,
    location: 'Peoria'
};

function getLocation(location) {
    if (location) {
        return location;
    } else {
        return 'Unknown';
    }
}

var template2 = (
    <div>
        <h1>{user.name}</h1>
        <h1>Location: {getLocation(user.location)}</h1>
    </div>
);



var appRoot = document.getElementById('app');




ReactDOM.render(template2,appRoot);