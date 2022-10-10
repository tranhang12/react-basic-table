import React, { useRef, useState } from 'react'

export const Test = () => {
    const [numOfClicks, setNumOfClicks] = useState(0)
    const numOfClicksRef = useRef(0);
    const ref2 = useRef();
    const handleClick = () => {
        // setNumOfClicks(numOfClicks+1)
        numOfClicksRef.current += 1;
        // console.log(numOfClicksRef.current)
        console.log(ref2)
    }
  return (
    <>
    <p ref={ref2}>Number click: {numOfClicksRef.current}</p>
    <button onClick={handleClick}>Click</button>
    </>
  )
}
