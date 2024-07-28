import React, { useState } from 'react'
import './Contact.css'

function Contact() {
    const[name, setName] = useState('');

    const handleChange = (event) =>
    {
    setName(event.target.value);
    }
  return (
    <div className='container'>
      <div className='head'>
        <h1>Let's Work Together</h1>
      </div>
      <div className='detailsWrapper'>
        <div className='hotline'>
          <p className='para'>Hotline:</p>
        </div>
        <div className='address'>
          <p className='para'>Address:</p>
        </div>
        <div className='mail'>
          <p className='para'>Mail:</p>
        </div>
        <div className='openinghours'>
          <p className='para'>Opening Hours:</p>
        </div>
        <div className='followus'>
          <p className='para'>Follow Us:</p>
        </div>
        <div className='location'>

        </div>
      </div>
      <div className='connect'>
        <div className='form1'>
          <p className='para1'>Contact Form</p>
          <p className='para2'>Fill this out so we learnt more about <br/>you and your needs</p>
          <form>
            <input type='text' value={name} onChange={handleChange} placeholder='First and Second name' className='input' />
            <input type='email' placeholder='Email address' className='input' />
            <input type='text' placeholder='Phone Number' className='input' />
            <input type='text' placeholder='Message' className='input' />
            <input type='text' placeholder='' className='input' />
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact