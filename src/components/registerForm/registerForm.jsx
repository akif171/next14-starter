"use client";

import { useFormState } from "react-dom";
import styles from "./registerform.module.css";
import { register } from "@/lib/action";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useEffect } from "react";

const RegisterForm = () => {
  const [state, formAction] = useFormState(register, undefined);

  const router = useRouter();

  useEffect(() => {
    state?.success && router.push("/login");
  }, [state?.success, router]);

  return (
    <form className={styles.form} action={formAction}>
      <input type="text" placeholder="username" name="username" />
      <input type="email" placeholder="email" name="email" />
      <input type="password" placeholder="password" name="password" />
      <input
        type="password"
        placeholder="confirm password"
        name="confirmPassword"
      />

      <button>Register</button>
      {state?.error}
      <Link href={"/login"}>
        Have an account? <b>Login</b>
      </Link>
    </form>
  );
};

export default RegisterForm;