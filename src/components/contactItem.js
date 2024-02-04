// src/components/ContactItem.js

import React from 'react';
import ContactCard from './contactCard';


const ContactItem = ({ contact }) => {
  return (
    // <div>
    //   <p>{contact.name}</p>
    //   <p>{contact.email}</p>
    //   <button onClick={handleUpdate}>Update</button>
    //   <button onClick={handleDelete}>Delete</button>
    // </div>
    // <div >
      <ContactCard contact={contact}></ContactCard>
    // </div>
  );
};

export default ContactItem;
