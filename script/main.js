function info(id) {
    let loc = 'planets'
    if (id === '1') {
        window.location.href = loc + "/mercury.html";
    } else if (id === '2') {
        window.location.href = loc + "/venus.html";
    } else if (id === '3') {
        window.location.href = loc + "/earth.html";
    } else if (id === '4') {
        window.location.href = loc + "/mars.html";
    } else if (id === '5') {
        window.location.href = loc + "/jupiter.html";
    } else if (id === '6') {
        window.location.href = loc + "/saturn.html";
    } else if (id === '7') {
        window.location.href = loc + "/uranus.html";
    } else if (id === '8') {
        window.location.href = loc + "/neptune.html";
    } else if (id === '0') {
        alert("The Sun is the center of our solar system!")
    }
}