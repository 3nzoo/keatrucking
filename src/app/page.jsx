import Image from 'next/image';
import styles from './home.module.css';
import Link from 'next/link';

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>
          Delivering reliability, efficiency, and excellence on every route.
        </h1>
        <p className={styles.desc}>
          This platform serves as a pivotal tool for monitoring daily deliveries
          and enhancing the logistical operations of our clients. If you wish to
          avail of our services, kindly contact us.
        </p>
        <div className={styles.buttons}>
          <Link href={'/contact'}>
            <button className={styles.button}> Contact </button>
          </Link>
          <Link href={'/login'}>
            <button className={styles.buttonSoft}>Login</button>
          </Link>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image
          src='/DALL·E.png'
          alt=''
          fill
          objectFit='contain'
          className={styles.heroImg}
        />
      </div>
    </div>
  );
};

export default Home;
