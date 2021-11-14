const swap = (array, x, y) => ([array[x], array[y]] = [array[y], array[x]]);

export let runState = {
  isOnPause: false,
};

async function delay(timeout) {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
}

async function wait() {
  while (runState.isOnPause) {
    await delay(10);
  }

  return Promise.resolve();
}

export async function run(elements, setAction) {
  let m = elements.length;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < m - i; j++) {
      setAction({ type: "changeSwapIndex", swapIndex: j });
      await delay(1000);
      await wait();
      if (elements[j] > elements[j + 1]) {
        swap(elements, j, j + 1);
        setAction({type: "swap"});
        await delay(1000);
      }
    }
  }
}
