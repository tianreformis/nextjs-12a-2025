"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { loginUser } from "../types/users";

const LoginPage = () => {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  //fungsi untuk handle login, dihubungkan ke button
  function handleLogin(e: React.FormEvent) {
    e.preventDefault();

    //mengambil data user dari fungsi loginUser 
    const user = loginUser(username, password);

    //buat fungsi jikalau user tidak ada
    if (!user) {
      setError("Username atau password salah");
      return;
    }

    //jika user ada, redirect ke halaman bog langsung
    router.push("/pages/blog");

  }

  return (
    <div className="w-lg min-h-screen bg-gray-100 flex justify-center items-center shadow-md rounded-md">
      <form onSubmit={handleLogin}>
        <h1 className="font-bold text-2xl mb-5 text-center">Login</h1>
        {error && <p className="text-red-500 mb-3">{error}</p>}

        <input
          type="text"
          className="w-full border p-2 rounded mb-3"
          placeholder="Masukkan Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
           className="w-full border p-2 rounded mb-3"
          placeholder="Masukkan Username"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
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