class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            options: ['Thing One', 'Thing Two', 'Thing Three']
        }
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
    }

    handleDeleteOptions() {
        this.setState(() => {
            return{
                options: []
            }
        })
    }

    handlePick() {
        const randomNumber = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNumber];
        alert(option);
    }

    handleAddOption(option) {
        if (!option) {
            return 'Please enter valid input';
        }else if (this.state.options.indexOf(option) > -1) {
            return 'This option already added';
        }
        this.setState( (prevState) => {
            return{
                options: prevState.options.concat(option)
            }
        })
    }

    render() {
        const title = 'Indecision';
        const subtitle = 'Put you life in the hands on computer';
        return(
            <div>
                <Header title={title} subtitle={subtitle} />
                <Action 
                    hasOptions={this.state.options.length > 0} 
                    handlePick = {this.handlePick}
                />
                <Options 
                    options={this.state.options} 
                    handleDeleteOptions = {this.handleDeleteOptions}
                />
                <AddOption
                    handleAddOption = {this.handleAddOption}
                />
            </div>
        );
    }
}


// Header
class Header extends React.Component{
    render() {
        return(
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        );
    }
}
// Action
class Action extends React.Component {
        render() {
        return(
            <button 
                onClick={this.props.handlePick}
                disabled={!this.props.hasOptions}
            >
                What should I do?
            </button>
        );
    }
}
// Options
class Options extends React.Component {
    render() {
        return(
            <div>
            <button onClick={this.props.handleDeleteOptions}>Remove All</button>
                {
                    this.props.options.map((option) => <Option key={option} optionText={option}/>)
                }
            </div>
        );
    }
}
//Option
class Option extends React.Component {
    render() {
        return(
            <div>
                {this.props.optionText}
            </div>
        );
    }
}
// Add option
class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);

        this.state = {
            error: undefined
        }
    }
    handleAddOption(e) {
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);
        
        this.setState( () => {
            return {
                error
            };
        })
    }
    render() {
        return(
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type='text' name='option' />
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}


ReactDOM.render(<IndecisionApp />, document.getElementById('app'));