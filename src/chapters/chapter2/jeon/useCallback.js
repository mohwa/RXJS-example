import useMemo from '@chapters/chapter2/jeon/useMemo';

export default function useCallback(next = () => {}, state = []) {
  return useMemo(() => next, state);
};
