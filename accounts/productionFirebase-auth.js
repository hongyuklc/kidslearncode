const _0x58c4da=_0x522b;(function(_0x480d4c,_0x55d499){const _0x486303=_0x522b,_0x1c5f6d=_0x480d4c();while(!![]){try{const _0x7f4666=parseInt(_0x486303(0x92))/0x1+-parseInt(_0x486303(0x8f))/0x2*(parseInt(_0x486303(0x8c))/0x3)+-parseInt(_0x486303(0x8a))/0x4*(-parseInt(_0x486303(0x75))/0x5)+-parseInt(_0x486303(0x9a))/0x6*(parseInt(_0x486303(0x7a))/0x7)+parseInt(_0x486303(0x67))/0x8+parseInt(_0x486303(0x65))/0x9+parseInt(_0x486303(0x6c))/0xa;if(_0x7f4666===_0x55d499)break;else _0x1c5f6d['push'](_0x1c5f6d['shift']());}catch(_0x498b55){_0x1c5f6d['push'](_0x1c5f6d['shift']());}}}(_0x35f3,0x1edf0));function _0x522b(_0x164a23,_0x5996b5){const _0x35f3e4=_0x35f3();return _0x522b=function(_0x522b34,_0x5d54f0){_0x522b34=_0x522b34-0x64;let _0x2a1e03=_0x35f3e4[_0x522b34];return _0x2a1e03;},_0x522b(_0x164a23,_0x5996b5);}import{initializeApp}from'https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js';import{GoogleAuthProvider,getAuth,signInWithEmailAndPassword,fetchSignInMethodsForEmail,onAuthStateChanged,signOut,sendPasswordResetEmail,signInWithPopup,OAuthProvider}from'https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js';const firebaseConfig={'apiKey':_0x58c4da(0x98),'authDomain':_0x58c4da(0x80),'projectId':'kids-learn-code','storageBucket':_0x58c4da(0x72),'messagingSenderId':_0x58c4da(0x8e),'appId':'1:244804111052:web:043a2285371f40ed385069','measurementId':_0x58c4da(0x95)},app=initializeApp(firebaseConfig),auth=getAuth(app);export function microsoftSignIn(){const _0x48f05e=_0x58c4da,_0x4be30=new OAuthProvider(_0x48f05e(0x97));_0x4be30[_0x48f05e(0x68)]({'tenant':_0x48f05e(0x6f)}),signInWithPopup(auth,_0x4be30)[_0x48f05e(0x96)](_0x5040cf=>{const _0x3077b4=_0x48f05e,_0x1f1905=OAuthProvider[_0x3077b4(0x76)](_0x5040cf),_0x19d079=_0x1f1905[_0x3077b4(0x7f)],_0x3bfa11=_0x1f1905[_0x3077b4(0x78)],_0x15b798=_0x5040cf[_0x3077b4(0x93)];document['getElementById'](_0x3077b4(0x88))[_0x3077b4(0x9d)]=_0x3077b4(0x83)+_0x15b798[_0x3077b4(0x86)],document[_0x3077b4(0x73)]('fields')[_0x3077b4(0x79)][_0x3077b4(0x9c)]=_0x3077b4(0x6a),document[_0x3077b4(0x73)]('message')[_0x3077b4(0x79)]['display']=_0x3077b4(0x87);})[_0x48f05e(0x94)](_0x2ae0d1=>{const _0x57f76a=_0x48f05e,_0x18b512=_0x2ae0d1[_0x57f76a(0x6e)],_0x5dea0a=_0x2ae0d1[_0x57f76a(0x91)];console['error'](_0x57f76a(0x69),_0x18b512,_0x5dea0a),document['getElementById'](_0x57f76a(0x88))[_0x57f76a(0x9d)]='Sign\x20in\x20failed';});}function _0x35f3(){const _0x2589da=['Login\x20failed:','accessToken','app.kidslearncode.org','Account\x20deleted\x20successfully.','Password\x20reset\x20email\x20sent!','Welcome,\x20','value','signin','displayName','block','result','welcome','12BqKcJl','Logout\x20successful!','177753rOtecX','fields','244804111052','8xWyaxF','delete','message','29208CydoMb','user','catch','G-KLT8C91VNS','then','microsoft.com','AIzaSyDMDuqV-p_QwykhdCV1kjbWgg0VC6AiX1o','error','1103262SWiDil','email','display','textContent','Login\x20successful!','1717128ehgPOR','Error\x20during\x20sign-in:','88648lGjulr','setCustomParameters','Sign\x20in\x20failed:','none','login','1144260lQuaFu','log','code','29a457a8-7fc8-4bb1-8901-70de1244cfeb','Password\x20reset\x20failed:','Logout\x20failed:','kids-learn-code.firebasestorage.app','getElementById','Login\x20failed:\x20Please\x20check\x20that\x20all\x20fields\x20are\x20valid','336370IqgqCq','credentialFromResult','password','idToken','style','7TkDlnp','Error\x20deleting\x20account:','logout','microsoftSignIn'];_0x35f3=function(){return _0x2589da;};return _0x35f3();};const provider=new GoogleAuthProvider();auth['languageCode']='it',provider['setCustomParameters']({'context':_0x58c4da(0x85)});export function GoogleSignIn(){const _0x53d1b7=_0x58c4da,_0x404f5e=getAuth(),_0x30fd62=new GoogleAuthProvider();signInWithPopup(_0x404f5e,_0x30fd62)[_0x53d1b7(0x96)](async _0x3514d4=>{const _0x45c0f1=_0x53d1b7,_0x2309fc=_0x3514d4[_0x45c0f1(0x93)],_0x3fb8ac=_0x2309fc[_0x45c0f1(0x9b)],_0x29a72a=await fetchSignInMethodsForEmail(_0x404f5e,_0x3fb8ac);if(_0x29a72a['length']===0x0)_0x2309fc[_0x45c0f1(0x90)]()[_0x45c0f1(0x96)](()=>{const _0x3c0d80=_0x45c0f1;console[_0x3c0d80(0x6d)](_0x3c0d80(0x81));})[_0x45c0f1(0x94)](_0x1e550d=>{const _0x15a49d=_0x45c0f1;console[_0x15a49d(0x99)](_0x15a49d(0x7b),_0x1e550d);});else{console[_0x45c0f1(0x6d)]('Signed\x20in\x20successfully:',_0x2309fc);const _0x1d5958=GoogleAuthProvider[_0x45c0f1(0x76)](_0x3514d4),_0x5283c3=_0x1d5958[_0x45c0f1(0x7f)];}})[_0x53d1b7(0x94)](_0x38b23a=>{const _0x4b09ef=_0x53d1b7;console[_0x4b09ef(0x99)](_0x4b09ef(0x66),_0x38b23a);});}export function login(){const _0x9a9399=_0x58c4da,_0x381eb4=document[_0x9a9399(0x73)](_0x9a9399(0x9b))[_0x9a9399(0x84)],_0x2d25b8=document['getElementById'](_0x9a9399(0x77))[_0x9a9399(0x84)];signInWithEmailAndPassword(auth,_0x381eb4,_0x2d25b8)[_0x9a9399(0x96)](_0x2bd84b=>{const _0x3a74f7=_0x9a9399,_0xa90463=_0x2bd84b['user'];document['getElementById'](_0x3a74f7(0x88))[_0x3a74f7(0x9d)]=_0x3a74f7(0x64),document[_0x3a74f7(0x73)](_0x3a74f7(0x8d))[_0x3a74f7(0x79)][_0x3a74f7(0x9c)]='none',document[_0x3a74f7(0x73)](_0x3a74f7(0x91))[_0x3a74f7(0x79)][_0x3a74f7(0x9c)]=_0x3a74f7(0x87);})['catch'](_0x142f51=>{const _0x24b7a4=_0x9a9399,_0x5830c4=_0x142f51['code'],_0x12535f=_0x142f51[_0x24b7a4(0x91)];console[_0x24b7a4(0x99)](_0x24b7a4(0x7e),_0x5830c4,_0x12535f),document[_0x24b7a4(0x73)]('result')[_0x24b7a4(0x9d)]=_0x24b7a4(0x74);});}export function logout(){signOut(auth)['then'](()=>{const _0x3140fb=_0x522b;document[_0x3140fb(0x73)](_0x3140fb(0x88))[_0x3140fb(0x9d)]=_0x3140fb(0x8b),document['getElementById'](_0x3140fb(0x8d))[_0x3140fb(0x79)][_0x3140fb(0x9c)]='block',document[_0x3140fb(0x73)](_0x3140fb(0x91))[_0x3140fb(0x79)][_0x3140fb(0x9c)]='none';})['catch'](_0x372d3d=>{const _0x10fe3e=_0x522b;console['error'](_0x10fe3e(0x71),_0x372d3d),document[_0x10fe3e(0x73)](_0x10fe3e(0x88))[_0x10fe3e(0x9d)]='Logout\x20failed:\x20'+_0x372d3d['message'];});}export function resetPassword(){const _0x1d4154=_0x58c4da,_0x3f9b24=document[_0x1d4154(0x73)](_0x1d4154(0x9b))['value'];sendPasswordResetEmail(auth,_0x3f9b24)[_0x1d4154(0x96)](()=>{const _0x173ccb=_0x1d4154;document['getElementById'](_0x173ccb(0x88))[_0x173ccb(0x9d)]=_0x173ccb(0x82);})[_0x1d4154(0x94)](_0x5c9c9b=>{const _0x70adcb=_0x1d4154,_0x338e02=_0x5c9c9b[_0x70adcb(0x6e)],_0xee07e6=_0x5c9c9b[_0x70adcb(0x91)];console[_0x70adcb(0x99)](_0x70adcb(0x70),_0x338e02,_0xee07e6),document[_0x70adcb(0x73)](_0x70adcb(0x88))[_0x70adcb(0x9d)]='Password\x20reset\x20failed:\x20Please\x20send\x20a\x20valid\x20email\x20address';});}onAuthStateChanged(auth,_0x32a618=>{const _0x2912e7=_0x58c4da;_0x32a618?(document[_0x2912e7(0x73)](_0x2912e7(0x8d))[_0x2912e7(0x79)][_0x2912e7(0x9c)]='none',document['getElementById'](_0x2912e7(0x91))[_0x2912e7(0x79)][_0x2912e7(0x9c)]=_0x2912e7(0x87),document['getElementById'](_0x2912e7(0x89))[_0x2912e7(0x9d)]='Welcome,\x20Email:\x20'+_0x32a618[_0x2912e7(0x9b)]):(document[_0x2912e7(0x73)](_0x2912e7(0x8d))[_0x2912e7(0x79)][_0x2912e7(0x9c)]='block',document['getElementById']('message')[_0x2912e7(0x79)]['display']=_0x2912e7(0x6a));}),window[_0x58c4da(0x7d)]=microsoftSignIn,window[_0x58c4da(0x6b)]=login,window[_0x58c4da(0x7c)]=logout,window['resetPassword']=resetPassword,window['GoogleSignIn']=GoogleSignIn;