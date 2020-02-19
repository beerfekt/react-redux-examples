import React from 'react';

/*
  Only call Hooks at the top level. Don’t call Hooks inside loops, conditions, or nested functions.
  Only call Hooks from React function components. Don’t call Hooks from regular JavaScript functions

  to gain these secure stuff, use 
                                   npm install eslint-plugin-react-hooks --save-dev

*/



//State Hook
import {useState} from 'react';

//Effekt Hook
import {useEffect} from 'react';

function Counter() {
  // [variable, function] = useState( initialState )
  const [count, setCount] = useState(0);


  //TODO: allowed to call hook from js function?
  const countUp = () => {
    return(
      setCount(count+1)
    )    
  }

  const resetCounter = () => {
    return(
      setCount(0)
    )
  }

  const passValueToCounter = (value) => {
    return(
      setCount(value)
    )
  }
  
  const passMultipleValuesToCounter = (value1, value2) => {
    return(
      setCount(value1 + value2)
    )
  }

  //Effekt Hook
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p>klicked {count} times </p>
      <button onClick={ countUp } >count up</button>
      <button onClick={ resetCounter } >reset</button>
      <button onClick={ () =>  passValueToCounter(3)  } >passValue 3</button>
      <button onClick={ () =>  passMultipleValuesToCounter(3, 2)  } >passValue 3 + 2</button>
    </div>
  );
}

export default Counter;
