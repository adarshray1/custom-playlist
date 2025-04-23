const playButton = document.getElementById("play-button");
const prevButton = document.getElementById("prev-button");
const nextButton = document.getElementById("next-button");
const shuffleButton = document.getElementById("shuffle-button");
const repeatButton = document.getElementById("repeat-button");
const progressBar = document.getElementById("progress-bar");
const volumeBar = document.getElementById("volume-bar");
const lyricsContainer = document.getElementById("lyrics-container");
const visualizerCanvas = document.getElementById("visualizer");
const trackName = document.getElementById("track-name");
const artistName = document.getElementById("artist-name");
const albumArt = document.getElementById("album-art");
const playlistContainer = document.getElementById("playlist-container");

let audio = new Audio();
let currentTrackIndex = 0;
let isPlaying = false;
let isShuffling = false;  
let isRepeating = false;
let tracks = [
  {
    name: "Khuda Bhi",
    artist: "Mohit Chauhan",
    album: "Album 1",
    url: "mp3/track1.mp3",
    image: "https://iili.io/3GisHWN.jpg",
    lyrics: "These are the lyrics for Track 1."
  },
  {
    name: "Kam Se Kam Itna Kaha hota",
    artist: "Artist 2",
    album: "Album 2",
    url: "mp3/track2.mp3",
    image: "https://iili.io/3GiL9kb.png",
    lyrics: "These are the lyrics for Track 2."
  },
  {
    name: "Maine Pyaar Tumhi Se Kiya Hai",
    artist: "Artist 3",
    album: "Album 3",
    url: "mp3/track3.mp3",
    image: "https://iili.io/3Gs94Pj.jpg",
    lyrics: "These are the lyrics for Track 3."
  },
  {
    name: "Milne Ki Tum Koshish Karna ",
    artist: "Kumar Sanu, Asha Bhosle",
    album: "Album 4",
    url: "mp3/track4.mp3",
    image: "https://iili.io/3GsK6I2.jpg",
    lyrics: "These are the lyrics for Track 4."
  },
  {
    name: "Mujhe Neend Na Aaye",
    artist: "Anuradha Paudwal, Udit Narayan",
    album: "Album 5",
    url: "mp3/track5.mp3",
    image: "https://iili.io/3GsfPyv.jpg",
    lyrics: "These are the lyrics for Track 5."
  },
  {
    name: "Yeh Dua Hai Meri Rab Se",
    artist: "Alka Yagnik, Kumar Sanu",
    album: "Album 6",
    url: "mp3/track6.mp3",
    image: "https://iili.io/3GsqEAv.jpg",
    lyrics: "These are the lyrics for Track 6."
  },
  {
    name: "Dil Kehta Hai",
    artist: "Alka Yagnik, Kumar Sanu",
    album: "Album 7",
    url: "mp3/track7.mp3",
    image: "https://iili.io/3GsB5b4.webp",
    lyrics: "These are the lyrics for Track 7."
  },
  {
    name: "Pehli Baar Mile Hain",
    artist: "S. P. Balasubrahmanyam",
    album: "Album 8",
    url: "mp3/track8.mp3",
    image: "https://iili.io/3GsC53F.png",
    lyrics: "These are the lyrics for Track 8."
  },
  {
    name: "Track 9",
    artist: "Artist 9",
    album: "Album 9",
    url: "mp3/track9.mp3",
    image: "https://iili.io/3GisHWN.jpg",
    lyrics: "These are the lyrics for Track 9."
  },
  {
    name: "Track 10",
    artist: "Artist 10",
    album: "Album 10",
    url: "mp3/track10.mp3",
    image: "https://iili.io/3GiL9kb.png",
    lyrics: "These are the lyrics for Track 10."
  },
  {
    name: "Track 11",
    artist: "Artist 11",
    album: "Album 11",
    url: "mp3/track11.mp3",
    image: "https://iili.io/3Gs94Pj.jpg",
    lyrics: "These are the lyrics for Track 11."
  },
  {
    name: "Track 12",
    artist: "Artist 12",
    album: "Album 12",
    url: "mp3/track12.mp3",
    image: "https://iili.io/3GsK6I2.jpg",
    lyrics: "These are the lyrics for Track 12."
  },
  {
    name: "Track 13",
    artist: "Artist 13",
    album: "Album 13",
    url: "mp3/track13.mp3",
    image: "https://iili.io/3GsfPyv.jpg",
    lyrics: "These are the lyrics for Track 13."
  },
  {
    name: "Track 14",
    artist: "Artist 14",
    album: "Album 14",
    url: "mp3/track14.mp3",
    image: "https://iili.io/3GsqEAv.jpg",
    lyrics: "These are the lyrics for Track 14."
  },
  {
    name: "Track 15",
    artist: "Artist 15",
    album: "Album 15",
    url: "mp3/track15.mp3",
    image: "https://iili.io/3GsB5b4.webp",
    lyrics: "These are the lyrics for Track 15."
  },
  {
    name: "Track 16",
    artist: "Artist 16",
    album: "Album 16",
    url: "mp3/track16.mp3",
    image: "https://iili.io/3GsC53F.png",
    lyrics: "These are the lyrics for Track 16."
  },
  
  // Add more tracks as needed  
];

