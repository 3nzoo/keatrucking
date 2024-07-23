import { getBranchPosts } from '@/lib/data';
import styles from './DeliveriesList.module.css';

import Link from 'next/link';

const DeliveriesList = async ({ posts, username }) => {
  return (
    <div className={styles.container}>
      <h1>
        Deliveries List <strong> {username.toUpperCase()}</strong>
      </h1>

      <table className={styles.tableContainer}>
        <thead>
          <tr>
            <th>Action</th>
            <th>Name</th>
            <th>Address</th>
            <th>Contact</th>
            <th>Status</th>
            <th>Truck Number</th>
          </tr>
        </thead>
        <tbody>
          {posts?.map((post) => {
            return (
              <tr key={post.id}>
                <td>
                  <Link href={`/delivery/${post.slug}`}>View Details</Link>
                </td>
                <td>{post.name}</td>
                <td>{post.address}</td>
                <td>{post.contact}</td>
                <td>{post.status}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default DeliveriesList;
