"use client";

import React from "react";
import styles from "./adminPostForm.module.css";
import { useFormState } from "react-dom";
import { addPost } from "@/lib/action";

const AdminPostForm = ({ userId }) => {
  const [state, formAction] = useFormState(addPost, undefined);

  return (
    <form className={styles.container} action={formAction}>
      <h1>Add Post</h1>
      <input type="hidden" name="userId" value={userId} />
      <input type="text" name="title" placeholder="title" />
      <input type="text" name="slug" placeholder="slug" />
      <input type="text" name="image" placeholder="image" />
      <textarea name="desc" placeholder="desc" rows={10}></textarea>
      <button>Add</button>

      {state && state.error}
    </form>
  );
};

export default AdminPostForm;
