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
            <th>Action</th>
            <th>Company</th>
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
                <td>
                  <Link
                    className={styles.LinkBtn}
                    href={`/branch/${user.username}`}
                  >
                    View Branch
                  </Link>
                </td>
                <td>{user.incorporate}</td>
              </tr>
            );
          })}
        </tbody>
      </table>

      {/* {users.map((user) => (
        <div
          className={styles.user}
          onClick={handleRowClick(user.id)}
          key={user.id}
        >
          <div className={styles.detail}>
            <span>{user.username}</span>
            <span>{user.username}</span>
            <span>{user.username}</span>
          </div>
          <form action={deleteUser}>
            <input type='hidden' name='id' value={user.id} />
            <button className={styles.userButton}>Delete</button>
          </form>
        </div>
      ))} */}
    </div>
  );
};

export default AdminUsers;
