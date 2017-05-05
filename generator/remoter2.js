import StateMachine from 'javascript-state-machine';

const fsm = StateMachine.create({
  initial: 'auto',
  events: [
    { name: 'press', from: 'auto', to: 'hot' },
    { name: 'press', from: 'hot', to: 'cold' },
    { name: 'press', from: 'cold', to: 'wind' },
    { name: 'press', from: 'wind', to: 'dry' },
    { name: 'press', from: 'dry', to: 'auto' },
    { name: 'hot', from: ['auto', 'hot', 'cold', 'wind', 'dry'], to: 'hot' }
  ],
  callbacks: {
    onafterpress(event, from, to, msg) { console.log(`turn ${from} to ${this.current}`); },
    onafterhot(event, from, to, msg) { console.log(`turn ${from} to ${this.current}`); },
    onenterauto(event, from, to) { console.log('auto'); },
    onenterhot(event, from, to) { console.log('hot'); },
    onentercold(event, from, to) { console.log('cold'); },
    onenterwind(event, from, to) { console.log('wind'); },
    onenterdry(event, from, to) { console.log('dry'); }
  }
});

document.getElementById('remoter2').addEventListener('click', fsm.press.bind(fsm));
document.getElementById('hot2').addEventListener('click', fsm.hot.bind(fsm));