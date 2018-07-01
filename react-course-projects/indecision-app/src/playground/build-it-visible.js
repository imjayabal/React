let visiblity = false;
const visiblityToggle = () => {
    visiblity = !visiblity;
    render();
};
const render = () => {
    const jsx = (
        <div>
            <h1>Visiblity toggle</h1>
            <button onClick={visiblityToggle}>
                {visiblity ? 'Hide details' : 'Show details'}
            </button>
            {
                visiblity &&
                <div>
                    <p>Hey. Here are the some details for you</p>
                </div>
            }
        </div>
    );

    ReactDOM.render(jsx, document.getElementById('app'));
}
render();