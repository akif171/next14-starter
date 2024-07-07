"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./navlink.module.css";

const NavLink = ({ item }) => {
  const pathName = usePathname();

  return (
    <Link
      className={`${styles.container} ${
        pathName === item.path && styles.active
      }`}
      href={item.path}
    >
      {item.title}
    </Link>
  );
};

export default NavLink;
