// // src/components/ContactCard.js

// import React from 'react';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import Typography from '@mui/material/Typography';
// import { useDispatch } from 'react-redux';
// import { updateContact, deleteContact } from '../redux/actions/contactActions';
// import '../App.css';

// const ContactCard = ({ contact }) => {
//     const dispatch = useDispatch();

//   const handleUpdate = () => {
//     // Assuming you have a way to edit the contact details and pass the updated contact object
//     const updatedContact = {
//       ...contact,
//       // Updated properties
//     };
//     dispatch(updateContact(updatedContact));
//   };

//   const handleDelete = () => {
//     dispatch(deleteContact(contact.id));
//   };

//   return (
//     <Card className='card'>
//       <CardContent>
//         <Typography variant="h5" component="div">
//           {contact.name}
//         </Typography>
//         <Typography variant="h6">
//           Email: {contact.email}
//         </Typography>
//         <Typography variant="h6">
//           Phone: {contact.phone}
//         </Typography>

//         <button className='update-btn' onClick={handleUpdate}>Update</button>
//         <button className='delete-btn' onClick={handleDelete}>Delete</button>
    
//       </CardContent>       
//     </Card>
//   );
// };

// export default ContactCard;


// src/components/ContactCard.js

import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../redux/actions/contactActions';
import '../App.css';

const ContactCard = ({ contact, onEdit }) => {
    const dispatch = useDispatch();

  const handleEdit = () => {
    onEdit(contact);
  };

  const handleDelete = () => {
    dispatch(deleteContact(contact.id)).then((result) => {
      alert("Contact Deleted successfully..")
    }).catch((error) => {
      console.error("Error Deleting Contact:", error);
      alert("Failed to Delete Contact. Please try again later.");
    });
  };

  return (
    <Card className='card'>
      <CardContent>
        <Typography variant="h5" component="div">
          {contact.name}
        </Typography>
        <Typography variant="h6">
          Email: {contact.email}
        </Typography>
        <Typography variant="h6">
          Phone: {contact.phone}
        </Typography>

        <button className='update-btn' onClick={handleEdit}>Edit</button>
        <button className='delete-btn' onClick={handleDelete}>Delete</button>
    
      </CardContent>       
    </Card>
  );
};

export default ContactCard;
