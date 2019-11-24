import React, {useEffect} from 'react';

type Props = {
  text: string,
  onClick: () => void;
}

export default function Child({text, onClick}: Props) {
  console.log("### Child ", {text});

  useEffect(() => {
    // expensive calculation here
    console.log('### Child.useEffect do some expensive work here', {text})
  }, [onClick])
  return <div>
    <button onClick={onClick}>{text}</button>
  </div>

};
