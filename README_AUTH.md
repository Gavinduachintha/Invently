# Invently - Authentication Pages

## 📁 Updated Project Structure

```
src/
├── pages/                  # Page components
│   ├── LandingPage.jsx    # Main landing page
│   ├── SignIn.jsx         # Sign in page
│   └── SignUp.jsx         # Sign up page
├── components/
│   ├── auth/              # Authentication-specific components
│   │   ├── AuthLayout.jsx # Shared layout for auth pages
│   │   └── SocialLogin.jsx # Social login buttons (Google, Microsoft)
│   ├── ui/                # Reusable UI components
│   │   ├── Button.jsx     # Button component
│   │   ├── Input.jsx      # Input field component
│   │   ├── Checkbox.jsx   # Checkbox component
│   │   └── Divider.jsx    # Divider with text
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── Features.jsx
│   ├── Pricing.jsx
│   ├── CTA.jsx
│   └── Footer.jsx
├── hooks/
│   └── useToggle.js
├── lib/
│   └── appwrite.js
├── App.jsx
├── App.css
└── main.jsx
```

## 🔐 Authentication Pages

### Sign In Page (`/signin`)

**Features:**

- Email and password login
- Remember me checkbox
- Forgot password link
- Social login (Google, Microsoft)
- Link to sign up page
- Form validation
- Error handling

**Fields:**

- Email (with icon)
- Password (with icon)
- Remember me checkbox

### Sign Up Page (`/signup`)

**Features:**

- Full registration form
- Business-focused fields
- Password confirmation
- Terms and conditions checkbox
- Social sign up options
- Link to sign in page
- Comprehensive validation
- Error feedback

**Fields:**

- Full Name
- Business Name
- Email
- Password (min 8 characters)
- Confirm Password
- Terms agreement

## 🎨 Component Details

### AuthLayout

- Shared layout for auth pages
- Centered card design
- Logo and branding
- Gradient background
- Responsive design

### Input Component

- Label support
- Icon support (left-aligned)
- Error message display
- Required field indicator
- Accessible
- Emerald theme focus states

### Checkbox Component

- Custom styled
- Label support
- Emerald accent color
- Accessible with proper IDs

### Divider Component

- Text separator
- Used for "or continue with" sections

### SocialLogin Component

- Google OAuth button
- Microsoft OAuth button
- Branded icons
- Hover effects

## 🚀 Navigation

Currently using simple state-based navigation. To navigate between pages:

### In Browser Console:

```javascript
// Go to Sign In page
window.navigateTo("signin");

// Go to Sign Up page
window.navigateTo("signup");

// Go to Landing page
window.navigateTo("landing");
```

### In Code:

```javascript
// Update App.jsx to use React Router for proper navigation
```

## 📝 Form Validation

### Sign In Validation:

- Email format validation
- Password minimum length (6 characters)
- Required field checks

### Sign Up Validation:

- All fields required
- Email format validation
- Password minimum length (8 characters)
- Password confirmation match
- Terms acceptance required

## 🎯 Next Steps

1. **Install React Router** (recommended):

   ```bash
   npm install react-router-dom
   ```

2. **Add Authentication Logic**:

   - Integrate with Appwrite authentication
   - Handle OAuth flows
   - Session management
   - Protected routes

3. **Enhanced Features**:

   - Password strength indicator
   - Email verification
   - Two-factor authentication
   - Password reset flow
   - Loading states
   - Success notifications

4. **Testing**:
   - Form validation testing
   - Error handling
   - Social login integration

## 🔗 Links to Add

Update the following components to link to auth pages:

**Navbar.jsx:**

- "Sign In" button → `/signin`
- "Get Started" button → `/signup`

**Hero.jsx:**

- "Start Free Trial" button → `/signup`

**CTA.jsx:**

- "Start Your Free Trial" button → `/signup`

**Pricing.jsx:**

- All CTA buttons → `/signup`

## 💡 Usage Example

```javascript
// To properly implement routing, update App.jsx:
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}
```

## 🎨 Color Theme

Auth pages use the same emerald-teal theme:

- Primary: Emerald-600
- Focus states: Emerald-500
- Backgrounds: Emerald-50, Teal-50
- Consistent with landing page branding
