const _0x27c363=_0x240b;(function(_0x5448df,_0xa575a4){const _0xa84c7c=_0x240b,_0x26f34b=_0x5448df();while(!![]){try{const _0x3edd88=-parseInt(_0xa84c7c(0x1b3))/0x1*(parseInt(_0xa84c7c(0x1ae))/0x2)+parseInt(_0xa84c7c(0x19f))/0x3*(-parseInt(_0xa84c7c(0x1a8))/0x4)+-parseInt(_0xa84c7c(0x1ad))/0x5*(parseInt(_0xa84c7c(0x1c1))/0x6)+-parseInt(_0xa84c7c(0x1a3))/0x7*(-parseInt(_0xa84c7c(0x1b4))/0x8)+parseInt(_0xa84c7c(0x1d0))/0x9+parseInt(_0xa84c7c(0x1c5))/0xa*(-parseInt(_0xa84c7c(0x1cd))/0xb)+parseInt(_0xa84c7c(0x1a9))/0xc;if(_0x3edd88===_0xa575a4)break;else _0x26f34b['push'](_0x26f34b['shift']());}catch(_0x48ef30){_0x26f34b['push'](_0x26f34b['shift']());}}}(_0x267e,0x4a1b3));import{initializeApp}from'https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js';import{getAuth,signInWithEmailAndPassword,onAuthStateChanged,signOut,sendPasswordResetEmail,signInWithPopup,OAuthProvider}from'https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js';const firebaseConfig={'apiKey':_0x27c363(0x1a6),'authDomain':'app.kidslearncode.org','projectId':_0x27c363(0x1c3),'storageBucket':_0x27c363(0x1c7),'messagingSenderId':_0x27c363(0x1ba),'appId':_0x27c363(0x1b1),'measurementId':_0x27c363(0x19e)},app=initializeApp(firebaseConfig),auth=getAuth(app);function _0x240b(_0x3e8fdc,_0x426724){const _0x267ef4=_0x267e();return _0x240b=function(_0x240bcc,_0x3e25fa){_0x240bcc=_0x240bcc-0x19b;let _0x4809d2=_0x267ef4[_0x240bcc];return _0x4809d2;},_0x240b(_0x3e8fdc,_0x426724);}function _0x267e(){const _0x5a3d4c=['credentialFromResult','error','55aYNSXN','1926zfEibc','microsoft.com','getElementById','1:244804111052:web:043a2285371f40ed385069','microsoftSignIn','79jbvDEq','52424lHtNfg','result','Welcome,\x20','fields','Login\x20failed:','Logout\x20successful!','244804111052','block','Login\x20successful!','Sign\x20in\x20failed','login','then','code','169242yqVYmi','welcome','kids-learn-code','displayName','50qIuLxC','idToken','kids-learn-code.firebasestorage.app','Sign\x20in\x20failed:','Password\x20reset\x20email\x20sent!','none','user','Logout\x20failed:','1074722onnLXq','Welcome,\x20Email:\x20','message','519138nuVIma','password','resetPassword','textContent','value','G-KLT8C91VNS','85953mJFvJp','catch','email','Password\x20reset\x20failed:','56bmgoCc','Password\x20reset\x20failed:\x20Please\x20send\x20a\x20valid\x20email\x20address','display','AIzaSyDMDuqV-p_QwykhdCV1kjbWgg0VC6AiX1o','logout','8fHWhjN','13507188NKhkHe','style'];_0x267e=function(){return _0x5a3d4c;};return _0x267e();}export function microsoftSignIn(){const _0x4f329e=_0x27c363,_0x339a24=new OAuthProvider(_0x4f329e(0x1af));_0x339a24['setCustomParameters']({'tenant':'29a457a8-7fc8-4bb1-8901-70de1244cfeb'}),signInWithPopup(auth,_0x339a24)[_0x4f329e(0x1bf)](_0x139ae0=>{const _0x21d114=_0x4f329e,_0x4c4552=OAuthProvider[_0x21d114(0x1ab)](_0x139ae0),_0x34d275=_0x4c4552['accessToken'],_0x16a8e0=_0x4c4552[_0x21d114(0x1c6)],_0x563f24=_0x139ae0[_0x21d114(0x1cb)];document[_0x21d114(0x1b0)](_0x21d114(0x1b5))[_0x21d114(0x19c)]=_0x21d114(0x1b6)+_0x563f24[_0x21d114(0x1c4)],document[_0x21d114(0x1b0)](_0x21d114(0x1b7))[_0x21d114(0x1aa)][_0x21d114(0x1a5)]=_0x21d114(0x1ca),document['getElementById']('message')[_0x21d114(0x1aa)][_0x21d114(0x1a5)]=_0x21d114(0x1bb);})[_0x4f329e(0x1a0)](_0x4b7528=>{const _0x3f3e3b=_0x4f329e,_0x395cf4=_0x4b7528[_0x3f3e3b(0x1c0)],_0x180969=_0x4b7528[_0x3f3e3b(0x1cf)];console['error'](_0x3f3e3b(0x1c8),_0x395cf4,_0x180969),document[_0x3f3e3b(0x1b0)](_0x3f3e3b(0x1b5))['textContent']=_0x3f3e3b(0x1bd);});};export function login(){const _0x28c861=_0x27c363,_0x17dd81=document['getElementById'](_0x28c861(0x1a1))[_0x28c861(0x19d)],_0x598753=document[_0x28c861(0x1b0)](_0x28c861(0x1d1))[_0x28c861(0x19d)];signInWithEmailAndPassword(auth,_0x17dd81,_0x598753)[_0x28c861(0x1bf)](_0x3c3485=>{const _0x476cb3=_0x28c861,_0x467f16=_0x3c3485[_0x476cb3(0x1cb)];document[_0x476cb3(0x1b0)](_0x476cb3(0x1b5))[_0x476cb3(0x19c)]=_0x476cb3(0x1bc),document['getElementById'](_0x476cb3(0x1b7))[_0x476cb3(0x1aa)][_0x476cb3(0x1a5)]=_0x476cb3(0x1ca),document['getElementById']('message')[_0x476cb3(0x1aa)][_0x476cb3(0x1a5)]=_0x476cb3(0x1bb);})[_0x28c861(0x1a0)](_0x185cf0=>{const _0x324a47=_0x28c861,_0x2006f5=_0x185cf0['code'],_0x1b0ab8=_0x185cf0[_0x324a47(0x1cf)];console[_0x324a47(0x1ac)](_0x324a47(0x1b8),_0x2006f5,_0x1b0ab8),document[_0x324a47(0x1b0)](_0x324a47(0x1b5))[_0x324a47(0x19c)]='Login\x20failed:\x20Please\x20check\x20that\x20all\x20fields\x20are\x20valid';});}export function logout(){signOut(auth)['then'](()=>{const _0x227729=_0x240b;document[_0x227729(0x1b0)](_0x227729(0x1b5))[_0x227729(0x19c)]=_0x227729(0x1b9),document[_0x227729(0x1b0)](_0x227729(0x1b7))[_0x227729(0x1aa)][_0x227729(0x1a5)]=_0x227729(0x1bb),document[_0x227729(0x1b0)](_0x227729(0x1cf))['style'][_0x227729(0x1a5)]='none';})['catch'](_0x519e34=>{const _0x4d2f27=_0x240b;console[_0x4d2f27(0x1ac)](_0x4d2f27(0x1cc),_0x519e34),document['getElementById'](_0x4d2f27(0x1b5))['textContent']='Logout\x20failed:\x20'+_0x519e34[_0x4d2f27(0x1cf)];});}export function resetPassword(){const _0x2c442e=_0x27c363,_0x1c3cfa=document[_0x2c442e(0x1b0)]('email')['value'];sendPasswordResetEmail(auth,_0x1c3cfa)[_0x2c442e(0x1bf)](()=>{const _0x52f7c3=_0x2c442e;document[_0x52f7c3(0x1b0)]('result')[_0x52f7c3(0x19c)]=_0x52f7c3(0x1c9);})['catch'](_0x455b02=>{const _0x4a0ae2=_0x2c442e,_0x41712b=_0x455b02[_0x4a0ae2(0x1c0)],_0xe7069b=_0x455b02[_0x4a0ae2(0x1cf)];console[_0x4a0ae2(0x1ac)](_0x4a0ae2(0x1a2),_0x41712b,_0xe7069b),document[_0x4a0ae2(0x1b0)](_0x4a0ae2(0x1b5))[_0x4a0ae2(0x19c)]=_0x4a0ae2(0x1a4);});}onAuthStateChanged(auth,_0x4ca93e=>{const _0x450a0f=_0x27c363;_0x4ca93e?(document[_0x450a0f(0x1b0)](_0x450a0f(0x1b7))[_0x450a0f(0x1aa)][_0x450a0f(0x1a5)]=_0x450a0f(0x1ca),document[_0x450a0f(0x1b0)](_0x450a0f(0x1cf))['style'][_0x450a0f(0x1a5)]=_0x450a0f(0x1bb),document[_0x450a0f(0x1b0)](_0x450a0f(0x1c2))[_0x450a0f(0x19c)]=_0x450a0f(0x1ce)+_0x4ca93e['email']):(document[_0x450a0f(0x1b0)](_0x450a0f(0x1b7))['style']['display']='block',document[_0x450a0f(0x1b0)](_0x450a0f(0x1cf))['style']['display']=_0x450a0f(0x1ca));}),window[_0x27c363(0x1b2)]=microsoftSignIn,window[_0x27c363(0x1be)]=login,window[_0x27c363(0x1a7)]=logout,window[_0x27c363(0x19b)]=resetPassword;