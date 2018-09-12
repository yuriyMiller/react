import React from 'react';
import Header from './components/Header';
import Todo from './components/Todo';
import Form from './components/Form';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

import todos from './todos';

/*function App(props) {
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
};*/

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: this.props.initialData
        };
        this._nextId;
        this.handleStatusChange = this.handleStatusChange.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        //this.nextID = this.nextID.bind(this);
    }

    nextId() {
        this._nextId = this._nextId || 4;
        return this._nextId++;

    }

    handleStatusChange(id) {
        console.log("handleStatusChange  ", id);
        let todos = this.state.todos.map((todo) => {
            if (id === todo.id) { todo.completed = !todo.completed; }
            return todo;
        });

        this.setState({ todos: todos });
    }

    handleAdd(title) {
        console.log(title);
        const todo = {
            id: this.nextId(),
            title,
            completed: false
        }
        let todos = [...this.state.todos, todo];
        this.setState({ todos });

    }

    handleDelete(id) {
        console.log("handleDelete  ", id);
        let todos = this.state.todos.filter(todo => todo.id !== id);
        this.setState({ todos });
    }

    handleEdit(id, title) {
        let todos = this.state.todos.map(todo => {
            if (todo.id === id) {
                todo.title = title;
            }
            return todo;
        });
        
        this.setState({ todos });
    }

    render() {
        return (
            <main>
                <Header title={this.props.title} todos={this.state.todos} />
                <section className="todo-list">
                    {this.state.todos.map(todo => <Todo
                        key={todo.id}
                        id={todo.id}
                        title={todo.title}
                        completed={todo.completed}
                        onStatusChange={this.handleStatusChange}
                        onDelete={this.handleDelete}
                        onEdit={this.handleEdit}
                    />)
                    }
                </section>
                <Form onAdd={this.handleAdd} />
            </main>
        );
    }
}

App.propTypes = {
    title: PropTypes.string,
    initialData: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        completed: PropTypes.bool.isRequired
    }))
};

export default App;

ReactDOM.render(<App title="React ToDo" initialData={todos} />, document.getElementById('root'));