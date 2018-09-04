import React from 'react';
import Header from './components/Header';
import Todo from './components/Todo';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

import todos from './todos';

function App(props) {
    console.log(props);
    return (
        <main>
            <Header title={props.title} />
                
            <section className="todo-list">
                {props.todos.map(todo => <Todo key={todo.id} title={todo.title} completed={todo.completed}/>)}
            </section>
        </main>
    );
}

App.propTypes = {
    title: PropTypes.string,
    todos: PropTypes.arrayOf(PropTypes.shape({ 
                                               id: PropTypes.number.isRequired,                
                                               title: PropTypes.string.isRequired,
                                               completed: PropTypes.bool.isRequired
                                             }))
};


export default App;

ReactDOM.render(<App title="React ToDo" todos={todos}/>, document.getElementById('root'));