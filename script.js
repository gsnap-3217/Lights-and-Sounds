/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

console.log("game loaded");

// global constants
const cluePauseTime = 333; //how long to pause in between clues
const numBtn = 6;

//Global Variables
var pattern = [2, 2, 4, 3, 2, 1, 2, 4];
var progress = 0;
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5;  //must be between 0.0 and 1.0
var guessCounter = 0;
var incorrect = 0;
var strikes = 3;
var wavetype = 'triangle';
var clueHoldTime = 1000; //how long to hold each clue's light/sound
var nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence

//start stop
function startGame() {
  //initialize game variables
  progress = 0;
  incorrect = 0;
  gamePlaying = true;
  // swap the Start and Stop buttons
  document.getElementById("startbtn").classList.add("hidden");
  document.getElementById("stopbtn").classList.remove("hidden");
  getRandomPattern();
  playClueSequence();
}

function stopGame() {
  gamePlaying = false;
  // swap the Start and Stop buttons
  document.getElementById("stopbtn").classList.add("hidden");
  document.getElementById("startbtn").classList.remove("hidden");
}

//win lose
function winGame(){
  stopGame();
  alert("Game Over. You won!");
}
function loseGame(){
  stopGame();
  alert("Game Over. You lost.");
}

// computer sequance functions
function lightButton(btn){
  document.getElementById("btn"+btn).classList.add("lit")
}
function clearButton(btn){
  document.getElementById("btn"+btn).classList.remove("lit")
}

function guess(btn){
  console.log("user guessed: " + btn);
  if(!gamePlaying){
    return;
  }
  
  if(pattern[guessCounter] == btn){
    // guess is correct
    console.log("user correct");
    if(guessCounter == progress){
    if(progress == pattern.length - 1){winGame();}
    else{
      progress++;
      // every correct turn makes the game 224ms faster
      clueHoldTime -= 112;
      nextClueWaitTime -= 112;
      console.log("holdtime " + clueHoldTime);
      console.log("holdtime " + nextClueWaitTime);
      playClueSequence();
    }}
      else{guessCounter++;}
  }
  else{
   incorrect++;
    if(incorrect == strikes){
      loseGame();
    }
    else{playClueSequence();}
  }
  
}

function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}

function playClueSequence(){
  //reset guess
  guessCounter = 0;
  context.resume()
  let delay = nextClueWaitTime; //set delay to initial wait time
  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
    delay += clueHoldTime;
    delay += cluePauseTime;
  }
}

// Sound Synthesis Functions
const freqMap = {
/*  1: 261.6,
  2: 329.6,
  3: 392,
  4: 466.2 */
  // Prometheus scale C F♯ B♭ E A D 
  1: 130.81, // C3
  2: 185.00, // F♮3
  3: 233.08, // B♭3
  4: 164.81, // E3
  5: 220.00, // A3
  6: 146.83, // D3
}
function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  o.type = wavetype;
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  context.resume()
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}
function startTone(btn){
  if(!tonePlaying){
    context.resume()
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    context.resume()
    tonePlaying = true
  }
}
function stopTone(){
  g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
  tonePlaying = false
}

// Page Initialization
// Init Sound Synthesizer
var AudioContext = window.AudioContext || window.webkitAudioContext 
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)



// spagetti code incoming

// random pattern
function getRandomPattern(){
  for (let i=0; i < numBtn; i++) {
  pattern[i] = getrandom(1, numBtn);
}
  console.log("solution is:" + pattern);
}

function getrandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

//set wave type
function setWAVE(btnWave){
  /*oscillator types
  'sine',
  'square',
  'sawtooth',
  'triangle',
*/
  wavetype = btnWave;
  document.getElementById("stopbtn").classList.add("hidden");
  document.getElementById("startbtn").classList.remove("hidden");
}

