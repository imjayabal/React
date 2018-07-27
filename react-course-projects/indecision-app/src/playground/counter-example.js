class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            count: props.count
        }
    }
    handleAddOne() {
        console.log('handleAddOne');
        this.setState( (addCount) => {
            return {
                count: addCount.count + 1
            }
        });

    }
    handleMinusOne() {
        console.log('handleMinusOne');
        this.setState((lessCount) => {
            return {
                count: lessCount.count - 1
            }
        });
    }
    handleReset() {
        console.log('handleReset');
        this.setState({
            count: 0
        });
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

Counter.defaultProps = {
    count:0
}

ReactDOM.render(<Counter />, document.getElementById('app'));