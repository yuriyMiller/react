import React from 'react';
import PropTypes from 'prop-types';


function Stats(props) {
    const total = props.todos.length;
    const completed = props.todos.filter(todo => todo.completed).length;
    const notCompleted = total - completed;

    return (
        <table>
            <tbody>
                <tr>
                    <th>Total:</th>
                    <td>{total}</td>
                </tr>
                <tr>
                    <th>Completed:</th>
                    <td>{completed}</td>
                </tr>
                <tr>
                    <th>NotCompleted:</th>
                    <td>{notCompleted}</td>
                </tr>
            </tbody>
        </table>
    );
}

Stats.propTypes = {
    todos: PropTypes.array
}

export default Stats;