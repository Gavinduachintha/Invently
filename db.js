import { Client, Databases, Permission, Role } from "appwrite";

const client = new Client()
    .setEndpoint('https://sgp.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('6910a51f000249852e20'); // Your project ID

const databases = new Databases(client);

const result = await databases.createDocument({
    databaseId: '69114e2e003d3109db3f',
    collectionId: 'shop_owners',
    documentId: '1',
    data: {
        "ownerId": "1234567890abcdef123",
        "firstName": "Walter",
        "lastName": "O'Brien",
        "email": "walter.obrien@example.com",
        "phoneNumber": 1234567890,
        "businessName": "O'Brien Tech Solutions",
    },
    permissions: [Permission.read(Role.any())], // optional
    transactionId: '<TRANSACTION_ID>' // optional
});

console.log(result);
