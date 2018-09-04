import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import App from './App';

App.propTypes = {
    title: PropTypes.string
};

App.defaultProps = {
    title: 'React ToDo'
};

const Person = (props) => <div> 
  <h1>{props.firstName} {props.lastName}</h1>
  {props.country ? <p>Country: {props.country}</p> : null}
</div>;

Person.propTypes = {
  firstName:PropTypes.string,
  lastName:PropTypes.string,
  country:PropTypes.string
};

//ReactDOM.render(<Person firstName="Tetaaa" lastName="Pepa" country="Uk"/>, document.getElementById('root'));//<App title={3}/>
//ReactDOM.render(<App />, document.getElementById('root'));//