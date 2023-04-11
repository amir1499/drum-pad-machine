const libOne = document.getElementById('lib-1');
const libTwo = document.getElementById('lib-2');
const libThree = document.getElementById('lib-3');
const beatName = document.getElementById('beat-name');
const padContainer = document.getElementById('pad-container');

// Press key events
let selectedLib;
const pressKeyHandler = (e) => {
	switch (e.keyCode) {
		case 81:
			classClick('Q');
			const filterQ = selectedLib.filter((pad) => pad.key === 'Q');
			playSound(filterQ[0].sound, filterQ[0].name);
			break;
		case 87:
			classClick('W');
			const filterW = selectedLib.filter((pad) => pad.key === 'W');
			playSound(filterW[0].sound, filterW[0].name);
			break;
		case 69:
			classClick('E');
			const filterE = selectedLib.filter((pad) => pad.key === 'E');
			playSound(filterE[0].sound, filterE[0].name);
			break;
		case 65:
			classClick('A');
			const filterA = selectedLib.filter((pad) => pad.key === 'A');
			playSound(filterA[0].sound, filterA[0].name);
			break;
		case 83:
			classClick('S');
			const filterS = selectedLib.filter((pad) => pad.key === 'S');
			playSound(filterS[0].sound, filterS[0].name);
			break;
		case 68:
			classClick('D');
			const filterD = selectedLib.filter((pad) => pad.key === 'D');
			playSound(filterD[0].sound, filterD[0].name);
			break;
		case 90:
			classClick('Z');
			const filterZ = selectedLib.filter((pad) => pad.key === 'Z');
			playSound(filterZ[0].sound, filterZ[0].name);
			break;
		case 88:
			classClick('X');
			const filterX = selectedLib.filter((pad) => pad.key === 'X');
			playSound(filterX[0].sound, filterX[0].name);
			break;
		case 67:
			classClick('C');
			const filterC = selectedLib.filter((pad) => pad.key === 'C');
			playSound(filterC[0].sound, filterC[0].name);
			break;
		case 49:
			selectedLib = libraryOne;
			createPads(libraryOne);
			break;
		case 50:
			selectedLib = libraryTwo;
			createPads(libraryTwo);
			break;
		case 51:
			selectedLib = libraryThree;
			createPads(libraryThree);
			break;
		default:
			console.log(`${e.keyCode} does not have a function in this App\nDesigned and Developed by Ibán López`);
			break;
	}
};

// Keys event listeners
document.addEventListener('keydown', pressKeyHandler);

// Audio element generator
function sound(src) {
	this.sound = document.createElement('audio');
	this.sound.src = src;
	this.sound.setAttribute('preload', 'auto');
	this.sound.setAttribute('controls', 'none');
	this.sound.classList.add('clip'); //FCC project #6
	this.sound.style.display = 'none';
	document.body.appendChild(this.sound);
	this.play = function() {
		this.sound.play();
	};
	this.stop = function() {
		this.sound.pause();
	};
}

