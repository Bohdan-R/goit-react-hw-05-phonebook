import shortid from 'shortid';
import { createAction } from '@reduxjs/toolkit';
import types from './contacts-type';

const addContact = createAction('contacts/aad', (name, number) => ({
  payload: {
    id: shortid.generate(),
    name,
    number,
  },
}));

const deleteContact = createAction('contacts/delete');

const changeFilter = createAction('contacts/changeFilter');

export default { addContact, deleteContact, changeFilter };
