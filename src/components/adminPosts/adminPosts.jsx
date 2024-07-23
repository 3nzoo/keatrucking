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
          <tr>
            <th>Action</th>
            <th>Name</th>
            <th>Address</th>
            <th>Contact Number</th>
            <th>Item Category</th>
            <th>Status</th>
            <th>Truck Number</th>
            <th>Branch</th>
          </tr>
        </thead>
        <tbody>
          {posts?.map((post) => {
            // const curDate = new Date(user.createdAt);
            return (
              <tr key={post.id}>
                <td>
                  <Link
                    className={styles.LinkBtn}
                    href={`/delivery/${post.slug}`}
                  >
                    View Details
                  </Link>
                </td>
                <td>{post.name}</td>
                <td>{post.address}</td>
                <td>{post.contact}</td>
                <td>{post.item_category}</td>
                <td>{post.status}</td>
                <td>-</td>
                <td>{post.username}</td>
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

export default AdminPosts;
