# Pre-work - *Memory Game*

Lights and Sounds is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: Ong Teh

Time spent: 6 hours spent in total

Link to project: https://lights-and-sounds.glitch.me/

## Required Functionality

The following **required** functionality is complete:

[* ] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
[* ] "Start" button toggles between "Start" and "Stop" when clicked. 
[* ] Game buttons each light up and play a sound when clicked. 
[* ] Computer plays back sequence of clues including sound and visual cue for each button
[* ] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
[* ] User wins the game after guessing a complete pattern
[* ] User loses the game after an incorrect guess

The following **optional** features are implemented:

[ ] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
[* ] Buttons use a pitch (frequency) other than the ones in the tutorial
[* ] More than 4 functional game buttons
[* ] Playback speeds up on each turn
[* ] Computer picks a different pattern each time the game is played
[* ] Player only loses after 3 mistakes (instead of on the first mistake)
[ ] Game button appearance change goes beyond color (e.g. add an image)
[ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
[ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [ ] List anything else that you can get done to improve the app!

## Video Walkthrough (GIF)

If you recorded multiple GIFs for all the implemented features, you can add them here:
![](https://cdn.glitch.global/dfb534eb-f3c4-4de3-8541-22643e8a28a6/ThreeStrikes.gif?v=1648879250993)
You get Three Strikes
![](https://cdn.glitch.global/dfb534eb-f3c4-4de3-8541-22643e8a28a6/faster.gif?v=1648879310146)
The game gets faster the farther you play

## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 

https://www.w3schools.com/JS/default.asp
https://www.w3schools.com/css/default.asp
https://www.w3schools.com/html/default.asp
W3schools for general javascript, css, and html

https://en.wikipedia.org/wiki/Hexatonic_scale
Wikipedia for hexatonic scale notes

https://mixbutton.com/mixing-articles/music-note-to-frequency-chart/
mixbutton for reference chart that shows frequency of notes

https://arstechnica.com/information-technology/2015/10/tomato-versus-ff6347-the-tragicomic-history-of-css-color-names/
arstechnica.com for table of standard CSS color names

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 
I originally hit a major roadblock with the algorithm for if the guesses were correct, my algorithm would
only check for the last part of the solution.  I slowed down and reread my algorithm to figure out what 
was wrong.  I had made a few errors, I wasn't sure what to do with guessCounter so I had initially set it
to be btn before realizing that guessCounter was supposed to be used as a temporary variable to help the 
program step through the player's guesses.  I also didn't realize I was incrementing progress at the wrong
time because I had forgotten to move that line while fixing the original problem with not using guessCounter.
Once I got that over, I was able to impliment my random solution when start is clicked and continue on 
reletively easily.

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 
Something I had issues with especially when I was trying to impliment my idea of switching the sound wave
type was how do you debug a webapplication?  I'm used to cpp or java where my IDE would allow me to track
variables and step to help lower down where the issue is.  I tried to get the debugger in glitch to work
but just couldn't figure it out.

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 
Something I wanted to do from the very beginning of the project was toggles for changing the oscalator's
wave form.  I couldn't get it working however, I spent maybe 3 hours trying to impliment this function 
after referencing here: https://www.w3.org/TR/webaudio/
I was able to get the buttons to change the variable but the oscillator's wave form output didn't change.
Given more time, I would've finished implimenting sliders or buttons to toggle clues to make it harder. 
I also wanted to make the amount of buttons dynamic so a slider would've picked how many boxes there were.
I also would've taken a look at implimenting images when the buttons were pressed as well as taken a crack
at implimenting the timer function.



## Interview Recording URL Link

[My 5-minute Interview Recording](https://cdn.glitch.me/dfb534eb-f3c4-4de3-8541-22643e8a28a6/WIN_20220401_23_30_02_Pro.mp4?v=1648882492044)


## License

    Copyright Ong Teh

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.