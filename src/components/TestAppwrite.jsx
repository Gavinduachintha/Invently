import { useState } from "react";
import { Client, Databases, ID } from "appwrite";

// Test Appwrite Connection
const TestAppwrite = () => {
  const [status, setStatus] = useState("Not tested");
  const [details, setDetails] = useState({});

  const testConnection = async () => {
    setStatus("Testing...");
    
    const projectId = import.meta.env.VITE_APPWRITE_PROJECT_ID;
    const endpoint = import.meta.env.VITE_APPWRITE_ENDPOINT;
    const databaseId = import.meta.env.VITE_APPWRITE_DATABASE_ID;

    const testDetails = {
      projectId,
      endpoint,
      databaseId,
      collectionId: "waitlist_users",
      envLoaded: !!(projectId && endpoint && databaseId),
    };

    setDetails(testDetails);

    if (!testDetails.envLoaded) {
      setStatus("❌ Environment variables not loaded!");
      return;
    }

    try {
      const client = new Client()
        .setProject(projectId)
        .setEndpoint(endpoint);
      
      const databases = new Databases(client);

      // Try to create a test document
      const result = await databases.createDocument(
        databaseId,
        "waitlist_users",
        ID.unique(),
        {
          email: "test@example.com",
        }
      );

      setStatus("✅ Connection successful! Document created: " + result.$id);
    } catch (error) {
      setStatus("❌ Connection failed: " + error.message);
      setDetails({
        ...testDetails,
        errorMessage: error.message,
        errorCode: error.code,
        errorType: error.type,
      });
    }
  };

  return (
    <div className="p-8 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Appwrite Connection Test</h1>
      
      <button
        onClick={testConnection}
        className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
      >
        Test Connection
      </button>

      <div className="mt-6 space-y-4">
        <div className="bg-gray-100 p-4 rounded-lg">
          <h2 className="font-bold mb-2">Status:</h2>
          <p>{status}</p>
        </div>

        <div className="bg-gray-100 p-4 rounded-lg">
          <h2 className="font-bold mb-2">Configuration:</h2>
          <pre className="text-sm overflow-auto">
            {JSON.stringify(details, null, 2)}
          </pre>
        </div>
      </div>
    </div>
  );
};

export default TestAppwrite;
