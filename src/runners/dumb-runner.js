export let runState = {
    isOnPause: false
};

async function delay(timeout) {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
}

async function wait() {
  while(runState.isOnPause) {
    await delay(10);
  }

  return Promise.resolve();
}

export async function run(elements, setAction) {
  for (let i = 0; i < elements.length - 1; i++) {
    await wait();
    setAction({type: "changeSwapIndex", swapIndex: i});
    await delay(1000);
    setAction({type: "swap"});
    await delay(1000);
  }
}