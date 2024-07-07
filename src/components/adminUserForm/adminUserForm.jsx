"use client";

import React from "react";
import styles from "./adminUserForm.module.css";
import { useFormState } from "react-dom";
import { addUser } from "@/lib/action";

const AdminUserForm = ({ userId }) => {
  const [state, formAction] = useFormState(addUser, undefined);

  return (
    <form className={styles.container} action={formAction}>
      <h1>Add User</h1>
      <input type="text" name="username" placeholder="username" />
      <input type="email" name="email" placeholder="email" />
      <input type="password" name="password" placeholder="password" />

      <select name="isAdmin">
        <option value="false">Is Admin?</option>
        <option value="false">Yes</option>
        <option value="true">No</option>
      </select>

      <button>Add User</button>

      {state && state.error}
    </form>
  );
};

export default AdminUserForm;
