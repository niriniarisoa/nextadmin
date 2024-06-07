"use client";

import React, { useState } from "react";
import { signIn } from "next-auth/react";
import styles from "@/app/ui/login/login.module.css";

const LoginForm = () => {
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const username = formData.get("username");
    const password = formData.get("password");

    try {
      const result = await signIn("credentials", {
        redirect: false,
        username,
        password,
      });

      if (result.error) {
        setError(result.error);
      } else {
        console.log("Login successful:", result);
        window.location.href = "/dashboard";
      }
    } catch (err) {
      console.error("Login error:", err);
      setError("An unexpected error occurred");
    }
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <h1>Login</h1>
        <input type="text" placeholder="Username" name="username" required />
        <input type="password" placeholder="Password" name="password" required />
        <button type="submit">Login</button>
        {error && <p className={styles.error}>{error}</p>}
      </form>
    </div>
  );
};

export default LoginForm;
