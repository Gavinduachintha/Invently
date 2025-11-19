import React from "react";
import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Client, Account } from "appwrite";

const client = new Client()
  .setEndpoint(import.meta.env.VITE_APPWRITE_ENDPOINT) // Your Appwrite Endpoint
  .setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID); // Your project ID
const account = new Account(client);

export const ProtectedRoute = ({children}) => {
  const [loading, setLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const checkSession = async () => {
      try {
        await account.get();
        setAuthenticated(true);
      } catch (error) {
        setAuthenticated(false);
      }
      setLoading(false);
    };
    checkSession();
  }, []);
  if (loading) {
    return  <div className="fixed inset-0 flex items-center justify-center bg-white/40 z-50">
      <span className="loading loading-spinner loading-lg"></span>
    </div>
  }

  return authenticated ? children : <Navigate to="/signin" replace />;
};
