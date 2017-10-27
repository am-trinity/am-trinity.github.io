function loadWindows() {
    window['bsod'] = true;
    var windows = document.querySelector('.windows');
    windows.className = windows.className + ' visible';
    changeException();
}
function rnd(a) {
    return a[Math.floor(Math.random() * a.length)];
}
function changeException() {
    var dash = document.getElementById('dash');
    if (Math.random() * 100 > 27) {
        dash.className = dash.className.length ? '' : 'visible';
    }
    var code1 = document.getElementById('code1');
    var code2 = document.getElementById('code2');
    if (Math.random() * 32000 > 31337 || code1.innerHTML.length === 0) {
        code1.innerHTML = rnd('0123456789') + rnd('ABCDEF');
        var tmp = '';
        for (var i = 0; i < 4; ++i) {
            tmp += rnd('0123456789');
        }
        tmp += ':';
        for (var i = 0; i < 8; ++i) {
            tmp += rnd('0123456789ABCDEF');
        }
        code2.innerHTML = tmp;
    }
    if (window['bsod']) {
        setTimeout(changeException, 100);
    }
}
function handleKeyDown(event) {
    if (event.preventDefault)
        event.preventDefault();
    if (event.stopPropagation)
        event.stopPropagation();
    event.returnValue = false;
    window['bsod'] = false;
    var windows = document.querySelector('.windows');
    windows.className = windows.className.replace(' visible', '');
}

