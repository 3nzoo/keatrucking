'use client';

import { addPost } from '@/lib/action';
import styles from './adminPostForm.module.css';
import { useFormState } from 'react-dom';
import { useRouter } from 'next/navigation';

const AdminPostForm = ({ branchName }) => {
  const [state, formAction] = useFormState(addPost, undefined);
  const router = useRouter();
  const now = new Date();

  console.log(222222, branchName);

  // Extract and format each part of the date and time
  const year = String(now.getFullYear()).slice(2); // Last two digits of the year
  const month = String(now.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed
  const day = String(now.getDate()).padStart(2, '0');
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  // Combine all parts into a single string
  const formattedDateTime = `${day}${month}${year}${hours}${minutes}${seconds}`;

  if (state?.success) {
    setTimeout(() => {
      router.replace('/branch'); // Redirect to the home page or any other route
      // router.push('/');
    }, 1500);
  }

  return (
    <form action={formAction} className={styles.container}>
      <h1>Add New Delivery</h1>
      <input type='hidden' name='username' value={branchName} />
      <input
        type='hidden'
        name='slug'
        value={branchName + 'FC-' + formattedDateTime}
      />
      <input type='text' name='name' placeholder='Name' />
      <textarea type='text' name='address' placeholder='address' rows={10} />
      <input type='text' name='contact' placeholder='Contact Number' />
      <input type='text' name='item_category' placeholder='Category' />
      <button>Add</button>
      {state?.success && <h2>New Delivery Added</h2>}
      {state?.error}
    </form>
  );
};

export default AdminPostForm;
