import React from 'react';
import { connect } from 'react-redux';
import contactsAction from '../../redux/contacts/contacts-actions';
import PropTypes from 'prop-types';
import './ContactList.scss';

const ContactList = ({ contacts, deleteContact }) => (
  <div className="contact">
    <ul className="contact__list">
      {contacts.map(({ id, name, number }) => (
        <li key={id} className="contact__item">
          {name}&nbsp;{number}
          <button
            type="button"
            className="contact__btn"
            onClick={() => deleteContact(id)}
          >
            Удалить
          </button>
        </li>
      ))}
    </ul>
  </div>
);

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  deleteContact: PropTypes.func.isRequired,
};

const showFilteredContacts = (contacts, filter) => {
  const normalizedFilter = filter.toLowerCase();

  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter),
  );
};

const mapStateToProps = ({ contacts: { items, filter } }) => ({
  contacts: showFilteredContacts(items, filter),
});

const mapDispatchToProps = dispatch => ({
  deleteContact: id => dispatch(contactsAction.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
