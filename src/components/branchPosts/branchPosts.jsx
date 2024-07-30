import { getBranchPosts } from '@/lib/data';
import styles from './branchPosts.module.css';

import { deletePost } from '@/lib/action';
import Link from 'next/link';

const BranchPosts = async ({ branchId }) => {
  const posts = await getBranchPosts(branchId);
  return (
    <div className={styles.container}>
      <h1>Deliveries</h1>

      <table className={styles.tableContainer}>
        <thead>
          <tr className={styles.action}>
            <th>Select</th>
            <th>Name</th>
            <th>Address</th>
            <th>Contact</th>
            <th>Item Category</th>
            <th>Status</th>
            <th>Delete</th>
            <th>Truck No.</th>
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
                  <Link href={`/delivery/${post.slug}`}>
                    {post.item_category}
                  </Link>
                </td>
                <td>
                  <Link href={`/delivery/${post.slug}`}>{post.status}</Link>
                </td>
                <td>
                  {post.status === 'New' && (
                    <form action={deletePost}>
                      <input type='hidden' name='id' value={post.id} />
                      <button className={styles.postButton}>Cancel</button>
                    </form>
                  )}
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

      {/* {posts.map((post) => (
        <div className={styles.post} key={post.id}>
          <div className={styles.detail}>
            <Image
              src={post.img || '/noAvatar.png'}
              alt=''
              width={50}
              height={50}
            />
            <span className={styles.postTitle}>{post.title}</span>
          </div>
          <form action={deletePost}>
            <input type='hidden' name='id' value={post.id} />
            <button className={styles.postButton}>Delete</button>
          </form>
        </div>
      ))} */}
    </div>
  );
};

export default BranchPosts;
