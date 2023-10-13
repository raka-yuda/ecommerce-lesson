import { useState } from "react";

const useToogle = (initialValue: boolean = false) => {
  const [value, setValue] = useState<boolean>(initialValue);

  const toogleHandler = () => {
    setValue((prevState) => !prevState);
  };

  return {
    value,
    toogleHandler,
  };
};

export default useToogle;
