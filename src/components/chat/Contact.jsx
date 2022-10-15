import React from 'react';

const Contact = ({ data, onChangeSelectContact, isSelected }) => {
  return (
    <div
      className={`contact ${isSelected && 'selected'}`}
      onClick={() => onChangeSelectContact(data._id)}
    >
      <div className='contact_logo'></div>
      <div className='contact_user'>
        <h4>{data.nickname || 'User'}</h4>
        {/* <p>New message</p> */}
      </div>
    </div>
  );
};

export default Contact;
