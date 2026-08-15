// ==========================================================
// Firebase Configuration
// ==========================================================
// 1. Go to https://console.firebase.google.com
// 2. Create a free project (any name, e.g. "hafta-bazar-market")
// 3. Project Settings (gear icon) > General > "Your apps" > Web app (</>)
// 4. Copy the config object Firebase gives you and paste the values below
// 5. Enable "Firestore Database" (Build > Firestore Database > Create database,
//    start in production mode) and "Authentication" (Build > Authentication >
//    Sign-in method > enable "Email/Password")
// 6. Set your Firestore Security Rules (Firestore Database > Rules) to:
//
//    rules_version = '2';
//    service cloud.firestore {
//      match /databases/{database}/documents {
//        match /products/{productId} {
//          allow read: if true;
//          allow write: if request.auth != null;
//        }
//      }
//    }
//
// 7. Create your admin login: Authentication > Users > Add user
//    (enter an email + password for yourself/your employees)
// ==========================================================

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
