

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchContacts } from '../redux/actions/contactActions';
import ContactCard from './contactCard';

const ContactList = ({ onEdit }) => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.contacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h2 style={{textAlign: 'center', color: 'white'}}  >Contact List</h2>
      <div className="card-container">
        {contacts.map(contact => (
          <ContactCard key={contact.id} contact={contact} onEdit={onEdit} />
        ))}
      </div>
    </div>
  );
};

export default ContactList;
