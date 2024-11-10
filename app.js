let endDate = '14 November 2024'; 
let end = new Date(endDate); 

let tikTikAudio = new Audio('tik tik.mp3');
tikTikAudio.play();
tikTikAudio.loop = true;


setInterval(function() {
    let now = new Date(); 
    let diff = end - now; 

    if (diff <= 0) {
        clearInterval();

        tikTikAudio.pause();
        document.getElementById('days').value = 0;
        document.getElementById('hours').value = 0;
        document.getElementById('minutes').value = 0;
        document.getElementById('seconds').value = 0;
        let audio = new Audio('cd end.mp3');
        audio.play();
        return;
    }

    let days = Math.floor(diff / (1000 * 60 * 60 * 24)); 
    let hours = Math.floor((diff / (1000 * 60 * 60)) % 24); 
    let minutes = Math.floor((diff / (1000 * 60)) % 60); 
    let seconds = Math.floor((diff / 1000) % 60); 

    document.getElementById('days').value = days;
    document.getElementById('hours').value = hours;
    document.getElementById('minutes').value = minutes;
    document.getElementById('seconds').value = seconds;

}, 1000); 
