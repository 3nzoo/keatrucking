import { Suspense } from 'react';
import Loading from '../loading';
import AdminPosts from '@/components/adminPosts/adminPosts';
import styles from './deliveries.module.css';
import { auth } from '@/lib/auth';

const DeliveriesList = async () => {
  const session = await auth();
  return (
    <div>
      <div className={styles.container}>
        <h2>
          Hi <strong>{session?.user?.username?.toUpperCase()}</strong>
        </h2>
        <div className={styles.row}>
          <div className={styles.col}>
            <Suspense fallback={<Loading />}>
              <AdminPosts />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeliveriesList;