// Sound libraries
//      First Library
oneQ = new sound(src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3");
oneW = new sound(src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3");
oneE = new sound(src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3");
oneA = new sound(src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3");
oneS = new sound(src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3");
oneD = new sound(src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3");
oneZ = new sound(src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3");
oneX = new sound(src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3");
oneC = new sound(src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3");

libraryOne = [
	{
		sound: oneQ,
		name: 'BOOOOOM!',
		key: 'Q',
        id: 'Heater-1'
	},

	{
		sound: oneW,
		name: 'DIIIING!',
		key: 'W',
        id: 'Heater2'
	},

	{
		sound: oneE,
		name: 'DIPPPP!',
		key: 'E'
	},

	{
		sound: oneA,
		name: 'TSSSS',
		key: 'A'
	},

	{
		sound: oneS,
		name: 'DUUUUP!',
		key: 'S'
	},

	{
		sound: oneD,
		name: 'TAAAAAN!',
		key: 'D'
	},

	{
		sound: oneZ,
		name: 'TUMMMM!',
		key: 'Z'
	},

	{
		sound: oneX,
		name: 'DUMM!',
		key: 'X'
	},

	{
		sound: oneC,
		name: 'PIUUUUU!',
		key: 'C'
	}
];

//      Second Library
twoQ = new sound(src="https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3");
twoW = new sound(src="https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3");
twoE = new sound(src="https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3");
twoA = new sound(src="https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3");
twoS = new sound(src="https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3");
twoD = new sound(src="https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3");
twoZ = new sound(src="https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3");
twoX = new sound(src="https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3");
twoC = new sound(src="https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3");

libraryTwo = [
	{
		sound: twoQ,
		name: 'BOOOOOM!',
		key: 'Q'
	},

	{
		sound: twoW,
		name: 'TIIIING!',
		key: 'W'
	},

	{
		sound: twoE,
		name: 'DOOOOOU!',
		key: 'E'
	},

	{
		sound: twoA,
		name: 'KSSSS',
		key: 'A'
	},

	{
		sound: twoS,
		name: 'POP!',
		key: 'S'
	},

	{
		sound: twoD,
		name: 'DAAAAAN!',
		key: 'D'
	},

	{
		sound: twoZ,
		name: 'ZUMMMM!',
		key: 'Z'
	},

	{
		sound: twoX,
		name: 'TIIIIIN!',
		key: 'X'
	},

	{
		sound: twoC,
		name: 'TIUUUUU!',
		key: 'C'
	}
];

//      Third Library
threeQ = new sound('./sounds/library3/BD_MF_Valve14.wav');
threeW = new sound('./sounds/library3/Conga_MF_Valve3.wav');
threeE = new sound('./sounds/library3/HHo_MF_Valve1.wav');
threeA = new sound('./sounds/library3/Metal_MF_Valve18.wav');
threeS = new sound('./sounds/library3/Perc_MF_Valve37.wav');
threeD = new sound('./sounds/library3/Timp_MF_Valve1.wav');
threeZ = new sound('./sounds/library3/Tom_MF_Valve1.wav');
threeX = new sound('./sounds/library3/Wood_MF_Valve_G4.wav');
threeC = new sound('./sounds/library3/Zap_MF_Valve1.wav');

libraryThree = [
	{
		sound: threeQ,
		name: 'BOOOOOM!',
		key: 'Q'
	},

	{
		sound: threeW,
		name: 'DIIIIN!',
		key: 'W'
	},

	{
		sound: threeE,
		name: 'DUIHHH!',
		key: 'E'
	},

	{
		sound: threeA,
		name: 'DINNNNNN!',
		key: 'A'
	},

	{
		sound: threeS,
		name: 'DAP!',
		key: 'S'
	},

	{
		sound: threeD,
		name: 'POOOM!',
		key: 'D'
	},

	{
		sound: threeZ,
		name: 'TIUMMM!',
		key: 'Z'
	},

	{
		sound: threeX,
		name: 'TINN!',
		key: 'X'
	},

	{
		sound: threeC,
		name: 'PIUUUUU!',
		key: 'C'
	}
];

// Pad element generator
function newPad(pad) {
	const { sound, name, key } = pad;
	this.newPad = document.createElement('div');
	this.newPad.classList.add('drum-pad');
	this.newPad.setAttribute('id', key);
	this.newPad.setAttribute('type', 'button');
	this.newPad.innerText = key;
	this.newPad.onclick = () => {
		playSound(sound, name);
		classClick(key);
	};
	this.newPad.onmouseover = () => classHover(key);
	this.newPad.onmouseleave = () => {
		this.newPad.classList.remove('drum-pad-hover');
	};
	padContainer.appendChild(this.newPad);
}

// Create pad function
const createPads = (library) => {
	while (padContainer.firstChild) {
		padContainer.removeChild(padContainer.lastChild);
	}
	library.map((pad) => {
		new newPad(pad);
	});
};

// Play sound function
const playSound = (sound, name) => {
	sound.play();
	beatName.innerHTML = name;
};

// Edit class when hover
const classHover = (key) => {
	const pad = document.getElementById(key);
	pad.classList.add('drum-pad-hover');
};

// Edit class when clicking
const classClick = (key) => {
	const pad = document.getElementById(key);
	pad.classList.add('drum-pad-clicked');
	setTimeout(() => {
		pad.classList.remove('drum-pad-clicked');
	}, 500);
};

// Render library on first load
window.onload = () => {
	selectedLib = libraryOne;
	createPads(libraryOne);
};

// Render libraries on click
libOne.onclick = () => {
	selectedLib = libraryOne;
	createPads(libraryOne);
};
libTwo.onclick = () => {
	selectedLib = libraryTwo;
	createPads(libraryTwo);
};
libThree.onclick = () => {
	selectedLib = libraryThree;
	createPads(libraryThree);
};