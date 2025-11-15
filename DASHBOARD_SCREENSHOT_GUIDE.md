# How to Add Your Dashboard Screenshot

## Step 1: Take a Screenshot of Your Dashboard

1. Navigate to your dashboard at `/dashboard` in your app
2. Make sure you're logged in and can see the full dashboard with:

   - Today's Sales card
   - Products in Stock card
   - Low Stock Items card
   - Recent transactions
   - Stock alerts

3. Take a screenshot:
   - **Windows**: Press `Windows + Shift + S` and select the area
   - **Mac**: Press `Cmd + Shift + 4` and drag to select
   - **Full Page**: Use browser extension like "GoFullPage" for a complete capture

## Step 2: Optimize the Screenshot

1. Recommended size: 1920x1080px or similar (16:9 ratio)
2. Format: PNG for best quality
3. File name: `dashboard-preview.png`
4. Optional: Use a tool like TinyPNG to compress the file

## Step 3: Add the Screenshot to Your Project

Save the screenshot to:

```
/public/dashboard-preview.png
```

## Step 4: Test

The image will automatically appear on your landing page between the Hero and Features sections!

## Alternative: Use a Live Dashboard Preview

If you want a live/interactive preview instead of a static image, you can:

1. Create an iframe pointing to your dashboard
2. Or use a service like ScreenSpace or Webflow to embed it
3. Just replace the `<img>` tag in `DashboardPreview.jsx`

## Styling Tips

- The image appears in a beautiful browser chrome mockup
- It has a subtle shadow and hover effect
- Two floating feature cards appear on the sides (desktop only)
- Bottom stats show social proof

Enjoy your beautiful landing page! 🚀
