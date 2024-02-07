import React from 'react';
import './Contact.scss';

const Contact = () => {
  return (
    <div className='contact'>
      <form action="">
        <h1>Contact Me</h1>
        <input type="text" placeholder='Enter Your Name' /><br/>
        <input type="text" placeholder='Enter Your Email' /><br/>
        <textarea type="text" placeholder='Enter your Message' /><br/>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default Contact;
