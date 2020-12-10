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

var app = {
    title: 'Theory of React Apps',
    subtitle: 'A day in the mystery fields',
    options: ['one', 'two', 'three']
};

var template2 = (
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{app.options.length > 0 ? 'Here are the array pieces' : 'Nothing to see here'} </p>
        <ol>
            <li>item 1</li>
            <li>item 2</li>
        </ol>
    </div>
)
var appRoot = document.getElementById('app');

ReactDOM.render(template2, appRoot); 




/* var user = {
    name: 'Zen',
    age: 26,
    location: 'Peoria'
};

var template2 = (
    <div>
        <h1>{user.name}</h1>
        <h1>Localtion: {user.location}</h1>
    </div>
);
 */


//var appRoot = document.getElementById('app');

//ReactDOM.render(template2, appRoot); 


 /* var user = {
    name: 'Zen',
    age: 26,
    location: 'Peoria'
};

function getLocation(location) {
    if (location) {
        return <p>Santa Maria</p>
    } else {
        return 'Unknown';
    }
}

var template2 = (
    <div>
        <h1>{user.name ? user.name : "Sancho"}</h1>
        <h1>Location: {getLocation(user.location)}</h1>
        {<h3>this is a h3</h3>}
        {getLocation(user.location)}
    </div>
);



var appRoot = document.getElementById('app'); */




//ReactDOM.render(template2,appRoot); 