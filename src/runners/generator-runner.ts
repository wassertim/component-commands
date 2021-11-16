export const runState = {
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

export async function runGenerator(elements: any[], setAction: any, run: any) {
  const steps = run(elements, setAction);

  for (let step of steps) {
    await wait();
    setAction(step);
    await delay(300);
  }
}
