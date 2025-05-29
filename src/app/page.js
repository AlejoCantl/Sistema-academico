'use client'; // Esto es necesario en Next.js App Router para componentes cliente

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Aquí puedes hacer la validación o autenticación real

    console.log("Email:", email);
    console.log("Password:", password);

    // Luego rediriges al dashboard admin
    router.push("/Dashboard/Admin");
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Iniciar Sesión</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Correo"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <br />
        <br />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <br />
        <br />
        <button type="submit">Ingresar</button>
      </form>
    </div>
  );
}
