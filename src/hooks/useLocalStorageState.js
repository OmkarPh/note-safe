import { useState } from 'react';

let counter = 0;
let adder = 0;

export default function useLocalStorageState(key, defaultValue, parseJson=true){


  // Default value for initialState
  let initialState = defaultValue;
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
  const setValue = value => {
    try {
      // Allow value to be a function so we have same API as useState
      const valueToStore = value instanceof Function ? value(state) : value;

      // Save state
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

  // 2 way sync not working yet
  // // Sync changes done in storage to state automatically
  // function checkChanges() {
  //   const item = localStorage.getItem(key);
  //   console.log("Inside check changes");
  //   if (item) {
  //     console.log("Item is there counter",++counter);
  //     if(parseJson)
  //       setState(JSON.parse(item));
  //     else 
  //       setState(item);
  //   }else{
  //     console.log("Item is not there");
  //     if(parseJson)
  //       setState({});
  //     else
  //       setState("");
  //   }
  // }

  return [state, setValue, removeValue];
}