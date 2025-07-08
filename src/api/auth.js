import axios from "axios";

const API_URL = "http://localhost:5000/api";

// Register user
const signup = async (userData) => {
  try {
    console.log("➡️ Sending signup data:", userData);

    const response = await axios.post(`${API_URL}/signup`, userData, {
      withCredentials: true,
      headers: {
        "Content-Type": "application/json",
      },
    });

    console.log("✅ Signup response:", response.data);
    return response.data;
  } catch (error) {
    console.error("❌ Signup error:", error.response || error.message || error);
    throw error;
  }
};

const login = async (userData) => {
  const response = await axios.post(`${API_URL}/login`, userData, {
    withCredentials: true,
  });
  return response.data;
};

const logout = async () => {
  const response = await axios.get(`${API_URL}/logout`, {
    withCredentials: true,
  });
  return response.data;
};

const getCurrentUser = async () => {
  const response = await axios.get(`${API_URL}/user`, {
    withCredentials: true,
  });
  return response.data;
};

const authService = {
  signup,
  login,
  logout,
  getCurrentUser,
};

export default authService;