function loadTrack(index) {
  const track = tracks[index];
  audio.src = track.url;
  trackName.textContent = track.name;
  artistName.textContent = track.artist;
  albumArt.src = track.image;
  lyricsContainer.innerHTML = `<div class="lyrics">${track.lyrics.replace(/\n/g, '<br>')}</div>`;
}

function togglePlay() {
  if (isPlaying) {
    audio.pause();
  } else {
    audio.play();
  }
  isPlaying = !isPlaying;
  playButton.textContent = isPlaying ? "Pause" : "Play";
}

function playNextTrack() {
  if (isShuffling) {
    currentTrackIndex = Math.floor(Math.random() * tracks.length);
  } else {
    currentTrackIndex = (currentTrackIndex + 1) % tracks.length;
  }
  loadTrack(currentTrackIndex);
  audio.play();
  isPlaying = true;
  playButton.textContent = "Pause";
}

function playPrevTrack() {
  currentTrackIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length;
  loadTrack(currentTrackIndex);
  audio.play();
  isPlaying = true;
  playButton.textContent = "Pause";
}

function toggleShuffle() {
  isShuffling = !isShuffling;
  shuffleButton.style.opacity = isShuffling ? 1 : 0.5;
}

function toggleRepeat() {
  isRepeating = !isRepeating;
  repeatButton.style.opacity = isRepeating ? 1 : 0.5;
  audio.loop = isRepeating;
}

function updateProgressBar() {
  const progress = (audio.currentTime / audio.duration) * 100;
  progressBar.style.width = `${progress}%`;
}

function updateVolume() {
  audio.volume = volumeBar.value / 100;
}

audio.addEventListener("timeupdate", updateProgressBar);
audio.addEventListener("ended", playNextTrack);

loadTrack(currentTrackIndex);

playButton.addEventListener("click", togglePlay);
nextButton.addEventListener("click", playNextTrack);
prevButton.addEventListener("click", playPrevTrack);
shuffleButton.addEventListener("click", toggleShuffle);
repeatButton.addEventListener("click", toggleRepeat);
volumeBar.addEventListener("input", updateVolume);

// Create a simple visualizer
function drawVisualizer() {
  const context = visualizerCanvas.getContext("2d");
  context.clearRect(0, 0, visualizerCanvas.width, visualizerCanvas.height);
  const analyser = new (window.AudioContext || window.webkitAudioContext)().createAnalyser();
  const bufferLength = analyser.frequencyBinCount;
  const dataArray = new Uint8Array(bufferLength);
  
  analyser.getByteFrequencyData(dataArray);

  context.fillStyle = "#FF0000";
  for (let i = 0; i < bufferLength; i++) {
    const barHeight = dataArray[i];
    context.fillRect(i * 3, visualizerCanvas.height - barHeight, 2, barHeight);
  }
}

setInterval(drawVisualizer, 50);
