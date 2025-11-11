# Appwrite Waitlist Troubleshooting

## Current Error: "Failed to fetch"

This means the request isn't reaching Appwrite. Follow these steps:

### Step 1: Restart Dev Server ⚡
```bash
# Stop the current server (Ctrl+C)
# Then restart:
npm run dev
```
**Environment variables only load when the server starts!**

### Step 2: Check Browser Console 🔍

After restarting and submitting the form, check the console for:
```
=== Waitlist Submission Debug ===
Email: user@example.com
Project ID: 6910a51f000249852e20
Endpoint: https://sgp.cloud.appwrite.io/v1
Database ID: 69114e2e003d3109db3f
```

**If any value shows `undefined`:**
- Your .env file isn't being read
- Make sure .env is in the root directory (same level as package.json)
- Restart dev server

### Step 3: Verify Appwrite Setup 🔧

Go to https://cloud.appwrite.io/ and check:

#### A. Platform Configuration
1. Go to your project → **Settings** → **Platforms**
2. Click **Add Platform** → **Web**
3. Add your local URL:
   - Name: `Local Dev`
   - Hostname: `localhost:5173` (or whatever port Vite uses)
4. Click **Next** and save

#### B. Database & Collection
1. Go to **Databases** → Select your database (`69114e2e003d3109db3f`)
2. Check if collection `waitlist_users` exists
3. If not, create it:
   - Click **Create Collection**
   - Collection ID: `waitlist_users` (type exactly this)
   - Name: `Waitlist Users`
   - Click **Create**

#### C. Create Attribute
1. Click on `waitlist_users` collection
2. Go to **Attributes** tab
3. Click **Create Attribute** → **String**
4. Settings:
   - Key: `email`
   - Size: `320`
   - Required: ✓ Yes
   - Default: (leave empty)
5. Click **Create**

#### D. Set Permissions ⚠️ CRITICAL
1. Stay in `waitlist_users` collection
2. Go to **Settings** tab
3. Scroll to **Permissions** section
4. Under **Document Security**:
   - **Create**: Click **Add Role** → Select **Any** → Save
   - **Read**: Click **Add Role** → Select **Any** → Save (optional)
5. Click **Update**

### Step 4: Test Connection 🧪

After completing all steps:
1. Restart dev server again
2. Open browser console (F12)
3. Go to your site
4. Submit an email
5. Check console logs

### Common Issues:

❌ **Project ID is undefined**
- .env file not in root directory
- Server not restarted after changing .env

❌ **Collection not found**
- Collection ID must be exactly: `waitlist_users`
- Case-sensitive!

❌ **Insufficient permissions**
- Need to add "Any" role for Create permission
- Check under collection Settings → Permissions

❌ **Platform not allowed**
- Add `localhost:5173` in Project Settings → Platforms

❌ **Wrong endpoint**
- Singapore: `https://sgp.cloud.appwrite.io/v1`
- US: `https://cloud.appwrite.io/v1`
- Europe: `https://eu.cloud.appwrite.io/v1`

### Still Not Working?

Share the **full console output** including the debug logs:
- Email value
- Project ID value  
- Endpoint value
- Database ID value
- Full error object

This will show exactly where the problem is!
