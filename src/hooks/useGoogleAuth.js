import { account } from "../lib/appwrite";

// This should be a regular function, not a hook
const initiateGoogleAuth = () => {
  const redirectUrl = `${window.location.origin}/dashboard`;
  const failureUrl = `${window.location.origin}/signin`;
  
  account.createOAuth2Session(
    "google",
    redirectUrl, // Success redirect - goes to dashboard
    failureUrl   // Failure redirect - goes back to signin
  );
};

export default initiateGoogleAuth;
