
# Plan: Add Deepfake Detection Visibility & Create Vibe Intelligence Logo

## Summary
This plan addresses two main requests:
1. Making the Deepfake Detection service visible across the site (Services page, Footer)
2. Creating a new AI-generated logo for "Vibe Intelligence"

---

## Part 1: Deepfake Detection Page Visibility

### Current State
- The Deepfake Detection page exists at `/deepfake-detection` and is properly routed
- The service card appears on the **homepage** via `ServicesCards` component
- **However**, the `/services` page uses a completely different layout (tier-based pricing) and doesn't include the individual service cards
- The Footer doesn't link to Deepfake Detection

### Changes Required

#### 1.1 Update Services Page (`src/pages/Services.tsx`)
Add the `ServicesCards` component to the Services page so all services (including Deepfake Detection) are visible:
- Import `ServicesCards` component
- Add it after the existing tier comparison section
- This ensures consistent service display between homepage and services page

#### 1.2 Update Footer (`src/components/Footer.tsx`)
Add a "Deepfake Detection" link in the Services navigation section:
- Add new Link component pointing to `/deepfake-detection`
- Place it after existing service links

---

## Part 2: Create Vibe Intelligence Logo

### Approach
Use the Nano banana model (Google Gemini) via the Lovable AI Gateway to generate a professional logo for "Vibe Intelligence".

### Implementation
1. Create a utility function to call the AI image generation API
2. Create a simple admin/utility page or script to generate the logo
3. The generated logo will be saved and used to replace the current Disruptily logo

### Logo Design Direction
- Modern, tech-focused design suitable for an AI consulting company
- Text: "Vibe Intelligence" or "VI" monogram
- Colors: Professional blues/purples that align with current site accent colors
- Style: Clean, minimalist, corporate-tech aesthetic

---

## Technical Details

### Files to Modify
1. `src/pages/Services.tsx` - Add ServicesCards component
2. `src/components/Footer.tsx` - Add Deepfake Detection link
3. New file: `src/pages/LogoGenerator.tsx` - Utility page for logo generation
4. `src/App.tsx` - Add route for logo generator (temporary)

### Logo Generation Implementation
```text
+------------------+     +-------------------+     +------------------+
| LogoGenerator    | --> | AI Gateway API    | --> | Generated Logo   |
| Page (form)      |     | (Gemini 2.5)      |     | (base64 image)   |
+------------------+     +-------------------+     +------------------+
                                                          |
                                                          v
                                               +------------------+
                                               | Download/Save    |
                                               | to use as logo   |
                                               +------------------+
```

### API Configuration
- The logo generator will need a LOVABLE_API_KEY to authenticate
- User will need to add this key as a secret or provide it in an input field
- Once generated, the logo can be downloaded and uploaded to replace the current one

---

## Summary of Changes
| File | Action |
|------|--------|
| `src/pages/Services.tsx` | Import and add ServicesCards component |
| `src/components/Footer.tsx` | Add Deepfake Detection link |
| `src/pages/LogoGenerator.tsx` | Create new page for AI logo generation |
| `src/App.tsx` | Add temporary route for logo generator |
