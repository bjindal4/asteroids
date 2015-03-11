import {beat1Audio, beat2Audio} from './Audio';
let interval, counter, timeout, beat1, beat2, soundtrack;

class Soundtrack {
  constructor() {
    soundtrack = this;
  }

  play() {
    this.playBeat();
  }

  playBeat() {
    counter % 2 === 0 ?  beat1Audio.play() : beat2Audio.play();
    interval -= 1;
    counter++;
    timeout = setTimeout(()=> {this.playBeat}, interval);
  }

  stop() {
    clearInterval(timeout);
  }

  init() {
    interval = 1000;
    counter = 0;
    this.play();
  }
}

export default Soundtrack;