const _0x4a0c3e=_0x275b;(function(_0x5433a3,_0x33f802){const _0xfb08ce=_0x275b,_0x25a72a=_0x5433a3();while(!![]){try{const _0xc17833=-parseInt(_0xfb08ce(0x132))/0x1*(-parseInt(_0xfb08ce(0x128))/0x2)+parseInt(_0xfb08ce(0x12c))/0x3*(-parseInt(_0xfb08ce(0x11c))/0x4)+parseInt(_0xfb08ce(0x114))/0x5+-parseInt(_0xfb08ce(0x12d))/0x6*(-parseInt(_0xfb08ce(0x12e))/0x7)+parseInt(_0xfb08ce(0x13e))/0x8+parseInt(_0xfb08ce(0x13a))/0x9*(parseInt(_0xfb08ce(0x137))/0xa)+-parseInt(_0xfb08ce(0x12a))/0xb;if(_0xc17833===_0x33f802)break;else _0x25a72a['push'](_0x25a72a['shift']());}catch(_0x176a9f){_0x25a72a['push'](_0x25a72a['shift']());}}}(_0x2115,0x228dd));import{initializeApp}from'https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js';import{GoogleAuthProvider,getAuth,signInWithEmailAndPassword,fetchSignInMethodsForEmail,onAuthStateChanged,signOut,sendPasswordResetEmail,signInWithPopup,OAuthProvider}from'https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js';const firebaseConfig={'apiKey':_0x4a0c3e(0x142),'authDomain':_0x4a0c3e(0x11e),'projectId':'kids-learn-code','storageBucket':_0x4a0c3e(0x122),'messagingSenderId':_0x4a0c3e(0x136),'appId':_0x4a0c3e(0x11a),'measurementId':_0x4a0c3e(0x112)},app=initializeApp(firebaseConfig),auth=getAuth(app);function _0x2115(){const _0x23f0ca=['Password\x20reset\x20failed:\x20Please\x20send\x20a\x20valid\x20email\x20address','microsoftSignIn','getElementById','G-KLT8C91VNS','none','431820oXFClD','Sign\x20in\x20failed','Logout\x20failed:','GoogleSignIn','fields','textContent','1:244804111052:web:043a2285371f40ed385069','value','4WXuOGb','logout','app.kidslearncode.org','block','welcome','password','kids-learn-code.firebasestorage.app','display','Logout\x20failed:\x20','catch','Login\x20successful!','languageCode','4dqwOHR','idToken','931106nSPXUw','code','668337UCJTOI','198gkanCC','30863KaromS','Logout\x20successful!','Password\x20reset\x20failed:','style','27131FkBbfh','displayName','user','microsoft.com','244804111052','10KpNdiY','then','resetPassword','699183lINBki','email','29a457a8-7fc8-4bb1-8901-70de1244cfeb','message','681184jxEBWr','error','Password\x20reset\x20email\x20sent!','result','AIzaSyDMDuqV-p_QwykhdCV1kjbWgg0VC6AiX1o'];_0x2115=function(){return _0x23f0ca;};return _0x2115();}export function microsoftSignIn(){const _0x12b189=_0x4a0c3e,_0x744e=new OAuthProvider(_0x12b189(0x135));_0x744e['setCustomParameters']({'tenant':_0x12b189(0x13c)}),signInWithPopup(auth,_0x744e)[_0x12b189(0x138)](_0x447103=>{const _0x540e65=_0x12b189,_0x2afda0=OAuthProvider['credentialFromResult'](_0x447103),_0x1d653b=_0x2afda0['accessToken'],_0x3f6cbf=_0x2afda0[_0x540e65(0x129)],_0x56a145=_0x447103['user'];document[_0x540e65(0x111)](_0x540e65(0x141))[_0x540e65(0x119)]='Welcome,\x20'+_0x56a145[_0x540e65(0x133)],document[_0x540e65(0x111)]('fields')[_0x540e65(0x131)][_0x540e65(0x123)]=_0x540e65(0x113),document[_0x540e65(0x111)]('message')[_0x540e65(0x131)][_0x540e65(0x123)]=_0x540e65(0x11f);})[_0x12b189(0x125)](_0xf09a5b=>{const _0x4acb98=_0x12b189,_0x356e3=_0xf09a5b[_0x4acb98(0x12b)],_0x58337e=_0xf09a5b[_0x4acb98(0x13d)];console[_0x4acb98(0x13f)]('Sign\x20in\x20failed:',_0x356e3,_0x58337e),document[_0x4acb98(0x111)](_0x4acb98(0x141))['textContent']=_0x4acb98(0x115);});};const provider=new GoogleAuthProvider();auth[_0x4a0c3e(0x127)]='it',provider['setCustomParameters']({'context':'signin'});export function GoogleSignIn(){const _0x5ee4b5=_0x4a0c3e,_0x597dc1=getAuth(),_0x4a6d44=new GoogleAuthProvider();signInWithPopup(_0x597dc1,_0x4a6d44)['then'](async _0x562941=>{const _0x3b661a=_0x275b,_0x3891f5=_0x562941[_0x3b661a(0x134)],_0x9eac1d=_0x3891f5[_0x3b661a(0x13b)];})[_0x5ee4b5(0x125)](_0x495261=>{const _0x559e2c=_0x5ee4b5;console[_0x559e2c(0x13f)]('Error\x20during\x20sign-in:',_0x495261);});}export function login(){const _0x4adc76=_0x4a0c3e,_0x30b90f=document[_0x4adc76(0x111)]('email')['value'],_0x217173=document[_0x4adc76(0x111)](_0x4adc76(0x121))['value'];signInWithEmailAndPassword(auth,_0x30b90f,_0x217173)[_0x4adc76(0x138)](_0x314b4d=>{const _0x13e73d=_0x4adc76,_0x50981b=_0x314b4d[_0x13e73d(0x134)];document[_0x13e73d(0x111)](_0x13e73d(0x141))[_0x13e73d(0x119)]=_0x13e73d(0x126),document['getElementById'](_0x13e73d(0x118))['style'][_0x13e73d(0x123)]=_0x13e73d(0x113),document[_0x13e73d(0x111)]('message')[_0x13e73d(0x131)][_0x13e73d(0x123)]=_0x13e73d(0x11f);})[_0x4adc76(0x125)](_0x511933=>{const _0x557fc3=_0x4adc76,_0x1b10f4=_0x511933[_0x557fc3(0x12b)],_0x2b681e=_0x511933[_0x557fc3(0x13d)];console['error']('Login\x20failed:',_0x1b10f4,_0x2b681e),document[_0x557fc3(0x111)](_0x557fc3(0x141))['textContent']='Login\x20failed:\x20Please\x20check\x20that\x20all\x20fields\x20are\x20valid';});}function _0x275b(_0x109f5a,_0x56a5d0){const _0x211505=_0x2115();return _0x275b=function(_0x275b4c,_0x25da76){_0x275b4c=_0x275b4c-0x110;let _0x4bafb8=_0x211505[_0x275b4c];return _0x4bafb8;},_0x275b(_0x109f5a,_0x56a5d0);}export function logout(){const _0x27e26f=_0x4a0c3e;signOut(auth)['then'](()=>{const _0x1af7bd=_0x275b;document[_0x1af7bd(0x111)](_0x1af7bd(0x141))[_0x1af7bd(0x119)]=_0x1af7bd(0x12f),document['getElementById'](_0x1af7bd(0x118))[_0x1af7bd(0x131)]['display']=_0x1af7bd(0x11f),document['getElementById'](_0x1af7bd(0x13d))[_0x1af7bd(0x131)][_0x1af7bd(0x123)]=_0x1af7bd(0x113);})[_0x27e26f(0x125)](_0x3d80d8=>{const _0xb784f0=_0x27e26f;console[_0xb784f0(0x13f)](_0xb784f0(0x116),_0x3d80d8),document[_0xb784f0(0x111)](_0xb784f0(0x141))['textContent']=_0xb784f0(0x124)+_0x3d80d8['message'];});}export function resetPassword(){const _0x1524db=_0x4a0c3e,_0x1d03ed=document[_0x1524db(0x111)](_0x1524db(0x13b))[_0x1524db(0x11b)];sendPasswordResetEmail(auth,_0x1d03ed)['then'](()=>{const _0x19a616=_0x1524db;document[_0x19a616(0x111)](_0x19a616(0x141))['textContent']=_0x19a616(0x140);})['catch'](_0x1b2c30=>{const _0x2fb1d4=_0x1524db,_0x28a9f2=_0x1b2c30[_0x2fb1d4(0x12b)],_0x311378=_0x1b2c30['message'];console[_0x2fb1d4(0x13f)](_0x2fb1d4(0x130),_0x28a9f2,_0x311378),document[_0x2fb1d4(0x111)](_0x2fb1d4(0x141))[_0x2fb1d4(0x119)]=_0x2fb1d4(0x143);});}onAuthStateChanged(auth,_0x6d0e09=>{const _0x9ac025=_0x4a0c3e;_0x6d0e09?(document[_0x9ac025(0x111)](_0x9ac025(0x118))[_0x9ac025(0x131)][_0x9ac025(0x123)]=_0x9ac025(0x113),document[_0x9ac025(0x111)](_0x9ac025(0x13d))['style'][_0x9ac025(0x123)]=_0x9ac025(0x11f),document[_0x9ac025(0x111)](_0x9ac025(0x120))['textContent']='Welcome,\x20Email:\x20'+_0x6d0e09[_0x9ac025(0x13b)]):(document[_0x9ac025(0x111)](_0x9ac025(0x118))[_0x9ac025(0x131)][_0x9ac025(0x123)]=_0x9ac025(0x11f),document[_0x9ac025(0x111)](_0x9ac025(0x13d))['style'][_0x9ac025(0x123)]=_0x9ac025(0x113));}),window[_0x4a0c3e(0x110)]=microsoftSignIn,window['login']=login,window[_0x4a0c3e(0x11d)]=logout,window[_0x4a0c3e(0x139)]=resetPassword,window[_0x4a0c3e(0x117)]=GoogleSignIn;