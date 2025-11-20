import { useEffect, useState } from "react";
import { account, databases } from "../lib/appwrite";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

/**
 * Hook to handle OAuth callback after Google authentication
 * Checks if user was created via OAuth and ensures they have a database record
 */
const useOAuthCallback = () => {
  const [isChecking, setIsChecking] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const handleOAuthCallback = async () => {
      try {
        // Check if there's an active session
        const user = await account.get();
        
        if (user) {
          // Check if user document exists in database
          try {
            await databases.getDocument(
              import.meta.env.VITE_APPWRITE_DATABASE_ID,
              "shop_owners",
              user.$id
            );
            
            // User exists, redirect to dashboard
            toast.success(`Welcome back, ${user.name || user.email}!`);
            navigate("/dashboard", { state: { user } });
          } catch (error) {
            // User doesn't exist in database, create document
            if (error.code === 404) {
              try {
                await databases.createDocument(
                  import.meta.env.VITE_APPWRITE_DATABASE_ID,
                  "shop_owners",
                  user.$id,
                  {
                    ownerId: user.$id,
                    email: user.email,
                    name: user.name || "",
                    businessName: "",
                    registerOn: new Date().toISOString(),
                  }
                );
                
                toast.success(`Welcome, ${user.name || user.email}!`);
                navigate("/dashboard", { state: { user } });
              } catch (createError) {
                console.error("Error creating user document:", createError);
                toast.error("Failed to complete registration. Please try again.");
              }
            } else {
              console.error("Error checking user document:", error);
            }
          }
        }
      } catch (error) {
        // No active session, this is fine - user might just be on the page normally
        console.log("No OAuth session detected");
      } finally {
        setIsChecking(false);
      }
    };

    handleOAuthCallback();
  }, [navigate]);

  return { isChecking };
};

export default useOAuthCallback;
