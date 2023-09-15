// Animation on Scroll
const observer = new IntersectionObserver((entries) => {
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

// songs list
const songs = [
  "./audio/Lag_Ja_Gale_Se_Phir(128).mp3",
  "./audio/Pranasakhi_Njan(128).mp3",
  "./audio/We_Didnt_Start_the_Fire(128).mp3",
];

// player
const player = document.getElementById("player") as HTMLAudioElement;
function playAudio() {
  let audioSource = songs[Math.floor(Math.random() * 3)];
  player.src = audioSource;
}
player.volume = 0.5;

player.addEventListener("ended", () => {
  playAudio();
});

// controls
const volUp = document.getElementById("volUp");
volUp?.addEventListener("click", () => {
  if (player.volume < 0.9) player.volume = player.volume + 0.1;
});

const volDown = document.getElementById("volDown");
volDown?.addEventListener("click", () => {
  if (player.volume > 0.2) player.volume = player.volume - 0.1;
});

const mute = document.getElementById("mute");
mute?.addEventListener("click", () => {
  player.muted = player.muted ? false : true;
});

const tune = document.getElementById("tune");
tune?.addEventListener("click", () => {
  player.src = "./audio/radio_tuning.mp3";
});
