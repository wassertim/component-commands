import { Action } from "../types/action";

const actionHistory: Action[] = [];

function getPreviousAction(action: Action) {
  const currentIndex = actionHistory.indexOf(action);
  const prevIndex = currentIndex - 1;
  if (prevIndex < 0) {
    return action;
  }

  return actionHistory[prevIndex];
}

export function actionReducer(currentAction: any, newAction: Action) {
  switch (newAction.type) {
    case "goBack":
      return getPreviousAction(currentAction);
    default:
      actionHistory.push(newAction);
      return newAction;
  }  
}