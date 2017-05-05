const auto = () => {
  console.log('auto');
}

const hot = () => {
  console.log('hot');
}

const cold = () => {
  console.log('cold');
}

const wind = () => {
  console.log('wind');
}

const dry = () => {
  console.log('dry');
}

const state = [auto, hot, cold, wind, dry];

function* remoter() {
  for (let i = 0; true; i++) {
    let fn = arguments[i];
    let spec = yield fn();

    if (spec) {
      let index = state.indexOf(spec);
      yield spec();
      i = index;	//调整顺序
    }

    if (i === arguments.length - 1) {
      i = -1;
    }
  }
}

const exec = remoter(auto, hot, cold, wind, dry);

document.getElementById('remoter3').addEventListener('click', () => {
  exec.next();
});

document.getElementById('hot3').addEventListener('click', () => {
  exec.next(hot);
});
