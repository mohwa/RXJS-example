import { stateManager as effectManager } from '@chapters/chapter2/jeon/useEffect';
import { stateManager as memoManager }  from '@chapters/chapter2/jeon/useMemo';
import { stateManager as callbackManager }  from '@chapters/chapter2/jeon/useCallback';
import StateManager from "@chapters/chapter2/jeon/stateManager";

export const stateManager = StateManager.factory();

export default function useState(defaultValue, component) {
  const { sequence } = stateManager;
  let value;

  const setValue = (newValue) => {
    const compareValue = stateManager.getState(sequence);

    if (newValue !== compareValue) {
      stateManager.setState(sequence, newValue);

      setTimeout(() => {
        stateManager.dispose();
        effectManager.dispose();
        memoManager.dispose();
        callbackManager.dispose();

        component();
      });
    }
  };

  if (!stateManager.hasState(sequence)) {
    value = defaultValue;
    stateManager.setState(sequence, value);
  } else {
    value = stateManager.getState(sequence);
  }

  ++stateManager.sequence;

  return [value, setValue];
};
