# Hafta Bazari Slemani — Market Cashier System

A price-checker / barcode scanner + shopping cart for customers and staff, with a
protected admin panel for managing products. Product data is stored in the cloud
(Firebase Firestore), so every phone that opens the site sees the same live prices.

## Files
- `index.html` — public page: manual barcode entry, camera barcode scanning, cart, totals.
- `admin.html` — staff/admin page: login required, add / edit / delete products.
- `firebase-config.js` — your Firebase project keys (shared by both pages).
- `logo.png` — your market logo, shown on both pages.

## 1. Create your free Firebase project (one-time setup)
1. Go to https://console.firebase.google.com and create a new project (any name).
2. In the left menu: **Build > Firestore Database > Create database**. Start in
   **production mode**, pick a region close to you.
3. In the left menu: **Build > Authentication > Sign-in method** → enable
   **Email/Password**.
4. **Build > Authentication > Users > Add user** — create a login (email +
   password) for yourself and each employee who should be able to add/edit prices.
5. **Project settings (gear icon) > General > Your apps** → click the `</>` (Web)
   icon → register an app (any nickname) → Firebase shows you a `firebaseConfig`
   object.
6. Open `firebase-config.js` in this folder and replace the placeholder values
   (`YOUR_API_KEY`, etc.) with the real values Firebase gave you.

## 2. Set Firestore security rules
In **Firestore Database > Rules**, replace the default rules with:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /products/{productId} {
      allow read: if true;
      allow write: if request.auth != null;
    }
  }
}
```

This means: anyone can look up prices (read), but only someone logged in through
`admin.html` can add, edit, or delete products (write). Click **Publish**.

## 3. Host it on GitHub Pages
1. Create a GitHub repository and upload all the files in this folder
   (`index.html`, `admin.html`, `firebase-config.js`, `logo.png`).
2. Repo **Settings > Pages** → set Source to your main branch, root folder.
3. GitHub gives you a link like `https://yourname.github.io/repo-name/` — that's
   your public price-checker. Share that link (or a QR code of it) with customers
   and staff.
4. Staff open the same link + `/admin.html` (e.g.
   `https://yourname.github.io/repo-name/admin.html`) and log in with the account
   you created in step 1.4.

## Notes on security
- `admin.html` is a normal page anyone can visit, but they can't change anything
  without logging in — Firestore itself blocks writes from anyone not signed in,
  per the rules above. Only give the login email/password to trusted staff.
- The camera scanner needs HTTPS to work in most browsers — GitHub Pages serves
  everything over HTTPS automatically, so this works out of the box once hosted.
- If you ever need to add more staff, just add another user under
  **Authentication > Users** — no code changes needed.
