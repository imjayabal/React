let count = 0;
const addOne = () =>{
    count++
    renderCounterApp();
    console.log('Count add one +1', count);
}
const minusOne = () =>{
    count--
    renderCounterApp();
    console.log('Count minus one -1', count);
}
const reset = () =>{
    count = 0;
    renderCounterApp();
    console.log('Count reset 0', count);
}

const appRoot = document.getElementById('app');

const renderCounterApp = () =>{
    const templateTwo = (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={addOne}>+1</button>
            <button onClick={minusOne}>-1</button>
            <button onClick={reset}>Reset</button>
        </div>
    );
    ReactDOM.render(templateTwo,appRoot);
}

renderCounterApp();