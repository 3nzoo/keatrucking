'use client';

import { useState } from 'react';
import styles from './links.module.css';
import NavLink from './navLink/navLink';
import Image from 'next/image';
import { handleLogout } from '@/lib/action';

const links = [
  {
    title: 'Home',
    path: '/',
  },
  {
    title: 'Contact',
    path: '/contact',
  },
];

const linksAdmin = [
  {
    title: 'Home',
    path: '/admin',
  },
  {
    title: 'Deliveries',
    path: '/deliveries',
  },
  {
    title: 'Contact',
    path: '/contact',
  },
];

const linksBranch = [
  {
    title: 'Home',
    path: '/branch',
  },
  {
    title: 'Contact',
    path: '/contact',
  },
];

const Links = ({ session }) => {
  const [open, setOpen] = useState(false);

  const finalLinks = !session
    ? links
    : session?.user?.isAdmin
    ? linksAdmin
    : linksBranch;
  // TEMPORARY
  // const session = true;
  // const isAdmin = true;
  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {finalLinks.map((link) => (
          <NavLink item={link} key={link.title} />
        ))}
        {session?.user ? (
          <>
            <form action={handleLogout}>
              <button className={styles.logout}>Logout</button>
            </form>
          </>
        ) : (
          <NavLink item={{ title: 'Login', path: '/login' }} />
        )}
      </div>

      <Image
        className={styles.menuButton}
        src='/menu.png'
        alt=''
        width={30}
        height={30}
        onClick={() => setOpen((prev) => !prev)}
      />
      {open && (
        <div className={styles.mobileLinks}>
          {finalLinks.map((link) => (
            <NavLink item={link} key={link.title} />
          ))}
          {session?.user ? (
            <>
              <form action={handleLogout}>
                <button className={styles.logout}>Logout</button>
              </form>
            </>
          ) : (
            <NavLink item={{ title: 'Login', path: '/login' }} />
          )}
        </div>
      )}
    </div>
  );
};

export default Links;
