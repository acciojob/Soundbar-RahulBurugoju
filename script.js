//your JS code here. If required.

let divBtns = document.querySelector('#buttons');

const sounds = [
  "applause",
  "boo",
  "gasp",
  "tada",
  "victory",
  "wrong"
];

const audioElements = {};

sounds.forEach((sound) => {

	let btn = document.createElement('button');

	btn.classList.add('btn');

	btn.textContent = sound;

	const audio = document.createElement('audio');

	audio.src = `sounds/${sound}.mp3`;

	document.body.appendChild(audio);

	audioElements[sound] = audio;

	btn.addEventListener('click', () => {

		stopSongs();

		audio.play();

	});

	divBtns.append(btn);

});

let stopBtn = document.createElement('button');

stopBtn.classList.add('stop');

stopBtn.textContent = 'stop';

stopBtn.addEventListener('click', stopSongs);

divBtns.append(stopBtn);

function stopSongs() {

	Object.values(audioElements).forEach((audio) => {

		audio.pause();

		audio.currentTime = 0;

	});

}