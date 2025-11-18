"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

const LoginPage = () => {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  //fungsi untuk handle login, dihubungkan ke button
  function handleLogin(e.React.FormEvent) {
    e.preventDefault();

  }

  return (
    <div className="w-lg min-h-screen bg-gray-100 flex justify-center items-center shadow-md rounded-md">
      <form onSubmit={handleLogin}>
        <h1 className="font-bold text-2xl mb-5 text-center">Login</h1>

        <input
          type="text"
          className="w-full border p-2 rounded mb-3"
          placeholder="Masukkan Username"
          value=""
          onChange=""
        />
        <input
          type="password"
           className="w-full border p-2 rounded mb-3"
          placeholder="Masukkan Username"
          value=""
          onChange=""
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition-colors"
        >
          Login
        </button>

      </form>

    </div>
  );
};
export default LoginPage;