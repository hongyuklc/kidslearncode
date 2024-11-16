import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDMDuqV-p_QwykhdCV1kjbWgg0VC6AiX1o",
    authDomain: "kids-learn-code.firebaseapp.com",
    projectId: "kids-learn-code",
    storageBucket: "kids-learn-code.firebasestorage.app",
    messagingSenderId: "244804111052",
    appId: "1:244804111052:web:043a2285371f40ed385069",
    measurementId: "G-KLT8C91VNS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export function login() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            document.getElementById('result').textContent = 'Login successful!';
            document.getElementById("fields").style.display = 'none';
            document.getElementById("message").style.display = "block";
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error('Login failed:', errorCode, errorMessage);
            document.getElementById('result').textContent = `Login failed: Please check that all fields are valid`;
        });
}
export function logout() {
    signOut(auth).then(() => {
        // Sign-out successful
        document.getElementById('result').textContent = 'Logout successful!';
        document.getElementById("fields").style.display = 'block';
        document.getElementById("message").style.display = "none";
    }).catch((error) => {
        // An error happened
        console.error('Logout failed:', error);
        document.getElementById('result').textContent = `Logout failed: ${error.message}`;
    });
}
// Check if user is logged in
onAuthStateChanged(auth, (user) => {
    if (user) {
        // User is signed in
        document.getElementById("fields").style.display = 'none';
        document.getElementById("message").style.display = "block";
        document.getElementById("IDEMessage").style.display = 'none';
        document.getElementById("IDE").style.display = "block";
    } else {
        // No user is signed in
        document.getElementById("fields").style.display = 'block';
        document.getElementById("message").style.display = "none";
        document.getElementById("IDEMessage").style.display = 'block';
        document.getElementById("IDE").style.display = "none";
    }
});
//Run "npx vite" to test out the code