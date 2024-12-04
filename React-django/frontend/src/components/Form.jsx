import "../styles/Form.css";
import { useState } from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constants";
import LoadingIndicator from "../components/LoadingIndicator"

function Form({ route, method }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); // Correctly use useNavigate here

  const name = method === "login" ? "Login" : "Register"; // Fixed typo

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading to true before making the API call

    try {
      const res = await api.post(route, { username, password });
      if (method === "login") {
        localStorage.setItem(ACCESS_TOKEN, res.data.access);
        localStorage.setItem(REFRESH_TOKEN, res.data.refresh); // Use the correct token
        navigate("/"); // Navigate to home on successful login
      } else {
        navigate("/login"); // Navigate to login on successful registration
      }
    } catch (error) {
      alert(error.message || "An error occurred");
    } finally {
      setLoading(false); // Ensure loading is set to false in the end
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <h1>{name}</h1>
      <input
        type="text"
        className="form-input"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
        required
      />
      <input
        type="password"
        className="form-input"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        required
      />
      {loading && <LoadingIndicator/>}
      <button className="form-button" type="submit" disabled={loading}>
        {loading ? "Loading..." : name} {/* Disable button during loading */}
      </button>
    </form>
  );
}

export default Form
