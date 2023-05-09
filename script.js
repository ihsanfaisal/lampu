function nyalakanLampu() {
    document.getElementById('bohlam').src = "nyala.jpeg";
    document.getElementById('klik').play();
}

function matikanLampu() {
    document.getElementById('bohlam').src = "mati.jpeg";
    document.getElementById('klik').play();
}

function playEfekSuara() {
    document.getElementById('klik').play();
}
