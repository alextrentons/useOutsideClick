import { useEffect } from 'react';
import { selectOutsideName } from '../UI/SelectOutside/SelectOutside.service';

export const useOutsideClick = ({ callback, ref }) => {
  const handleClick = (event) => {
    const path = event.composedPath ? event.composedPath() : event.path;
    //console.log(path);
    if (ref.current && !path?.includes(ref.current)) {
      //find in path element with name select-outside

      const selectOutside = path.find((el) =>
        el?.getAttribute
          ? el?.getAttribute('name') === selectOutsideName
          : false
      );
      if (selectOutside) return;
      callback(event);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    };
  });
};
