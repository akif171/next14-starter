// "use client";

import Image from "next/image";
import styles from "./contact.module.css";
// import { useEffect, useState } from "react";

export const metadata = {
  title: "Contact Page",
  description: "contact page",
};

const ContactPage = () => {
  // const [isClient, setIsClient] = useState(false);

  // const a = Math.random();

  // console.log(a);

  // useEffect(() => {
  //   setIsClient(true);
  // }, []);

  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src={"/contact.png"}
          alt="contact image"
          fill
          className={styles.img}
        />
      </div>
      <div className={styles.formContainer}>
        {/* {isClient && a} */}
        <form action="" className={styles.form}>
          <input type="text" placeholder="Name and Surname" />
          <input type="text" placeholder="Email Address" />
          <input type="text" placeholder="Phone Number (optional)" />
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Message"
          ></textarea>
          <button>Send</button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
