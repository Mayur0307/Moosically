//Initializing variables
let songIndex = 0;
let audioElement = new Audio('../../assets/songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

var array = [
    { songName: "Lovely - Fly By Midnight", filePath: "../../assets/songs/1.mp3", cover: "../../assets/covers/1.jpg" },
    { songName: "Lost - Faime", filePath: "../../assets/songs/2.mp3", cover: "../../assets/covers/2.jpg" },
    { songName: "Rain - Faime", filePath: "../../assets/songs/3.mp3", cover: "../../assets/covers/3.jpg" },
    { songName: "Believers - Alan Walker", filePath: "../../assets/songs/4.mp3", cover: "../../assets/covers/4.jpg" },
    { songName: "Stereo Hearts - Gym Class Heroes", filePath: "../../assets/songs/5.mp3", cover: "../../assets/covers/5.jpg" },
    { songName: "Let's Go Crazy - Prince", filePath: "../../assets/songs/h1.mp3", cover: "../../assets/covers/h1.jpg" },
    { songName: "I Got You - James Brown", filePath: "../../assets/songs/h2.mp3", cover: "../../assets/covers/h2.jpg" },
    { songName: "Don't Stop Me Now - Queen", filePath: "../../assets/songs/h3.mp3", cover: "../../assets/covers/h3.jpg" },
    { songName: "Walking on Sunshine - Katrina", filePath: "../../assets/songs/h4.mp3", cover: "../../assets/covers/h4.jpg" },
    { songName: "I Gotta Feeling - the Blacked Eyed Peas", filePath: "../../assets/songs/h5.mp3", cover: "../../assets/covers/h5.jpg" },
    { songName: "Shatter Me - Lindsey Stirling", filePath: "../../assets/songs/a5.mp3", cover: "../../assets/covers/m5.jpg" },
    { songName: " Wolves - Selena Gomez ", filePath: "../../assets/songs/a6..mp3", cover: "../../assets/covers/m6.jpg" },
    { songName: " Easy on Me - Adele ", filePath: "../../assets/songs/a1.mp3", cover: "../../assets/covers/m1.jpg" }

];
const shuffled1 = array.sort(() => 0.5 - Math.random());

let songs = shuffled1.slice(0, 6);


songItems.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].cover;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})

masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        songItemPlayFn(songIndex);
    }
    else {
        songItemPauseFn(songIndex);
    }
})

//Listen to events
audioElement.addEventListener('timeupdate', () => {
    //update seekbar
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgressBar.value = progress;
    if (progress >= 100) {
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
        nextSong();
    }
})

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = (myProgressBar.value * audioElement.duration) / 100;
})

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName("songItemPlay")).forEach((element) => {
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle')
    })
}

Array.from(document.getElementsByClassName("songItemPlay")).forEach((element) => {
    element.addEventListener('click', (e) => {
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        songItemPlayFn(songIndex);
    })
})

function songItemPlayFn(songIndex) {
    let songItemPlay = document.getElementById(songIndex);
    songItemPlay.classList.remove('fa-play-circle');
    songItemPlay.classList.add('fa-pause-circle');
    if ((!(audioElement.paused)) || (myProgressBar.value >= 100)) {
        audioElement.src = `../../assets/songs/${songIndex + 1}.mp3`;
    }
    gif.style.opacity = 1;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
}

function songItemPauseFn(songIndex) {
    let songItemPause = document.getElementById(songIndex);
    songItemPause.classList.remove('fa-pause-circle');
    songItemPause.classList.add('fa-play-circle');
    gif.style.opacity = 0;
    audioElement.pause();
    masterPlay.classList.remove('fa-pause-circle');
    masterPlay.classList.add('fa-play-circle');
}

document.getElementById("next").addEventListener("click", () => {
    nextSong();
})

document.getElementById("previous").addEventListener("click", () => {
    makeAllPlays();
    if (songIndex <= 0) {
        songIndex = 4;
    }
    else {
        songIndex -= 1;
    }
    songItemPlayFn(songIndex);
})

function nextSong() {
    makeAllPlays();
    if (songIndex >= 4) {
        songIndex = 0;
    }
    else {
        songIndex += 1;
    }
    songItemPlayFn(songIndex);
}