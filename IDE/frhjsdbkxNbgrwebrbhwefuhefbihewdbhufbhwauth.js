import { initializeApp } from 'https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js';
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged, signOut } from 'https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js';

const firebaseConfig = {
    apiKey: "AIzaSyDMDuqV-p_QwykhdCV1kjbWgg0VC6AiX1o",
    authDomain: "app.kidslearncode.org",
    projectId: "kids-learn-code",
    storageBucket: "kids-learn-code.firebasestorage.app",
    messagingSenderId: "244804111052",
    appId: "1:244804111052:web:043a2285371f40ed385069",
    measurementId: "G-KLT8C91VNS"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

onAuthStateChanged(auth, (user) => {
    if (user) {
        console.log('Welcome');
        document.getElementById('CODEEDITOR').style.display = 'block';
        document.getElementById('message').style.display = 'none';

    } else {
        document.getElementById('CODEEDITOR').style.display = 'none';
        document.getElementById('message').style.display = 'block';


    }
});