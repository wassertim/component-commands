import { Action } from "../types/action";

const swap = (array: any[], x: number, y: number) =>
  ([array[x], array[y]] = [array[y], array[x]]);

export let runState = {
  isOnPause: false,
};

async function delay(timeout: number) {
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

export function* run(elements: any[], setAction: any) {
  let m = elements.length;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < m - i; j++) {
      yield { type: "changeSwapIndex", swapIndex: j } as Action;
      if (elements[j] > elements[j + 1]) {
        swap(elements, j, j + 1);
        yield { type: "swap" } as Action;
      }
    }
  }
}
