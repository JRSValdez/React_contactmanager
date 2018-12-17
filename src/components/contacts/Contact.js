import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Consumer } from '../../Context';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

class Contact extends Component {
    state = {
        showContactInfo: false
    };
    onShowContact = e => {
        this.setState({ showContactInfo: !this.state.showContactInfo });
    };
    onDeleteContact = async (id, dispatch) => {
        try {
            await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
            dispatch({ type: 'DELETE_CONTACT', payload: id });
        } catch (e) {
            dispatch({ type: 'DELETE_CONTACT', payload: id });
        }

    };
    render() {
        //to avoid putting this.props.
        const { id, name, email, phone } = this.props.contact;
        const { showContactInfo } = this.state;

        return (
            <Consumer>
                {value => {
                    const { dispatch } = value;
                    return (
                        <div className="card card-body mb-3">
                            <div className="row">
                                <div className="col-10">
                                    <h4 onClick={this.onShowContact}
                                        style={{ cursor: 'pointer' }}>
                                        {name}
                                        <i className="fas fa-sort-down" />
                                    </h4>
                                </div>
                                <div className="col-1 mr-auto">
                                    <NavLink exact to={`contact/edit/${id}`}>
                                        <i className="fas fa-pencil-alt"
                                            style={{ cursor: 'pointer', color: 'black' }}
                                        />
                                    </NavLink>
                                </div>
                                <div className="col-1 mr-auto"
                                    onClick={this.onDeleteContact.bind(this, id, dispatch)}>
                                    <i className="fas fa-times"
                                        style={{ cursor: 'pointer', color: 'red' }} />
                                </div>
                            </div>
                            {showContactInfo ? (
                                <ul className="list-group">
                                    <li className="list-group-item">Email: {email}</li>
                                    <li className="list-group-item">Phone: {phone}</li>
                                </ul>
                            ) : null}

                        </div >
                    )
                }}
            </Consumer>

        );
    }
}

Contact.propTypes = {
    contact: PropTypes.object.isRequired
}

export default Contact;