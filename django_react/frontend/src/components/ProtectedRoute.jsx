import { Navigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import api from "../api";
import { REFRESH_TOKEN, ACCESS_TOKEN } from "../constants";
import { useState, useEffect } from "react";

function ProtectedRoute({ children }) {
  const [isAuthorized, setIsAuthorized] = useState(null);

  useEffect(() => {
    const authenticate = async () => {
      const token = localStorage.getItem(ACCESS_TOKEN);
      if (!token) {
        setIsAuthorized(false);
        return;
      }

      const decodedToken = jwtDecode(token);
      const tokenExpiration = decodedToken.exp;
      const now = Date.now() / 1000;

      if (tokenExpiration < now) {
        await refreshToken();
      } else {
        setIsAuthorized(true);
      }
    };

    authenticate().catch(() => setIsAuthorized(false));
  }, []);

  const refreshToken = async () => {
    const refreshTokenValue = localStorage.getItem(REFRESH_TOKEN);

    try {
      const res = await api.post("/api/token/refresh/", {
        refresh: refreshTokenValue,
      });

      if (res.status === 200) {
        localStorage.setItem(ACCESS_TOKEN, res.data.access);
        setIsAuthorized(true);
      } else {
        setIsAuthorized(false);
      }
    } catch (error) {
      console.error("Error refreshing token:", error);
      setIsAuthorized(false);
    }
  };

  // Handle loading state
  if (isAuthorized === null) {
    return <div>Loading...</div>;
  }

  // Redirect to login if not authorized
  if (!isAuthorized) {
    return <Navigate to="/login" replace />;
  }

  // Render protected children
  return children;
}

export default ProtectedRoute
