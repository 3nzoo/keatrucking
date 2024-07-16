'use client';

import { addPost } from '@/lib/action';
import styles from './adminPostForm.module.css';
import { useFormState } from 'react-dom';

// ?truck number, userId, item_category, name ,address
// ? contact_number, status, lastUpdate, image_link

//! add username
const AdminPostForm = ({ userId, branchName }) => {
  const [state, formAction] = useFormState(addPost, undefined);

  const now = new Date();

  // Extract and format each part of the date and time
  const year = String(now.getFullYear()).slice(2); // Last two digits of the year
  const month = String(now.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed
  const day = String(now.getDate()).padStart(2, '0');
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');

  // Combine all parts into a single string
  const formattedDateTime = `${day}${month}${year}${hours}${minutes}${seconds}`;

  return (
    <form action={formAction} className={styles.container}>
      <h1>Add New Delivery</h1>
      <input type='hidden' name='userId' value={userId} />
      <input type='hidden' name='slug' value={branchName + formattedDateTime} />
      <input type='text' name='name' placeholder='Name' />
      <textarea type='text' name='address' placeholder='address' rows={10} />
      <input type='text' name='contact' placeholder='Contact' />
      <input type='text' name='item_category' placeholder='Category' />
      <button>Add</button>
      {state?.error}
    </form>
  );
};

export default AdminPostForm;
