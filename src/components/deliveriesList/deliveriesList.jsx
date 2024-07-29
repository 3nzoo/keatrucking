import { getBranchPosts } from '@/lib/data';
import styles from './DeliveriesList.module.css';

import Link from 'next/link';

const DeliveriesList = async ({ posts, username }) => {
  return (
    <div className={styles.container}>
      <h1>
        Delivery List <strong> {username.toUpperCase()}</strong>
      </h1>

      <table className={styles.tableContainer}>
        <thead>
          <tr className={styles.action}>
            <th>Action</th>
            <th>Name</th>
            <th>Address</th>
            <th>Contact</th>
            <th>Status</th>
            <th>Truck Number</th>
          </tr>
        </thead>
        <tbody>
          {posts?.map((post, index) => {
            return (
              <tr key={post.id} className={index % 2 === 0 ? styles.even : ''}>
                <td>
                  <Link href={`/delivery/${post.slug}`}>View Details</Link>
                </td>
                <td>
                  <Link href={`/delivery/${post.slug}`}>{post.name}</Link>
                </td>
                <td>
                  <Link href={`/delivery/${post.slug}`}>{post.address}</Link>
                </td>
                <td>
                  <Link href={`/delivery/${post.slug}`}>{post.contact}</Link>
                </td>
                <td>
                  <Link href={`/delivery/${post.slug}`}>{post.status}</Link>
                </td>
                <td>
                  <Link href={`/delivery/${post.slug}`}>
                    {post.truck_number}
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

export default DeliveriesList;
