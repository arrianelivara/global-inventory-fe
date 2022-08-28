import { useMemo, useState, useCallback } from "react";

const useModal = (onClose) => {
  const [active, setActive] = useState(false);
  const [state, setState] = useState(null);

  const show = useCallback(
    (s = null) => {
      setActive(true);
      setState(s);
    },
    [setActive, setState]
  );

  const close = useCallback(() => {
    if (onClose) {
      onClose(() => {
        setActive(false);
      });
    }
    setActive(false);
    setState(null);
  }, [setState, onClose]);

  return useMemo(() => {
    return { show: (s) => show(s), onClose: () => close(), close: () => close(), active, ...state };
  }, [state, active, close, show]);
};

export default useModal;
