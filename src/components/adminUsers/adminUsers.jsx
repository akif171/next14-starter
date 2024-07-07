import React from "react";
import styles from "./adminUsers.module.css";
import { getAllUser } from "@/lib/data";
import { deleteUser } from "@/lib/action";
import Image from "next/image";

const AdminUsers = async () => {
  const users = await getAllUser();

  return (
    <div className={styles.container}>
      {" "}
      <h1>Users</h1>
      {users.map((user) => (
        <div className={styles.user} key={user.id}>
          <div className={styles.detail}>
            <Image
              src={user.image || "/noavatar.png "}
              alt=""
              width={50}
              height={50}
            />
            <span>{user.username}</span>
          </div>

          <form action={deleteUser}>
            <input type="hidden" name="id" value={user.id} />
            <button className={styles.userButton}>Delete</button>
          </form>
        </div>
      ))}
    </div>
  );
};

export default AdminUsers;
