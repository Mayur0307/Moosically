const video = document.getElementById('video');

let mood;

Promise.all([
<<<<<<< HEAD
    faceapi.nets.tinyFaceDetector.loadFromUri('../../storage/models'),
    faceapi.nets.faceLandmark68Net.loadFromUri('../../storage/models'),
    faceapi.nets.faceRecognitionNet.loadFromUri('../../storage/models'),
    faceapi.nets.faceExpressionNet.loadFromUri('../../storage/models')
=======
    faceapi.nets.tinyFaceDetector.loadFromUri('/models'),
    faceapi.nets.faceLandmark68Net.loadFromUri('/models'),
    faceapi.nets.faceRecognitionNet.loadFromUri('/models'),
    faceapi.nets.faceExpressionNet.loadFromUri('/models')
>>>>>>> e43c90192f5072cde98ae9a65512ccb5f22b630a
]).then(startVideo);
console.log("hello1");

let expression;

// mood = stopVideo();
// console.log(mood);
function startVideo() {
    navigator.getUserMedia(
        { video: {} },
        stream => video.srcObject = stream,
        err => console.error(err)
    )
}
console.log("hello3");
video.addEventListener('play', () => {
    const canvas = faceapi.createCanvasFromMedia(video)
    document.body.append(canvas)
    const displaySize = { width: video.width, height: video.height }
    faceapi.matchDimensions(canvas, displaySize)
    setInterval(async () => {
        const detections = await faceapi.detectAllFaces(video, new faceapi.TinyFaceDetectorOptions()).withFaceLandmarks().withFaceExpressions()
        const resizedDetections = faceapi.resizeResults(detections, displaySize)
        canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height)
        // faceapi.draw.drawDetections(canvas, resizedDetections)
        // faceapi.draw.drawFaceLandmarks(canvas, resizedDetections)
        // faceapi.draw.drawFaceExpressions(canvas, resizedDetections)
        expression = resizedDetections[0].expressions
        // write expressions as json to file named exp asynchronously
        // writeFile('exp', JSON.stringify(expression), (err) => {
        //   if (err)
        //     throw err
        //   }
        // )
    }, 1000)
})

function stopVideo() {
    var max = 0;
    var maxKey = "";
    for (var key in expression) {
        if (expression[key] > max) {
            max = expression[key];
            maxKey = key;
        }
    }
    mood = maxKey;
    // console.log(mood);
    alert(mood.toUpperCase());
    // return mood;

    //   console.log(maxKey);
}
console.log("hello4");

