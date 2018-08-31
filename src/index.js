import React from 'react';
import ReactDOM from 'react-dom';


const title = React.createElement('h1', null, 'React ToDo'); 
const subtile = React.createElement('p', {className: 'subTitle'}, 'React First App'); 
const container = React.createElement('div', null, title, subtile);

const app = (<div>
                <h1>React  !!!!</h1>
                <p className='subtitle'>React First App</p>
            </div>)

function App() {
    return (<div>
                <h1>React  !!!!</h1>
                <p className='subtitle'>React First App</p>
            </div>)
}

//ReactDOM.render(app, document.getElementById('root'));
ReactDOM.render(<App />, document.getElementById('root'));

