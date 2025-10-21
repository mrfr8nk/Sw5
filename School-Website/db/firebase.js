// Central Firebase configuration and initialization
// This file contains all Firebase setup that can be imported by any page

// Import Firebase modules
import { initializeApp, getApps, getApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { 
  getAuth, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut, 
  onAuthStateChanged,
  updatePassword,
  updateProfile,
  reauthenticateWithCredential,
  EmailAuthProvider,
  GoogleAuthProvider,
  sendPasswordResetEmail,
  signInWithPopup,
  signInWithPhoneNumber,
  RecaptchaVerifier,
  sendEmailVerification,
  fetchSignInMethodsForEmail,
  linkWithCredential,
  linkWithPopup
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { 
  getFirestore, 
  doc, 
  setDoc, 
  getDoc, 
  collection, 
  addDoc, 
  getDocs, 
  query, 
  where, 
  orderBy, 
  updateDoc, 
  deleteDoc, 
  onSnapshot,
  serverTimestamp,
  limit,
  arrayUnion,
  runTransaction,
  increment,
  writeBatch
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { 
  getStorage, 
  ref, 
  uploadBytes, 
  getDownloadURL 
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-storage.js";

// Demo Firebase configuration - Use this incase u want to test my web
const firebaseConfig = {
  apiKey: "AIzaSyAR9J2Wz7Eu8dXRzDG8JNHcymLCUQUPJRo",
  authDomain: "deee-9ab53.firebaseapp.com",
  projectId: "deee-9ab53",
  storageBucket: "deee-9ab53.appspot.com",
  messagingSenderId: "399732664479",
  appId: "1:399732664479:web:b84ac30e8266cc51761aaa",
  measurementId: "G-524ZPBX42B"
};

/*
// For Firebase JS SDK v7.20.0 and later, measurementId is optional Dont use this one
const firebaseConfig = {
  apiKey: "AIzaSyCZHoYBIZIdJyatQD6XJrsKaiawa3pJlT8",
  authDomain: "stmaryshigh-725f8.firebaseapp.com",
  projectId: "stmaryshigh-725f8",
  storageBucket: "stmaryshigh-725f8.firebasestorage.app",
  messagingSenderId: "771130921198",
  appId: "1:771130921198:web:0b9dceb76ddcbaeb4c63ff",
  measurementId: "G-2LN724WCJC"
};
*/
// Initialize Firebase (idempotent - safe for incremental migration)
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

// Initialize Firebase services
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

// Export Firebase services and utilities for use in other files
export {
  // Firebase app
  app,
  
  // Firebase services (pre-initialized instances)
  auth,
  db,
  storage,
  
  // Firebase service factory functions (for flexible usage)
  getAuth,
  getFirestore,
  getStorage,
  
  // Auth functions
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updatePassword,
  updateProfile,
  reauthenticateWithCredential,
  EmailAuthProvider,
  GoogleAuthProvider,
  sendPasswordResetEmail,
  signInWithPopup,
  signInWithPhoneNumber,
  RecaptchaVerifier,
  sendEmailVerification,
  fetchSignInMethodsForEmail,
  linkWithCredential,
  linkWithPopup,
  
  // Firestore functions
  doc,
  setDoc,
  getDoc,
  collection,
  addDoc,
  getDocs,
  query,
  where,
  orderBy,
  updateDoc,
  deleteDoc,
  onSnapshot,
  serverTimestamp,
  limit,
  arrayUnion,
  runTransaction,
  increment,
  writeBatch,
  
  // Storage functions
  ref,
  uploadBytes,
  getDownloadURL
};
