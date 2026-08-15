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
  apiKey: "AIzaSyDycZGza5s2c8CE4ZjRy5jJzqIzYoTjHAQ",
  authDomain: "hafta-bazari-slemani.firebaseapp.com",
  projectId: "hafta-bazari-slemani",
  storageBucket: "hafta-bazari-slemani.firebasestorage.app",
  messagingSenderId: "1088720423991",
  appId: "1:1088720423991:web:cec4efcaa20ed9391043b2"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
