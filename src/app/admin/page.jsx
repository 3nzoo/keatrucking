import { Suspense } from 'react';
import styles from './admin.module.css';
import AdminPosts from '@/components/adminPosts/adminPosts';
import AdminPostForm from '@/components/adminPostForm/adminPostForm';
import AdminUsers from '@/components/adminUsers/adminUsers';
import AdminUserForm from '@/components/adminUserForm/adminUserForm';
import { auth } from '@/lib/auth';
import Loading from '../loading';
import Link from 'next/link';

const AdminPage = async () => {
  const session = await auth();

  return (
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

      <div className={styles.row}>
        <div className={styles.colHeader}>
          <Link href={'/admin/branch/new'}>Add Branch</Link>
        </div>
        {/* <Link href={'/admin/branch/new'}>add Branch</Link> */}
        <div className={styles.col}>
          {/* <Link href={'/admin/branch/new'}>add Branch</Link> */}
          <Suspense fallback={<Loading />}>
            <AdminUsers />
          </Suspense>
        </div>
        {/* <div className={styles.col}>
          <AdminUserForm />
        </div> */}
      </div>
    </div>
  );
};

export default AdminPage;
