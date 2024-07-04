import { auth, db, storage } from "./firebase";
import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
  fetchSignInMethodsForEmail,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { Store, registerInDevTools } from "pullstate";
import { collection, addDoc, doc, getDoc, setDoc } from "firebase/firestore";
import { ref, listAll, getDownloadURL } from "firebase/storage";

export const AuthStore = new Store({
  isLoggedIn: false,
  initialized: false,
});
