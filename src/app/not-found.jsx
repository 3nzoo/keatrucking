import Link from 'next/link';
import styles from './not-found.module.css';

const NotFound = () => {
  return (
    <div className={styles.container}>
      <h1>Not Found</h1>
      <h2>Sorry, the page you are looking for does not exist.</h2>
      <div className={styles.btn}>
        <Link href='/'>Return Home</Link>
      </div>
    </div>
  );
};

export default NotFound;
