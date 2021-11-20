type ActionType = "swap" | "changeSwapIndex" | "goBack" | "goForward";

export interface Action {
  type?: ActionType;
  swapIndex?: number;
}
