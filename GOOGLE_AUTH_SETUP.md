# Google OAuth Authentication Setup

## What Was Fixed

### 1. **Renamed and Refactored `useGoogleAuth`**
   - Renamed from `useGoogleAuth` to `initiateGoogleAuth` (it's not a hook)
   - Now uses centralized `account` from `lib/appwrite.js`
   - Uses dynamic redirect URLs instead of hardcoded localhost
   - Success redirects to `/dashboard`, failure redirects to `/signin`

### 2. **Updated `SocialLogin` Component**
   - Now accepts `onGoogleLogin` prop
   - Properly calls the prop when Google button is clicked
   - Added `type="button"` to prevent form submission

### 3. **Created `useOAuthCallback` Hook**
   - Handles OAuth callback after Google redirects back
   - Checks if user has a database record
   - Creates database record if user doesn't exist (OAuth users)
   - Redirects authenticated users to dashboard

### 4. **Updated SignIn & SignUp Pages**
   - Import `initiateGoogleAuth` instead of `useGoogleAuth`
   - Pass function correctly to `SocialLogin` component
   - SignIn page now uses `useOAuthCallback` to handle redirects

## How It Works

1. **User clicks "Continue with Google"**
   - `initiateGoogleAuth()` is called
   - Appwrite redirects to Google OAuth consent screen

2. **User authorizes the app**
   - Google redirects back to your app (to `/dashboard`)
   - `useOAuthCallback` hook detects the OAuth session

3. **Hook handles user creation**
   - Checks if user exists in `shop_owners` collection
   - Creates user record if it doesn't exist
   - Redirects to dashboard with success message

## Required Appwrite Configuration

### 1. Enable Google OAuth in Appwrite Console
   - Go to your Appwrite Console
   - Navigate to Auth → Settings → OAuth2 Providers
   - Enable Google
   - Add your Google OAuth credentials

### 2. Add Redirect URLs
Add these URLs to your Google OAuth app in Google Cloud Console:
- **Development**: `http://localhost:5173/dashboard`
- **Production**: `https://yourdomain.com/dashboard`

### 3. Database Collection
Ensure your `shop_owners` collection has these attributes:
- `ownerId` (string)
- `email` (string)
- `name` (string)
- `businessName` (string)
- `registerOn` (datetime/string)

## Testing

1. Start your dev server: `npm run dev`
2. Go to `/signin`
3. Click "Continue with Google"
4. You should be redirected to Google, then back to your dashboard
5. Check your Appwrite database to verify user was created

## Important Notes

- OAuth users bypass the email/password signup form
- User documents are created automatically on first OAuth login
- The `ProtectedRoute` component already works with OAuth sessions
- Make sure to update redirect URLs for production deployment

## Troubleshooting

### "Invalid redirect URL" error
- Check that redirect URLs match in both Appwrite and Google Cloud Console
- URLs must be exact matches (including protocol and path)

### User not created in database
- Check browser console for errors
- Verify database ID and collection name in `.env`
- Ensure collection has correct permissions

### Infinite redirect loop
- Clear browser cookies and localStorage
- Check that `ProtectedRoute` is not blocking OAuth flow
- Verify `useOAuthCallback` is only used on SignIn page
