import { useState, useEffect } from 'react';

export default function useLocalStorageState(key, defaultValue, parseJson=true){

  // Default value for initialState
  let initialState = defaultValue;

  if(!parseJson && typeof defaultValue !== "string"){
    throw new Error("If parseJson is specified false, defaultValue must be a string; otherwise set parseJson to true");
  }

  try {
    // Get key from local storage
    const item = window.localStorage.getItem(key);

    // If not already in localstorage, put default value into localstorage
    if(!item){
      if(parseJson)
        window.localStorage.setItem(key, JSON.stringify(defaultValue));
      else
        window.localStorage.setItem(key, defaultValue);      
    } else{
      // Return already set value rest of the time
      if(parseJson)
        initialState = JSON.parse(item);
      else
        initialState = item;
    }
  } catch (error) {
    console.log(error);
    console.log("The above error occured most probably because someone tampered with localstorage !");
  }

  const [state, setState] = useState(initialState);

  // Wrapper to Sync changes in state to storage
  const setValue = (value, setStorageOnly=false) => {
    try {
      // Allow value to be a function so we have same API as useState
      const valueToStore = value instanceof Function ? value(state) : value;

      
      // Save state
      if(!setStorageOnly)
        setState(valueToStore);

      // Set string as it is in local storage
      if(!parseJson)
        return window.localStorage.setItem(key, valueToStore);
        
      // Stringify before saving to local storage
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      // A more advanced implementation would handle the error case
      console.log(error);
    }
  };

  const removeValue = () => {
    try {
      localStorage.removeItem(key);
      setState(undefined);
    } catch(error) {
      // If user is in private mode or has storage restriction
      // localStorage can throw.
      console.log(error);
    }
  }

  
  useEffect(() => {
    // Sync changes done in storage to state automatically
    function checkChanges(event) {
      const item = event.newValue;
      if (item) {
        if(parseJson)
          setState(JSON.parse(item));
        else 
          setState(item);
      }else{
        if(parseJson)
          setState(defaultValue);
        else
          setState(defaultValue);
      }
    }

    window.addEventListener("storage", event => event.key === key ? checkChanges(event) : "");

    return () => {
      window.removeEventListener("storage", event =>event.key === key ? checkChanges(event) : "");
    };
  }, [key]);

  return [state, setValue, removeValue];
}