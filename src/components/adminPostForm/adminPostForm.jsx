'use client';

import { addPost } from '@/lib/action';
import styles from './adminPostForm.module.css';
import { useFormState } from 'react-dom';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const AdminPostForm = ({ branchName, gmaps }) => {
  const [state, formAction] = useFormState(addPost, undefined);
  const router = useRouter();
  const now = new Date();
  const maps = gmaps ? gmaps : 'http://maps.google.com';

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

  const handleBack = () => {
    router.back();
  };

  return (
    <form action={formAction} className={styles.container}>
      <div className={styles.header}>
        <h1>Add New Delivery</h1>
      </div>
      <input type='hidden' name='username' value={branchName} />
      <input
        type='hidden'
        name='slug'
        value={branchName + 'FC-' + formattedDateTime}
      />
      <input type='text' name='name' placeholder='Name' />
      <input type='text' name='contact' placeholder='Contact Number' />
      <input type='text' name='item_category' placeholder='Category' />
      <textarea type='text' name='address' placeholder='address' rows={10} />

      <input type='text' name='distance' placeholder='Distance from Branch' />
      <Link className={styles.maps} href={`${maps}`} target='_blank'>
        Check Distance
      </Link>

      <button className={styles.add}>Add</button>
      <button className={styles.close} onClick={handleBack}>
        Cancel
      </button>
      {state?.success && <h2>New Delivery Added</h2>}
      {state?.error}
    </form>
  );
};

export default AdminPostForm;
