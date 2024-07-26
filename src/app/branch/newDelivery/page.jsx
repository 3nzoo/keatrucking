import Loading from '@/app/loading';
import React, { Suspense } from 'react';
import styles from './newDelivery.module.css';
import AdminPostForm from '@/components/adminPostForm/adminPostForm';
import { auth } from '@/lib/auth';
const BranchNewDelivery = async () => {
  const session = await auth();

  console.log(session);

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Suspense fallback={<Loading />}>
          <AdminPostForm branchName={session.user.username} />
        </Suspense>
      </div>
    </div>
  );
};

export default BranchNewDelivery;
