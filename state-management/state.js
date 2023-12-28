export const states = {
  STANDING_LEFT: 0,
  STANDING_RIGHT: 1,
}

class State {
  constructor(state) {
    this.state = state;
  }
}

class StandingLeft extends State {
  constructor(player) {
    super('STANDING LEFT');
    this.player = player;
  }
  enter() {
    this.player.frameY = 0;
  }
  handleInput(input) {
    if (input === 'PRESS right') this.player.setState(states.STANDING_RIGHT); // 6:28:11
  }
}
class StandingRight extends State {
  constructor(player) {
    super('STANDING RIGHT');
    this.player = player;
  }
  enter() {
    this.player.frameY = 1;
  }
  handleInput(input) {
    if (input === 'PRESS left') // set state to StandingLeft
  }
}