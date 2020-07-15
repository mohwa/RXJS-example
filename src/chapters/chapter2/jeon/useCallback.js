import StateManager from "@chapters/chapter2/jeon/stateManager";

export const stateManager = StateManager.factory();

export default function useCallback(next = () => {}, state = []) {
  const { sequence } = stateManager;
  let newNext = next;

  if (!stateManager.hasState(sequence)) {
    stateManager.setState(sequence, { next, state });
  } else {
    if (state.length) {
      if (stateManager.isChanged(sequence, state)) {
        stateManager.setState(sequence, { next, state });
      } else {
        newNext = stateManager.getState(sequence).next;
      }
    } else {
      newNext = stateManager.getState(sequence).next;
    }
  }
  ++stateManager.sequence;

  return newNext;
};
