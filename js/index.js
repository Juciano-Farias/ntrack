const pianoKeys = document.querySelectorAll(".key");

const audioFileInput = document.getElementById("arquivo");
const playButton = document.getElementById("play");
const pauseButton = document.getElementById("pause");
const stopButton = document.getElementById("stop");

const audioLength = document.getElementById("audio-length");
const currentTime = document.getElementById("current-time");

const progressBar = document.getElementById("progress-bar");
const bars = document.querySelectorAll(".bar");

const progressWave = document.querySelector(".wave-progress");
const waves = document.querySelectorAll(".wave-bar");

// Progress
audio.addEventListener("timeupdate", function () {
  const progress = audio.currentTime / audio.duration;
  progressWave.style.left = progress * 100 + "%";
  if (progress == 1) {
    progressWave.style.left = "0px";
  }
});

// Piano functions
function playKeySound(newUrl) {
  console.log(newUrl);
  new Audio(newUrl).play();
}

pianoKeys.forEach((pianoKey, i) => {
  const keys = [
    "02",
    "04",
    "06",
    "09",
    "11",
    "14",
    "16",
    "18",
    "21",
    "23",
    "01",
    "03",
    "05",
    "07",
    "08",
    "10",
    "12",
    "13",
    "15",
    "17",
    "19",
    "20",
    "22",
    "24",
  ];
  const newUrl = "assets/piano-sounds/key" + keys[i] + ".mp3";
  pianoKey.addEventListener("click", () => playKeySound(newUrl));
});
