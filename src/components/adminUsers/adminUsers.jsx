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
          <tr>
            <th>username</th>
            <th>name</th>
            <th>City</th>
            <th>Contact</th>
            <th>Company</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users?.map((user) => {
            // const curDate = new Date(user.createdAt);
            return (
              <tr key={user.id}>
                <td>{user.username}</td>
                <td>{user.name}</td>
                <td>{user.city}</td>
                <td>{user.contact}</td>
                <td>{user.incorporate}</td>
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
