class Remoter {
  constructor() {
    this.currentState = 'auto';
    this.state = {
      auto: { to: 'hot' },
      hot: { to: 'cold' },
      cold: { to: 'wind' },
      wind: { to: 'dry' },
      dry: { to: 'auto' }
    };
  }

  setState(state) {
    console.log(`turn ${this.currentState} to ${state}`);
    this.currentState = state;
  }

  press() {
    this.setState(this.state[this.currentState].to);
  }

  init() {
    document.getElementById('remoter1').addEventListener('click', () => {
      this.press();
    });

    document.getElementById('hot1').addEventListener('click', () => {
      this.setState('hot');
    });
  }

}

(new Remoter()).init();
