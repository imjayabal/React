const count = 123;
class Counter extends React.Component {
    constructor(props) {
        super();
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            count: 0
        }
    }
    handleAddOne() {
        console.log('handleAddOne');
        return this.state.count++

    }
    handleMinusOne() {
        console.log('handleMinusOne');
        return this.count--
    }
    handleReset() {
        console.log('handleReset');
        return this.count = 123;
    }
    render() {
        return (
            <div>
                <h1>Counter: {this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>Reset</button>
            </div>
        )
    }
}

ReactDOM.render(<Counter />, document.getElementById('app'));

// let count = 0;
// const addOne = () =>{
//     count++
//     renderCounterApp();
//     console.log('Count add one +1', count);
// }
// const minusOne = () =>{
//     count--
//     renderCounterApp();
//     console.log('Count minus one -1', count);
// }
// const reset = () =>{
//     count = 0;
//     renderCounterApp();
//     console.log('Count reset 0', count);
// }

// const appRoot = document.getElementById('app');

// const renderCounterApp = () =>{
//     const templateTwo = (
//         <div>
//             <h1>Count: {count}</h1>
//             <button onClick={addOne}>+1</button>
//             <button onClick={minusOne}>-1</button>
//             <button onClick={reset}>Reset</button>
//         </div>
//     );
//     ReactDOM.render(templateTwo,appRoot);
// }

// renderCounterApp();