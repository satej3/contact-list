// // src/components/ContactForm.js

// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { addContact } from '../redux/actions/contactActions';
// import '../App.css';

// const ContactForm = () => {
//   const dispatch = useDispatch();
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [phone, setPhone] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const newContact = {
//       name,
//       email,
//       phone
//     };
//     dispatch(addContact(newContact));
//     setName('');
//     setEmail('');
//     setPhone('');
//   };

//   return (
//     <div>
//       <h2 style={{textAlign: 'center', color: 'white'}} >Add Contact</h2>
//       <form className='form' onSubmit={handleSubmit}>
//         <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} /> <br/>
//         <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} /> <br/>
//         <input type="text" placeholder="Phone No" value={phone} onChange={(e) => setPhone(e.target.value)} /> <br/>
//         <button type="submit">Add</button> <br/>
//       </form>
//     </div>
//   );
// };

// export default ContactForm;


// src/components/ContactForm.js

import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addContact, updateContact } from '../redux/actions/contactActions';
import '../App.css';

const ContactForm = ({ selectedContact, onSubmit }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  useEffect(() => {
    if (selectedContact) {
      setName(selectedContact.name || '');
      setEmail(selectedContact.email || '');
      setPhone(selectedContact.phone || '');
    }
  }, [selectedContact]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newContact = {
      name,
      email,
      phone
    };

    if (selectedContact) {
      newContact.id = selectedContact.id;
      onSubmit(newContact, 'update');
    } else {
      onSubmit(newContact, 'add');
    }

    setName('');
    setEmail('');
    setPhone('');
  };

  return (
    <div>
      <h2 style={{textAlign: 'center', color: 'white'}} >{selectedContact ? 'Update Contact' : 'Add Contact'}</h2>
      <form className='form' onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} /> <br/>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} /> <br/>
        <input type="text" placeholder="Phone No" value={phone} onChange={(e) => setPhone(e.target.value)} /> <br/>
        <button type="submit">{selectedContact ? 'Update' : 'Add'}</button> <br/>
      </form>
    </div>
  );
};

export default ContactForm;
