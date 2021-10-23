var end = new Date('2021-10-22');
    var now = new Date();
    if (end - now <= 0) {
        var e = document.getElementById('locked');
        e.parentElement.removeChild(e);
    }