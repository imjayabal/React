class IndecisionApp extends React.Component {
    render() {
        const title = 'Indecision';
        const subtitle = 'Put you life in the hands on computer';
        const options = ['Thing One', 'Thing Two', 'Thing Three'];
        return(
            <div>
                <Header title={title} subtitle={subtitle} />
                <Action />
                <Options options={options} />
                <AddOption />
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
    handlePick() {
        alert('Hanle Pick')
    }
    render() {
        return(
            <button onClick={this.handlePick}>What should I do?</button>
        );
    }
}
// Options
class Options extends React.Component {
    handleRemoveAll() {
        alert('Handle remove all')
    }
    render() {
        return(
            <div>
            <button onClick={this.handleRemoveAll}>Remove All</button>
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
    handleAddOption(e) {
        e.preventDefault();
        console.log('clicked');
    }
    render() {
        return(
            <div>
                <form onSubmit={this.handleAddOption}>
                    <input type='text' />
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}


ReactDOM.render(<IndecisionApp />, document.getElementById('app'));