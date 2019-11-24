import React, {useState, useCallback} from 'react'
import Child from './child';

export default function Hello() {
  const [feed, setFeed] = useState(1)

  function onClick1() {
    console.log("### onClick1");
  }

  const onClick2 = useCallback(() => {
    console.log("### onClick2");
  }, []);

  return <div>
    <h1>Hello "useCallback"</h1>
    <div>
      <div>
        <button onClick={() => setFeed(feed + 1)}>Change State to Trigger Re-Rendering</button>
      </div>
      <hr/>
      <div>
        <Child text='Child1 with normal callback' onClick={onClick1}/>
        <Child text='Child2 (useCallback)' onClick={onClick2}/>
      </div>
    </div>
  </div>
};
