import React from 'react';
import PropTypes from 'prop-types';

// function Checkbox(props) {
//     return (
//         <button className="checkbox icon">
//             <i className="material-icons">{props.checked ? 'check_box' : 'check_box_outline_blank'}</i>
//         </button>
//     );
// }

/*class Checkbox extends React.Component {
    constructor (props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            checked: props.initChecked
        };
    }

    handleClick(event) {
        console.log("Handle:: ", event);
        //this.state.checked = !this.state.checked;
        this.setState({
            checked: !this.state.checked
        }, () => {});
    }

    render() {
        return (
   //         <button className="checkbox icon" onClick={this.handleClick /*or you can use arrow function*/ //}> 
//             <i className="material-icons">{this.state.checked ? 'check_box' : 'check_box_outline_blank'}</i>
//         </button>
//     )
// };
// }

// Checkbox.propTypes = {
//     initChecked: PropTypes.bool.isRequired
// }

function Checkbox(props) {
    return (
        <button className="checkbox icon" onClick={props.onChange}/*onClick={this.handleClick} or you can use arrow function*/>
            <i className="material-icons">{props.checked ? 'check_box' : 'check_box_outline_blank'}</i>
        </button>
    );
}

Checkbox.propTypes = {
    checked: PropTypes.bool.isRequired,
    onChange: PropTypes.func.isRequired
}

export default Checkbox;