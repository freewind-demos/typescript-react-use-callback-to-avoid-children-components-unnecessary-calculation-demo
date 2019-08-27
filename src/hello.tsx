//import * as React from 'react'
import React, {useState, useCallback} from 'react'

export default function Hello() {
  const [now, setNow] = useState(1)
  const [feed, setFeed] = useState(1)

  const hello1 = () => {
    console.log('hello1: ', now);
  }

  const hello2 = useCallback(() => {
    console.log('hello2: ', now)
  }, [feed]);

  function sayHello() {
    hello1();
    hello2();
    setNow(now + 1);
  }

  return <div>
    <h1>Hello "useCallback"</h1>
    <div>
      <div>
        <button onClick={() => setFeed(feed + 1)}>Update Feed ({feed})</button>
      </div>
      <div>
        <button onClick={sayHello}>Say Hello</button>
      </div>
    </div>
  </div>
};
