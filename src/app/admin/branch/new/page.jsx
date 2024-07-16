import { Suspense } from 'react';
import styles from './newBranch.module.css';
import AdminUserForm from '@/components/adminUserForm/adminUserForm';
import Loading from '@/app/loading';

const NewBranchPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Suspense fallback={<Loading />}>
          <AdminUserForm />
        </Suspense>
      </div>
    </div>
  );
};

export default NewBranchPage;
