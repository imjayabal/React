class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            options: props.options
        }
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
    }

    componentDidMount() {
       try{
            const json = localStorage.getItem('options');
            const parseOptions = JSON.parse(json);

            if (parseOptions) {
                this.setState( () => ({ options: parseOptions }));
            }
       } catch (e) {
           //Do nothing at all 
       }
    }

    componentDidUpdate(prevState) {
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
        // console.log('saving data!');
    }
    
    componentWillUnmount() {
        console.log('cmponentWillUnmount!');
    }

    handleDeleteOptions() {
        this.setState( () => ( { options: [] } ))
        localStorage.clear();
    }
    handleDeleteOption(optionRemove) {
        this.setState( (prevState) => ({
            options: prevState.options.filter( (remove) => optionRemove !== remove )
        }));
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
        this.setState( (prevState) => ( {options: prevState.options.concat(option)} ));
    }

    render() {
        const subtitle = 'Put you life in the hands on computer';
        return(
            <div>
                <Header subtitle={subtitle} />
                <Action 
                    hasOptions={this.state.options.length > 1} 
                    handlePick = {this.handlePick}
                />
                <Options 
                    options={this.state.options} 
                    handleDeleteOptions = {this.handleDeleteOptions}
                    handleDeleteOption = {this.handleDeleteOption}
                />
                <AddOption
                    handleAddOption = {this.handleAddOption}
                />
            </div>
        );
    }
}
// how to pass default value if will not provide any value from props



// Header
const Header = (props) => {
    return(
        <div>
            <h1>{props.title}</h1>
            { props.subtitle && <h2>{props.subtitle}</h2> }
        </div>
    );
}

Header.defaultProps = {
    title:'Indecision'
}

// Action
const Action = (props) => {
    return(
        <div>
            <button 
                onClick={props.handlePick}
                disabled={!props.hasOptions}
            >
                What should I do?
            </button>
        </div>
    );
};

// Options
const Options = (props) => {
    return(
        <div>
        <button onClick={props.handleDeleteOptions}>Remove All</button>
            {props.options.length === 0 && <p>Please enter some input and get started!</p> }
            {
                props.options.map((option) => (
                    <Option 
                        key={option} 
                        optionText={option}
                        handleDeleteOption = {props.handleDeleteOption}
                    />
                ))
            }
        </div>
    );
}

//Option
const Option = (props) => {
    return(
        <div>
            {props.optionText}
            <button 
                onClick={ () => props.handleDeleteOption(props.optionText)}
            >
                Remove
            </button>
        </div>
    );
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
        
        this.setState(()=>( { error } ))

        if (!error) {
            e.target.elements.option.value = '';
        }
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

ReactDOM.render(<IndecisionApp options={[]} />, document.getElementById('app'));