// Event Listeners
document.getElementById("toPlayer").addEventListener("click", function () {

    // document.getElementById("video").style.pointer-events = "none";


    document.getElementById("selector").style.display = "none";
    document.getElementById("player").style.display = "block";

    //Player


    let songIndex = 0;
    let audioElement = new Audio('../../assets/songs/h1.mp3');
    let masterPlay = document.getElementById('masterPlay');
    let myProgressBar = document.getElementById('myProgressBar');
    let gif = document.getElementById('gif');
    let masterSongName = document.getElementById('masterSongName');
    let songItems = Array.from(document.getElementsByClassName('songItem'));
    var songs;
    var array;

    console.log("hello5");
    switch (mood) {
        case 'happy':
            array = [
                { songName: "Let's Go Crazy - Prince", filePath: "../../assets/songs/h1.mp3", cover: "../../assets/covers/h1.jpg" },
                { songName: "I Got You - James Brown", filePath: "../../assets/songs/h2.mp3", cover: "../../assets/covers/h2.jpg" },
                { songName: "Don't Stop Me Now - Queen", filePath: "../../assets/songs/h3.mp3", cover: "../../assets/covers/h3.jpg" },
                { songName: "Walking on Sunshine - Katrina", filePath: "../../assets/songs/h4.mp3", cover: "../../assets/covers/h4.jpg" },
                { songName: "I Gotta Feeling - the Blacked Eyed Peas", filePath: "../../assets/songs/h5.mp3", cover: "../../assets/covers/h5.jpg" },
                { songName: "Shatter Me - Lindsey Stirling", filePath: "../../assets/songs/a5.mp3", cover: "../../assets/covers/m5.jpg" },
                { songName: " Wolves - Selena Gomez ", filePath: "../../assets/songs/a6..mp3", cover: "../../assets/covers/m6.jpg" },
                { songName: " Easy on Me - Adele ", filePath: "../../assets/songs/a1.mp3", cover: "../../assets/covers/m1.jpg" }

            ];
            const shuffled = array.sort(() => 0.5 - Math.random());

            songs = shuffled.slice(0, 6);
            break;

        case 'surprised':
            array = [
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

            songs = shuffled1.slice(0, 6);
            mood='happy';
            break;

        case 'neutral':
            array = [
                { songName: "Lucid Dreams - Juice WRLD", filePath: "../../assets/songs/s1.mp3", cover: "../../assets/covers/s1.jpg" },
                { songName: "My Heart Will Go On - Celine Dion", filePath: "../../assets/songs/s2.mp3", cover: "../../assets/covers/s2.jpg" },
                { songName: "Call Out My Name - The Weeknd", filePath: "../../assets/songs/s3.mp3", cover: "../../assets/covers/s3.jpg" },
                { songName: "Doing It Wrong - Drake", filePath: "../../assets/songs/s4.mp3", cover: "../../assets/covers/s4.jpg" },
                { songName: "Traitor - Olivia Rodrigo", filePath: "../../assets/songs/s5.mp3", cover: "../../assets/covers/s5.jpg" },
                {songName: "I Gotta Feeling - the Blacked Eyed Peas", filePath: "../../assets/songs/h5.mp3", cover: "../../assets/covers/h5.jpg" },
                { songName: "Shatter Me - Lindsey Stirling", filePath: "../../assets/songs/a5.mp3", cover: "../../assets/covers/m5.jpg" },
                { songName: "Bad Guy - Billie Elish", filePath: "../../assets/songs/a5.mp3", cover: "../../assets/covers/a5.jpg" }
            ];
            const shuffled2 = array.sort(() => 0.5 - Math.random());

            songs = shuffled2.slice(0, 6);
            break;

        case 'angry':
            array = [
                { songName: "IDGAF - Dua Lipa", filePath: "../../assets/songs/a1.mp3", cover: "../../assets/covers/a1.jpg" },
                { songName: "I hate Everything About You - Grace", filePath: "../../assets/songs/a2.mp3", cover: "../../assets/covers/a2.jpg" },
                { songName: "Love the Way You Lie - Eminen", filePath: "../../assets/songs/a3.mp3", cover: "../../assets/covers/a3.jpg" },
                { songName: "Everything About You - Ugly Kid Joe", filePath: "../../assets/songs/a4.mp3", cover: "../../assets/covers/a4.jpg" },
                { songName: "Bad Guy - Billie Elish", filePath: "../../assets/songs/a5.mp3", cover: "../../assets/covers/a5.jpg" },
                { songName: " Runaway - Aurora ", filePath: "../../assets/songs/a2.mp3", cover: "../../assets/covers/m2.jpg" },
                { songName: "I Gotta Feeling - the Blacked Eyed Peas", filePath: "../../assets/songs/a6..mp3", cover: "../../assets/covers/m6.jpg" },
                { songName: "Shatter Me - Lindsey Stirling", filePath: "../../assets/songs/a3.mp3", cover: "../../assets/covers/m3.jpg" },
            ];
            const shuffled3 = array.sort(() => 0.5 - Math.random());

            songs = shuffled3.slice(0, 6);
            break;

        case 'disgusted':
            array = [
                { songName: "IDGAF - Dua Lipa", filePath: "../../assets/songs/a1.mp3", cover: "../../assets/covers/a1.jpg" },
                { songName: "I hate Everything About You - Grace", filePath: "../../assets/songs/a2.mp3", cover: "../../assets/covers/a2.jpg" },
                { songName: "Love the Way You Lie - Eminen", filePath: "../../assets/songs/a3.mp3", cover: "../../assets/covers/a3.jpg" },
                { songName: "Everything About You - Ugly Kid Joe", filePath: "../../assets/songs/a4.mp3", cover: "../../assets/covers/a4.jpg" },
                { songName: "Bad Guy - Billie Elish", filePath: "../../assets/songs/a5.mp3", cover: "../../assets/covers/a5.jpg" },
                { songName: " Runaway - Aurora ", filePath: "../../assets/songs/a2.mp3", cover: "../../assets/covers/m2.jpg" },
                { songName: "I Gotta Feeling - the Blacked Eyed Peas", filePath: "../../assets/songs/a6..mp3", cover: "../../assets/covers/m6.jpg" },
                { songName: "Shatter Me - Lindsey Stirling", filePath: "../../assets/songs/a3.mp3", cover: "../../assets/covers/m3.jpg" },
            ];
            const shuffled4 = array.sort(() => 0.5 - Math.random());

            songs = shuffled4.slice(0, 6);
            mood = 'angry';
            break;

        case 'sad':
            array = [
                { songName: "Lucid Dreams - Juice WRLD", filePath: "../../assets/songs/s1.mp3", cover: "../../assets/covers/s1.jpg" },
                { songName: "My Heart Will Go On - Celine Dion", filePath: "../../assets/songs/s2.mp3", cover: "../../assets/covers/s2.jpg" },
                { songName: "Call Out My Name - The Weeknd", filePath: "../../assets/songs/s3.mp3", cover: "../../assets/covers/s3.jpg" },
                { songName: "Doing It Wrong - Drake", filePath: "../../assets/songs/s4.mp3", cover: "../../assets/covers/s4.jpg" },
                { songName: "Love the Way You Lie - Eminen", filePath: "../../assets/songs/a3.mp3", cover: "../../assets/covers/a3.jpg" },
                { songName: "Everything About You - Ugly Kid Joe", filePath: "../../assets/songs/a4.mp3", cover: "../../assets/covers/a4.jpg" },
                { songName: "Bad Guy - Billie Elish", filePath: "../../assets/songs/a5.mp3", cover: "../../assets/covers/a5.jpg" },
                { songName: "Traitor - Olivia Rodrigo", filePath: "../../assets/songs/s5.mp3", cover: "../../assets/covers/s5.jpg" }
            ];
            const shuffled5 = array.sort(() => 0.5 - Math.random());

            songs = shuffled5.slice(0, 6);
            break;

        case 'fearful':
            array = [
                { songName: "Lucid Dreams - Juice WRLD", filePath: "../../assets/songs/s1.mp3", cover: "../../assets/covers/s1.jpg" },
                { songName: "My Heart Will Go On - Celine Dion", filePath: "../../assets/songs/s2.mp3", cover: "../../assets/covers/s2.jpg" },
                { songName: "Call Out My Name - The Weeknd", filePath: "../../assets/songs/s3.mp3", cover: "../../assets/covers/s3.jpg" },
                { songName: "Doing It Wrong - Drake", filePath: "../../assets/songs/s4.mp3", cover: "../../assets/covers/s4.jpg" },
                { songName: "Love the Way You Lie - Eminen", filePath: "../../assets/songs/a3.mp3", cover: "../../assets/covers/a3.jpg" },
                { songName: "Everything About You - Ugly Kid Joe", filePath: "../../assets/songs/a4.mp3", cover: "../../assets/covers/a4.jpg" },
                { songName: "Bad Guy - Billie Elish", filePath: "../../assets/songs/a5.mp3", cover: "../../assets/covers/a5.jpg" },
                { songName: "Traitor - Olivia Rodrigo", filePath: "../../assets/songs/s5.mp3", cover: "../../assets/covers/s5.jpg" }
            ];
            const shuffled6 = array.sort(() => 0.5 - Math.random());

            songs = shuffled6.slice(0, 6);
            mood = 'sad';
            break;


        default:
            songs = [
                { songName: "Lovely - Fly By Midnight", filePath: "../../assets/songs/1.mp3", cover: "../../assets/covers/1.jpg" },
                { songName: "Lost - Faime", filePath: "../../assets/songs/2.mp3", cover: "../../assets/covers/2.jpg" },
                { songName: "Rain - Faime", filePath: "../../assets/songs/3.mp3", cover: "../../assets/covers/3.jpg" },
                { songName: "Believers - Alan Walker", filePath: "../../assets/songs/4.mp3", cover: "../../assets/covers/4.jpg" },
                { songName: "Stereo Hearts - Gym Class Heroes", filePath: "../../assets/songs/5.mp3", cover: "../../assets/covers/5.jpg  " }
            ];
    }
    console.log("hello6");
    document.getElementById('moodh').innerHTML = "My " + mood.toUpperCase() + " Playlist";
    songItems.forEach((element, i) => {
        element.getElementsByTagName("img")[0].src = songs[i].cover;
        element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
    })
    //audioElement.play();

    //Handle play/pause click
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
})







