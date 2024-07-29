import { getPosts } from '@/lib/data';
import styles from './adminPosts.module.css';
import Image from 'next/image';
import { deletePost } from '@/lib/action';
import Link from 'next/link';

const AdminPosts = async () => {
  const posts = await getPosts();

  return (
    <div className={styles.container}>
      <h1>Deliveries</h1>

      <table className={styles.tableContainer}>
        <thead>
          <tr className={styles.action}>
            <th>Name</th>
            <th>Address</th>
            <th>Contact Number</th>
            <th>Status</th>
            <th>Truck No.</th>
            <th>Distance</th>
            <th>Branch</th>
          </tr>
        </thead>
        <tbody>
          {posts?.map((post, index) => {
            return (
              <tr key={post.id} className={index % 2 === 0 ? styles.even : ''}>
                <td>
                  <Link
                    className={styles.LinkBtn}
                    href={`/delivery/${post.slug}`}
                  >
                    {post.name}
                  </Link>
                </td>
                <td>
                  <Link
                    className={styles.LinkBtn}
                    href={`/delivery/${post.slug}`}
                  >
                    {post.address}
                  </Link>
                </td>
                <td>
                  <Link
                    className={styles.LinkBtn}
                    href={`/delivery/${post.slug}`}
                  >
                    {post.contact}
                  </Link>
                </td>
                <td>
                  <Link
                    className={styles.LinkBtn}
                    href={`/delivery/${post.slug}`}
                  >
                    {post.status}{' '}
                  </Link>
                </td>
                <td>
                  <Link
                    className={styles.LinkBtn}
                    href={`/delivery/${post.slug}`}
                  >
                    {post.truck_number}
                  </Link>
                </td>
                <td>
                  <Link
                    className={styles.LinkBtn}
                    href={`/delivery/${post.slug}`}
                  >
                    {post.distance}{' '}
                  </Link>
                </td>
                <td>
                  <Link
                    className={styles.LinkBtn}
                    href={`/delivery/${post.slug}`}
                  >
                    {post.username}
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

export default AdminPosts;
