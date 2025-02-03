import { useState } from "react";
import { supabase } from "../Services/Supabase";

const SignUpForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("client");
  const [message, setMessage] = useState("");

  const handleSignUp = async (e) => {
    e.preventDefault();
    const { data, error } = await supabase.auth.signUp({ email, password });

    if (error) {
      setMessage(error.message);
    } else {
      await supabase
        .from("users")
        .insert([{ id: data.user.id, name, email, role }]);
      setMessage("Account created! You can now log in.");
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-lg font-bold mb-4">Sign Up</h2>
      {message && <p className="text-red-500">{message}</p>}
      <form onSubmit={handleSignUp}>
        <input
          type="text"
          placeholder="Full Name"
          className="w-full p-2 mb-2 border rounded"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 mb-2 border rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 mb-2 border rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <select
          className="w-full p-2 mb-4 border rounded"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          <option value="client">Client</option>
          <option value="advisor">Advisor</option>
        </select>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUpForm;
