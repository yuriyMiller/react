import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);

    }

    handleSubmit(event) {
        event.preventDefault();
        //const title = this.refs.title.value;
        const title = this.state.title;
        if (title) {
            this.props.onAdd(title);
            this.setState({title: ""});
        }
    }

    handleChange(event) {
        let title = event.target.value;
        this.setState({ title })
    }

    render() {
        return (
            <form className="todo-form" onSubmit={this.handleSubmit}>
                <input type="text"
                    value={this.state.title} //ref="title"
                    placeholder="What do you need to do ?"
                    onChange={this.handleChange}
                />
                <Button type="submit">ADD</Button>
            </form>

        );
    }
}

Form.propTypes = {
    onAdd: PropTypes.func.isRequired


};
export default Form;