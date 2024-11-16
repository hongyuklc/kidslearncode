// Import Firebase modules
import { initializeApp } from ' https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js  '
import { getAuth, confirmPasswordReset} from ' https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js'


// Your Firebase configuration
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

// Get query parameters from the URL
const urlParams = new URLSearchParams(window.location.search);
const mode = urlParams.get('mode');
const oobCode = urlParams.get('oobCode');

// Handle the password reset request
export function setPassword(){
    var newPassword = document.getElementById('newPassword').value;
    if (mode === 'resetPassword') {
        // Verify the request
        confirmPasswordReset(auth, oobCode, newPassword)
            .then(() => {
                // Password reset successful
                // Display a success message
                document.getElementById('result').textContent = "Password reset successful!";
                console.log("Password reset successful!");
            })
            .catch((error) => {
                // Handle errors
                // Display an error message
                console.error("Error resetting password:", error);
                document.getElementById('result').textContent = "Error resetting password";

            });
    }

}
window.setPassword = setPassword;