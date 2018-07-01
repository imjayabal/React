console.log('Data coming from console');

// JSX - Javascript XML

const app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options: []
}
const onFormSubmit = (e) => {
    e.preventDefault();    
    const option = e.target.elements.option.value;
    if(option) {
        app.options.push(option);
        e.target.elements.option.value = '';
    }
    render();
    console.log(option);
}
const onRemoveAll = ()=> {
    app.options = [];
    render();
    console.log('Options reset');
}
const onMakeDecision = () => {
    const randomNumber = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNumber];
    console.log(option);
    alert(option);
}


const appRoot = document.getElementById('app');

const render = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p> }
            
            <p>{app.options.length > 0 ? "Here are your options" : "No options"}</p>
            <p>{app.options.length}</p>
            <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I select?</button>
            <button onClick={onRemoveAll}>Remove all</button>
            
            <ol>
                {
                    app.options.map((option) => 
                        <li key={option}>{option}</li>
                    )
                }
            </ol>
            
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option" />
                <button>Add an option</button>           
            </form>
        </div>
    );
    ReactDOM.render(template, appRoot);
}

render();



