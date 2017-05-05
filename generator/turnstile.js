import 'babel-polyfill';
import StateMachine from 'javascript-state-machine';

const fsm = StateMachine.create({
  initial: 'locked',
  events: [
    { name: 'card', from: 'locked', to: 'unlocked' },
    { name: 'card', from: 'unlocked', to: 'unlocked' },
    { name: 'push', from: 'unlocked', to: 'locked' },
    { name: 'push', from: 'locked', to: 'locked' }
  ],
  callbacks: {
    onaftercard(event, from, to, msg) { console.log(`刷卡了，当前状态${this.current}`); },
    onafterpush(event, from, to, msg) { console.log(`推了闸机，当前状态${this.current}`); },
    onenterlocked(event, from, to) { console.log('锁上了'); },
    onenterunlocked(event, from, to) { console.log('解锁了'); }
  }
});

// document.getElementById('card').addEventListener('click', fsm.card.bind(fsm));
// document.getElementById('push').addEventListener('click', fsm.push.bind(fsm));

class Turnstile {
  constructor() {
    this.currentState = 'locked';
    this.states = {
      locked: {
        to: 'unlocked'
      },

      unlocked: {
        to: 'locked'
      }
    };
  }

  card() {
    this.currentState = this.states.locked.to;
    console.log(`刷卡了，当前状态${this.currentState}`);
  }

  push() {
    this.currentState = this.states.unlocked.to;
    console.log(`推了闸机，当前状态${this.currentState}`);
  }

  init() {
    document.getElementById('card').addEventListener('click', this.card.bind(this));
    document.getElementById('push').addEventListener('click', this.push.bind(this));
  }

}

(new Turnstile()).init();

function* turnstile2() {
  let currentState = 'locked';

  let state = {
    locked: {
      to: 'unlocked'
    },

    unlocked: {
      to: 'locked'
    }
  };

  for (let i = 0; true; i++) {
    let s = yield currentState;

    if (s) {
      currentState = s;
    }
  }
}

let ts2 = turnstile2();

document.getElementById('generator').addEventListener('click', () => {
  console.log(ts2.next());

  setTimeout(() => {
    console.log(ts2.next('unlocked'));
  }, 2000)

});
