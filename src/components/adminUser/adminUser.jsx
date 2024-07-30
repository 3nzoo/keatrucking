import { getUserBySlug } from '@/lib/data';
import styles from './adminUsers.module.css';
import Link from 'next/link';

// ! convert into table with click open page[slug] button

const AdminUser = async (user) => {
  return (
    <div className={styles.container}>
      <h1> Branch Details</h1>

      <table className={styles.tableContainer}>
        <thead>
          <tr>
            <th>USERNAME</th>
            <th>NAME</th>
            <th>CITY</th>
            <th>CONTACT</th>
            <th>COMPANY</th>
            <th>COORDINATES</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{user.username.username}</td>
            <td>{user.username.name?.toUpperCase()}</td>
            <td>{user.username.city}</td>
            <td>{user.username.contact}</td>
            <td>{user.username.incorporate}</td>
            <td>
              {user.username.gmaps ? (
                <Link
                  className={styles.LinkBtn}
                  href={`${user.username.gmaps}`}
                  target='_blank'
                >
                  Check Map
                </Link>
              ) : (
                <p>-</p>
              )}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default AdminUser;
