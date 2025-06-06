import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const LogoutPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.removeItem("user");
    toast.info("Logged out successfully!");
    navigate("/", { replace: true });
  }, [navigate]);

  return null;
};

export default LogoutPage;
