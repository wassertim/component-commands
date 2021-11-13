import { swap } from "../functions/util";

export function commandReducer(state, action) {
  switch (action.type) {
    case "swap":
      return swap(state, action.swapIndex);
    default:
      throw new Error();
  }
}
