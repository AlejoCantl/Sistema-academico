'use client'; 

import { useState } from "react";
import styles from './page.module.css';
import { useRouter } from "next/navigation"; 

const users = [
  { email: "admin@example.com", password: "admin123", route: "/Dashboard/Admin" },
  { email: "coordinator@example.com", password: "coord123", route: "/Dashboard/Coordinator" },
  { email: "student@example.com", password: "student123", route: "/Dashboard/Student" },
  { email: "teacher@example.com", password: "teacher123", route: "/Dashboard/Teacher" },
];

export default function LoginPage() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  
  const handleSubmit = (e) => {
    e.preventDefault();
    const user = users.find(
      (u) => u.email === email && u.password === password
    );
    if (user) {
      setError("");
      router.push(user.route);
    } else {
      setError("Usuario o contraseña incorrectos");
    }
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <h1 className={styles.Login}>Iniciar Sesión</h1>
        <input
          className={styles.input}
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <br />
        <br />
        <input
          className={styles.input}
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <br />
        <br />
        <button type="submit" className={styles.button}>Ingresar</button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}
