const pianoKeys = document.querySelectorAll(".key");

const audioFileInput = document.getElementById("arquivo");
const playButton = document.getElementById("play");
const pauseButton = document.getElementById("pause");

const audioLength = document.getElementById("audio-length");
const currentTime = document.getElementById("current-time");

const progressBar = document.getElementById("progress-bar");

// Equ

// Audio variables
let audio = new Audio();

// Change the audio
audioFileInput.addEventListener("change", function () {
  const files = this.files;
  if (files.length === 0) return;
  const file = files[0];
  const reader = new FileReader();
  reader.onload = function () {
    audio.src = reader.result;
  };
  reader.readAsDataURL(file);

  console.log(audio)
});

// Play the audio
playButton.addEventListener("click", function () {
  audio.play();
});

// Stop the audio
pauseButton.addEventListener("click", function () {
  audio.pause();
});

// Audio duration
audio.addEventListener("loadedmetadata", function () {
  const minutes = Math.floor(audio.duration / 60);
  const seconds = Math.floor(audio.duration % 60);
  audioLength.textContent = `Duration ${minutes}:${seconds.toString().padStart(2, "0")}`;
});

// Audio current time
audio.addEventListener("timeupdate", function () {
  const minutes = Math.floor(audio.currentTime / 60);
  const seconds = Math.floor(audio.currentTime % 60);
  currentTime.textContent = `${minutes}:${seconds.toString().padStart(2, "0")}`;
});

// Progress
audio.addEventListener("timeupdate", function () {
  const progress = audio.currentTime / audio.duration;
  progressBar.style.left = progress * 100 + "%";
  if (progress * 100 == 100) {
    progressBar.style.left = "1px";
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
