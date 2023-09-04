let power = true;
const observer = new IntersectionObserver((entries) => {
  power &&
    entries.forEach((entry) => {
      if (entry.target.id === "list_container") {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-spark");
        } else {
          entry.target.classList.remove("animate-spark");
        }
      } else {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-sparkOut");
        } else {
          entry.target.classList.remove("animate-sparkOut");
        }
      }
    });
});

const container = document.querySelectorAll(".spark");
container.forEach((element) => observer.observe(element));

const songs = [
  "./audio/Lag_Ja_Gale_Se_Phir(128).mp3",
  "./audio/Pranasakhi_Njan(128).mp3",
  "./audio/We_Didnt_Start_the_Fire(128).mp3",
];
const player = document.getElementById("player") as HTMLAudioElement;

function playAudio() {
  let audioSource = songs[Math.floor(Math.random() * 3)];
  player.src = audioSource;
}
player.addEventListener("ended", () => {
  power && playAudio();
  // fastSeek() is'nt currently supported by most browsers
  player.fastSeek(40);
});

const play = document.getElementById("play");
play?.addEventListener("click", () => {
  power && player.play();
});

const pause = document.getElementById("pause");
pause?.addEventListener("click", () => {
  power && player.pause();
});

const mute = document.getElementById("mute");
mute?.addEventListener("click", () => {
  player.muted = player.muted ? false : true;
});

const tune = document.getElementById("tune");

tune?.addEventListener("click", () => {
  if (power) {
    player.src = "./audio/radio_tuning.mp3";
  }
});

const powerBtn = document.getElementById("power");
powerBtn?.addEventListener("click", () => {
  power = power ? false : true;
  power ? player.play() : player.pause();
});
