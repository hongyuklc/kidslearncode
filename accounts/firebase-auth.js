import { initializeApp } from 'https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js'
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged, signOut, sendPasswordResetEmail, signInWithPopup, OAuthProvider } from 'https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js';

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

export function microsoftSignIn(){
    const provider = new OAuthProvider('microsoft.com');
    provider.setCustomParameters({
        tenant: '29a457a8-7fc8-4bb1-8901-70de1244cfeb'
    });
    signInWithPopup(auth, provider)
        .then((result) => {
            // User signed in
            const credential = OAuthProvider.credentialFromResult(result);
            const accessToken = credential.accessToken;
            const idToken = credential.idToken;
            const user = result.user;
            document.getElementById('result').textContent = `Welcome, ${user.displayName}`;
            document.getElementById("fields").style.display = 'none';
            document.getElementById("message").style.display = "block";
        })
        .catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error('Sign in failed:', errorCode, errorMessage);
            document.getElementById('result').textContent = `Sign in failed: ${errorMessage}`;
        });
};
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
export function resetPassword() {
    const email = document.getElementById('email').value;
    sendPasswordResetEmail(auth, email)
        .then(() => {
            // Email sent.
            document.getElementById('result').textContent = 'Password reset email sent!';
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error('Password reset failed:', errorCode, errorMessage);
            document.getElementById('result').textContent = `Password reset failed: Please send a valid email address`;
        });
}
onAuthStateChanged(auth, (user) => {
    if (user) {
        // User is signed in
        document.getElementById("fields").style.display = 'none';
        document.getElementById("message").style.display = "block";


    } else {
        // No user is signed in
        document.getElementById("fields").style.display = 'block';
        document.getElementById("message").style.display = "none";





    }
});
//Run "npx vite" to test out the code
window.microsoftSignIn = microsoftSignIn;
window.login = login;
window.logout = logout;
window.resetPassword = resetPassword;
