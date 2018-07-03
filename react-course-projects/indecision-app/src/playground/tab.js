// import classNames from 'classnames';

const defaultClass = 'mopro-tab';

class MoproTab extends React.Component {
    render() {
        return(
            console.log('Mopro Tab'),
            <Tabs>
                <TabList>
                    <Tab>One </Tab>
                    <Tab>Two </Tab>
                    <Tab>Three </Tab>
                </TabList>
                <TabPanel>
                    <h2>Result One</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Result One</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Result One</h2>
                </TabPanel>
            </Tabs>
        )
    }
}

class Tabs extends React.Component {
    render() {
        return (
            console.log('Tabs'),
            <div className={defaultClass} >
                {this.props.children}
            </div>
        )
    }
}

class TabList extends React.Component {
    render() {
        return(
            console.log('Tab nav'),
            <ul className={`${defaultClass}__nav`} role='tabnav'>
                {this.props.children}
            </ul>
        )
    }
}

class Tab extends React.Component {
    constructor(props) {
        super();
        this.clickFunction = this.clickFunction.bind(this);
        this.state = {
            defaultClass:`${defaultClass}__list`,
            activeClass: `${defaultClass}--active`,
            selected: true
        }
    }

    clickFunction() {
        const children = this.props.children;
        console.log(children, this.state.defaultClass +' '+ this.state.activeClass);
        this.setState((changeClass) =>{
            if(changeClass){
                return {
                    defaultClass: changeClass.defaultClass + ' ' + changeClass.activeClass
                }
            }else{
                return {
                    defaultClass: changeClass.defaultClass
                }
            }
            
        }) 
    }
    render() {
        return(
            console.log('Tab List'),
            <li 
            className={this.state.defaultClass} 
            role='tablist'
            onClick = {this.clickFunction}
            >
                {this.props.children}
            </li>
        )
    }
}

class TabPanel extends React.Component {
    render() {
        return(
            console.log('Tab panel'),
            <div className={`${defaultClass}__panel`} role='tabpanel'>
                {this.props.children}
            </div>
        )
    }
}

ReactDOM.render(<MoproTab />, document.getElementById('app'));

