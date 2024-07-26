import Loading from '@/app/loading';
import { getPostBySlug } from '@/lib/data';
import React, { Suspense } from 'react';
import styles from './deliveryPage.module.css';
import Link from 'next/link';
//? delivery details
//? name, address, contact number, item_category, status, truck number, remarks, img, updatedAt

const DeliveryPage = async ({ params }) => {
  const { slug } = params;

  const post = await getPostBySlug(slug);

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.buttons}>
            <div></div>
          </div>
          {/* <button className={styles.edit}>Edit Details</button> */}
          {/* <button onclick='window.history.back()'>← Back</button> */}
          <h1>Delivery Details</h1>
        </div>
        <div className={styles.section}>
          <h2>Name: </h2>
          <h3>- {post.name}</h3>
        </div>
        <div className={styles.section}>
          <h2>Delivery Address:</h2>
          <h3>- {post.address}</h3>
        </div>
        <div className={styles.section}>
          <h2>Contact Number:</h2>
          <h3>- {post.contact}</h3>
        </div>
        <div className={styles.section}>
          <h2>Status:</h2>
          <h3>- {post.status} </h3>
        </div>
        <div className={styles.section}>
          <h2>Item Category:</h2>
          <h3>- {post.item_category} </h3>
        </div>
        <div className={styles.section}>
          <h2>Truck Number:</h2>
          <h3>- {post.truck_number} </h3>
        </div>
        <div className={styles.section}>
          <h2>Remarks:</h2>
          <h3> - {post?.remarks}</h3>
        </div>
        <div className={styles.section}>
          <h2>Distance:</h2>
          <h3> - {post?.distance}</h3>
        </div>
        <div className={styles.section}>
          <h2>Delivery Proof:</h2>
          <h3>- {post.img} </h3>
          <Link className={styles.back} href={'/'}>
            Back
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DeliveryPage;
