import { Suspense } from 'react';
import styles from './admin.module.css';
import AdminPosts from '@/components/adminPosts/adminPosts';
import AdminPostForm from '@/components/adminPostForm/adminPostForm';
import { auth } from '@/lib/auth';
import Loading from '../loading';
import BranchPosts from '@/components/branchPosts/branchPosts';
import Link from 'next/link';

const BranchPage = async () => {
  const session = await auth();

  return (
    <div className={styles.container}>
      <div className={styles.containerHead}>
        <h2>
          Hi <strong>{session?.user?.username?.toUpperCase()}</strong>
        </h2>
        <Link href={'/branch/newDelivery'}>New Delivery</Link>
      </div>
      <div className={styles.row}>
        <div className={styles.col}>
          <Suspense fallback={<Loading />}>
            <BranchPosts branchId={session?.user?.username} />
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default BranchPage;
