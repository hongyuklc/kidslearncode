const _0x2339a4 = _0xffb6;
(function(_0x5d93bd, _0x1b3c39) {
    const _0x107893 = _0xffb6,
        _0x2a4935 = _0x5d93bd();
    while (!![]) {
        try {
            const _0x2e7cfa = -parseInt(_0x107893(0x16b)) / 0x1 + -parseInt(_0x107893(0x175)) / 0x2 * (-parseInt(_0x107893(0x16d)) / 0x3) + parseInt(_0x107893(0x160)) / 0x4 * (-parseInt(_0x107893(0x15e)) / 0x5) + -parseInt(_0x107893(0x172)) / 0x6 + -parseInt(_0x107893(0x15f)) / 0x7 * (parseInt(_0x107893(0x16a)) / 0x8) + parseInt(_0x107893(0x178)) / 0x9 * (parseInt(_0x107893(0x163)) / 0xa) + -parseInt(_0x107893(0x170)) / 0xb * (-parseInt(_0x107893(0x16e)) / 0xc);
            if (_0x2e7cfa === _0x1b3c39)
                break;
            else
                _0x2a4935['push'](_0x2a4935['shift']());
        } catch (_0x5e3daa) {
            _0x2a4935['push'](_0x2a4935['shift']());
        }
    }
}(_0x16ae, 0xefa74));
import { initializeApp } from '\x20https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js\x20\x20';
import { getAuth, confirmPasswordReset } from '\x20https://www.gstatic.com/firebasejs/11.0.2/sdfxvhbjnsjfhadknauth.js';
function _0xffb6(_0x446e1f, _0x515bca) {
    const _0x16ae41 = _0x16ae();
    return _0xffb6 = function(_0xffb64f, _0x1dd5da) {
        _0xffb64f = _0xffb64f - 0x15c;
        let _0x54caa1 = _0x16ae41[_0xffb64f];
        return _0x54caa1;
    }, _0xffb6(_0x446e1f, _0x515bca);
}
function _0x16ae() {
    const _0x121f63 = ['1:244804111052:web:043a2285371f40ed385069', '244804111052', '5uMrXHb', '21wVulbD', '5153568XUEnLZ', 'textContent', 'location', '780nFaViJ', 'getElementById', 'Error\x20resetting\x20password:', 'kids-learn-code', 'AIzaSyDMDuqV-p_QwykhdCV1kjbWgg0VC6AiX1o', 'value', 'oobCode', '1425192fdrqrM', '1424676guFaqR', 'result', '2270601aHoaNE', '24EsRYWk', 'get', '14195511bkwaJn', 'Error\x20resetting\x20password', '4515036YOVWpq', 'newPassword', 'resetPassword', '2STquia', 'mode', 'G-KLT8C91VNS', '189666ngFoDe'];
    _0x16ae = function() {
        return _0x121f63;
    };
    return _0x16ae();
}
const firebaseConfig = {
        'apiKey': _0x2339a4(0x167),
        'authDomain': 'app.kidslearncode.org',
        'projectId': _0x2339a4(0x166),
        'storageBucket': 'kids-learn-code.firebasestorage.app',
        'messagingSenderId': _0x2339a4(0x15d),
        'appId': _0x2339a4(0x15c),
        'measurementId': _0x2339a4(0x177)
    },
    app = initializeApp(firebaseConfig),
    auth = getAuth(app),
    urlParams = new URLSearchParams(window[_0x2339a4(0x162)]['search']),
    mode = urlParams[_0x2339a4(0x16f)](_0x2339a4(0x176)),
    oobCode = urlParams[_0x2339a4(0x16f)](_0x2339a4(0x169));
export function setPassword() {
    const _0x4a2cfe = _0x2339a4;
    var _0x552267 = document[_0x4a2cfe(0x164)](_0x4a2cfe(0x173))[_0x4a2cfe(0x168)];
    mode === _0x4a2cfe(0x174) && confirmPasswordReset(auth, oobCode, _0x552267)['then'](() => {
        const _0x35e31b = _0x4a2cfe;
        document[_0x35e31b(0x164)](_0x35e31b(0x16c))[_0x35e31b(0x161)] = 'Password\x20reset\x20successful!',
            console['log']('Password\x20reset\x20successful!');
    })['catch'](_0x2d1e83 => {
        const _0x38c136 = _0x4a2cfe;
        console['error'](_0x38c136(0x165), _0x2d1e83),
            document[_0x38c136(0x164)](_0x38c136(0x16c))['textContent'] = _0x38c136(0x171);
    });
}
window['setPassword'] = setPassword;