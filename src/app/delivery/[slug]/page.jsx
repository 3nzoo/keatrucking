import Loading from '@/app/loading';
import { getPostBySlug } from '@/lib/data';
import React, { Suspense } from 'react';
import styles from './deliveryPage.module.css';
//? delivery details
const DeliveryPage = async ({ params }) => {
  const { slug } = params;

  const post = await getPostBySlug(slug);

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.buttons}>
            <button className={styles.edit}>Back</button>
          </div>
          {/* <button className={styles.edit}>Edit Details</button> */}
          {/* <button onclick='window.history.back()'>← Back</button> */}
          <h2>Delivery Details</h2>
        </div>
        <div className={styles.section}>
          <h3>Delivery ID: #123456</h3>
          <p>
            Status: In Transit <span>🚚</span>
          </p>
        </div>
        <div className={styles.section}>
          <h3>Delivery Address:</h3>
          <p>John Doe</p>
          <p>1234 Elm Street</p>
          <p>Springfield, IL 62704</p>
        </div>
        <div className={styles.section}>
          <h3>Expected Delivery Date:</h3>
          <p>August 15, 2024</p>
        </div>
        <div className={styles.section}>
          <h3>Contact Information:</h3>
          <p>Phone: (555) 123-4567</p>
          <p>Email: john.doe@example.com</p>
        </div>
        <div className={styles.section}>
          <h3>Package Details:</h3>
          <p>- 2x Item A</p>
          <p>- 1x Item B</p>
          <p>- 3x Item C</p>
        </div>
        <div className={styles.section}>
          <h3>Notes:</h3>
          <p>Leave package at the front door if no one is home</p>
        </div>
        {/* <div className={styles.buttons}>
          <button className={styles.edit}>Edit Details</button>
          <button className={styles.cancel}>Cancel Delivery</button>
        </div> */}
      </div>

      {/* <div className={styles.container}>
        <div className={styles.wrapper}>
          <Suspense fallback={<Loading />}>
            <div className={styles.head}>
              <h1>Delivery Details </h1>
            </div>
            <h2>From {post.username} </h2>
            <label>
              Name: <strong>{post.name}</strong>
            </label>
            <label>
              Address: <strong>{post.address}</strong>
            </label>
            <label>
              Contact: <strong>{post.contact}</strong>
            </label>
            <label>
              Status: <strong>{post.status}</strong>
            </label>
            <label>
              Category: <strong>{post.item_category}</strong>
            </label>
            <label>
              Truck Number: <strong>{post.truck_number}</strong>
            </label>
            <label>
              Proof Image: <strong>{post.img} </strong>
            </label>
          </Suspense>
        </div>
      </div> */}
    </div>
  );
};

export default DeliveryPage;
