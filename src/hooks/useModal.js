import { useMemo, useState, useCallback } from "react";

const useModal = (onClose) => {
  const [visible, setVisible] = useState(false);
  const [state, setState] = useState(null);

  const show = useCallback(
    (s = null) => {
      setVisible(true);
      setState(s);
    },
    [setVisible, setState]
  );

  const close = useCallback(() => {
    if (onClose) {
      onClose(() => {
        setVisible(false);
      });
    }
    setVisible(false);
    setState(null);
  }, [setState, onClose]);

  return useMemo(() => {
    return { show: (s) => show(s), onClose: () => close(), close: () => close(), visible, ...state };
  }, [state, visible, close, show]);
};

export default useModal;
