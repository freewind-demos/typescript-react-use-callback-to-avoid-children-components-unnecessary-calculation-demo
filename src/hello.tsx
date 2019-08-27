//import * as React from 'react'
import React, {useState, useCallback} from 'react'

const functions1: any = new Set();
const functions2: any = new Set();

export default function Hello() {
  const [now, setNow] = useState(Date.now())
  const [feed, setFeed] = useState('abc')

  const callback1 = () => {
    console.log('callback1');
  }

  const callback2 = useCallback(() => {
    console.log('callback2')
  }, [feed]);

  functions1.add(callback1);
  functions2.add(callback2);

  return <div>
    <h1>Hello "useCallback"</h1>
    <div>
      <label>
        Set Feed:
        <input type='text' value={feed} onChange={event => setFeed(event.target.value)}/>
      </label>
      <div>Functions1 count: {functions1.size}</div>
      <div>Functions2 count: {functions2.size}</div>
      <button onClick={() => setNow(Date.now())}>Re-Render ({now})</button>
    </div>
  </div>
};
