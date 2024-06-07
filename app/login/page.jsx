"use client";

import React from "react";
import { authentificate } from "../libs/actions";
import styles from "@/app/ui/login/login.module.css";

const LoginForm = () => {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    try {
      const result = await authentificate(formData);
      if (result.error) {
        console.error("Login failed:", result.error);
      } else {
        console.log("Login successful:", result);
      }
    } catch (err) {
      console.error("Login error:", err);
    }
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <h1>Login</h1>
        <input type="text" placeholder="username" name="username" />
        <input type="password" placeholder="password" name="password" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
 