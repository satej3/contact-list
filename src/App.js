import React, { useState } from 'react';
import ContactList from './components/contactList';
import ContactForm from './components/contactForm';
import './App.css';
import { useDispatch } from 'react-redux';
import { addContact, updateContact } from './redux/actions/contactActions';

function App() {
  const [selectedContact, setSelectedContact] = useState(null);
  const [contacts, setContacts] = useState([]);

  const dispatch = useDispatch();

  const handleEdit = (contact) => {
    setSelectedContact(contact);
  };

  const handleSubmit = (contact, action) => {
    if (action === 'add') {
        dispatch(addContact(contact)).then((result) => {
          alert("Contact Added successfully..");
        }).catch((error) => {
          console.error("Error updating contact:", error);
          alert("Failed to Add contact. Please try again later.");
        });
      setContacts([...contacts, contact]);
    } else if (action === 'update') {
      dispatch(updateContact(contact)).then(() => {
        
        setContacts(contacts.map(c => (c.id === contact.id ? contact : c)));
        setSelectedContact(null);
        alert("Updated Successfully..");
      })
      .catch(error => {
        console.error("Error updating contact:", error);
        alert("Failed to update contact. Please try again later.");
      }); ;
      // setContacts(contacts.map(c => (c.id === contact.id ? contact : c)));
      // setSelectedContact(null);
    }
  }



  return (
    <div className="app-container">
      <div className="contact-form-container">
        <ContactForm selectedContact={selectedContact} onSubmit={handleSubmit} />
      </div>
      <div className="contact-list-container">
        <ContactList onEdit={handleEdit} />
      </div>
    </div>
  );
}

export default App;
