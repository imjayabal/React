class VisiblityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visiblity: false
        }
        this.handleToggleVisiblity = this.handleToggleVisiblity.bind(this);
    }

    handleToggleVisiblity() {
        this.setState( (toggleVisible) => {
            return {
                visiblity: !toggleVisible.visiblity
            }
        })
        
    }
    
    render() {
        return (
            <div>
                <h1>Visiblity toggle</h1>
                <button onClick={this.handleToggleVisiblity}>
                    {this.state.visiblity? 'Hide Text' : 'Visible Text'}
                </button>
                {this.state.visiblity && <p>content content content content content</p>}
            </div>
        )
    }
}

ReactDOM.render (<VisiblityToggle />, document.getElementById('app'));
