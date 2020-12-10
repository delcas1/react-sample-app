console.log('App.js firing - good to go here')

// JSX - JavaScript XML

const app = {
    title: 'Andromedas',
    subtitle: 'Strings Stringed Stringers',
    options: ['one', 'two', 'three', '5']
    };

const onFormSubmit = (e) => {
    e.preventDefault();
    
    const option = e.target.elements.option.value;

     if (option) {
         app.options.push(option);
         e.target.elements.option.value = '';
         render();
         console.log('did i reach this?');
     }
};

const onRemoveAll = () => {
    app.options = [];
    render();
};

const onMakeDecision = () => {
   const randomNum = Math.floor(Math.random() * app.options.length);
   const option = app.options[randomNum];
   alert(option);
};

const appRoot = document.getElementById('app');

//ReactDOM.render(template, appRoot);

const render = () => {
    const template = (
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
       <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
       <button disabled={app.options.length ===0}  onClick={onMakeDecision}>What should I do</button>
       <button onClick={onRemoveAll}>Remove All</button>
        <ol>
           {}
           {
            app.options.map((option) => {
                return <li key={option}>{option}</li>
            })

           }

        </ol>
        <form onSubmit={onFormSubmit}>
            <input type="text" name="option"/>
            <button>Add Option</button>
        </form>

    </div>
);
ReactDOM.render(template, appRoot);
};

 
render();


     
//console.log(templateTwo);
//const appRoot = document.getElementById('app');
//const sdcVar = document.getElementById('sdc');

//ReactDOM.render(templateTwo, appRoot);

//ReactDOM.render(template, sdcVar);
