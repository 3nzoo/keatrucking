import { getUsers } from '@/lib/data';
import styles from './adminUsers.module.css';
import Image from 'next/image';
import { deleteUser } from '@/lib/action';
import Link from 'next/link';

// ! convert into table with click open page[slug] button

const AdminUsers = async () => {
  const users = await getUsers();

  return (
    <div className={styles.container}>
      <h1>Branches</h1>

      <table className={styles.tableContainer}>
        <thead>
          <tr className={styles.action}>
            <th>username</th>
            <th>name</th>
            <th>City</th>
            <th>Contact</th>
            <th>Company</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users?.map((user, index) => {
            // const curDate = new Date(user.createdAt);
            return (
              <tr key={user.id} className={index % 2 === 0 ? styles.even : ''}>
                <td>
                  <Link
                    className={styles.LinkBtn}
                    href={`/admin/branch/${user.username}`}
                  >
                    {user.username}
                  </Link>
                </td>
                <td>
                  <Link
                    className={styles.LinkBtn}
                    href={`/admin/branch/${user.username}`}
                  >
                    {user.name}
                  </Link>
                </td>
                <td>
                  <Link
                    className={styles.LinkBtn}
                    href={`/admin/branch/${user.username}`}
                  >
                    {user.city}{' '}
                  </Link>
                </td>
                <td>
                  <Link
                    className={styles.LinkBtn}
                    href={`/admin/branch/${user.username}`}
                  >
                    {user.contact}{' '}
                  </Link>
                </td>
                <td>
                  <Link
                    className={styles.LinkBtn}
                    href={`/admin/branch/${user.username}`}
                  >
                    {user.incorporate}{' '}
                  </Link>
                </td>
                <td>
                  <Link
                    className={styles.LinkBtn}
                    href={`/admin/branch/${user.username}`}
                  >
                    View Branch
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default AdminUsers;
