'use client';

import { addUser } from '@/lib/action';
import styles from './adminUserForm.module.css';
import { useFormState } from 'react-dom';
import { useRouter } from 'next/navigation';

const AdminUserForm = () => {
  const [state, formAction] = useFormState(addUser, undefined);
  const router = useRouter();

  if (state?.success) {
    setTimeout(() => {
      router.replace('/');
    }, 1500);
  }

  const handleBack = () => {
    router.back();
  };

  return (
    <form action={formAction} className={styles.container}>
      <div className={styles.header}>
        <button className={styles.back} onClick={handleBack}>
          BACK
        </button>
      </div>
      <h1>Add New Branch</h1>
      <input type='text' name='username' placeholder='Username' />
      <input type='text' name='name' placeholder='Contact Person' />
      <input type='password' name='password' placeholder='Password' />
      <input type='text' name='city' placeholder='City' />
      <input type='text' name='contact' placeholder='Contact Number' />
      <input type='text' name='incorporate' placeholder='Incorporate Company' />
      {/* <input type='text' name='img' placeholder='img' /> */}
      {/* <select name='isAdmin'>
        <option value='false'>Is Admin?</option>
        <option value='false'>No</option>
        <option value='true'>Yes</option>
      </select> */}
      <button className={styles.add}>Add Branch </button>
      <button className={styles.close} onClick={handleBack}>
        Cancel
      </button>
      {state?.success && <h2>Branch Added</h2>}
      {state?.error}
    </form>
  );
};

export default AdminUserForm;
