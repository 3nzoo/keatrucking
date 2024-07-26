'use client';
import Image from 'next/image';
import styles from './contact.module.css';
import { useState } from 'react';
const ContactPage = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const [formstate, setFormstate] = useState('');

  const sendMail = async (e) => {
    e.preventDefault();
    const response = await fetch('/api/sendEmail', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        message,
      }),
    });
    const result = await response.json();
    // console.log(await response.json());
    if (result.success) {
      setFormstate('success');
    } else {
      setFormstate('fail');
    }
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src='/contact.png' alt='' fill className={styles.img} />
      </div>
      <div className={styles.formContainer}>
        {/* <HydrationTestNoSSR/> */}
        {/* <div suppressHydrationWarning>{a}</div> */}
        <form onSubmit={sendMail} className={styles.form}>
          <input
            type='text'
            name='name'
            placeholder='Name and Surname'
            value={name}
            required
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <input
            type='text'
            name='email'
            required
            placeholder='Email Address'
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <textarea
            name='message'
            id=''
            cols='30'
            rows='10'
            required
            placeholder='Message'
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
          ></textarea>
          <button type='submit'>Send</button>
          {formstate == 'fail' && (
            <h2> Failed to Send Email, please Try again </h2>
          )}
          {formstate == 'success' && <h2> Email Sent Successfully </h2>}
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
