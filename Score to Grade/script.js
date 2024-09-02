const Det = () => {
    let ang = document.getElementById('nilai').value;
    let hur = document.getElementById('huruf');
    if (ang >= 81 && ang <= 100 ) {
        hur.value = 'A'
    } else if (ang >= 71 && ang <= 80 ) {
        hur.value = 'B'
    } else if (ang >= 56 && ang <= 70) {
        hur.value = 'C'
    } else if (ang >= 41 && ang <= 55) {
        hur.value = 'D'
    } else if (ang >= 0 && ang <= 40) {
        hur.value = 'E'
    } else {
        hur.value = ''
    }

}
