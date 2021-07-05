import { useState } from "react";

export function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    //read localStorage
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  //update window.localStorage
  const setValue = (value) => {
    try {
      setStoredValue(value); //save the value as state
      window.localStorage.setItem(key, JSON.stringify(value)); //save the value in the localStorage
    } catch (error) {
      console.log(error);
    }
  };
  return [storedValue, setValue];
}
