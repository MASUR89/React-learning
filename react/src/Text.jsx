import React, {useState, useEffect} from 'react';


const Text = () =>{

  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("Text component mounted");
  }, [count]);


  return(
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  )
}






export default Text
