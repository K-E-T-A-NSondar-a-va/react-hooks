import React, { useState } from 'react'
import "./style.css"

const UseState = () => {

  const [myNum, setMyNum] = useState(0);

  return (
    <>
        <div className="container">
            <p>{myNum}</p>
            <div className="display-inline-block">
                <button onClick={() =>  setMyNum(myNum+1)}>increament</button>
                {/* <button onClick={() => setMyNum(myNum-1)}>decreament</button> */}
                {/* stop decrementing while it is 0 */}
                <button onClick={myNum == 0?() => setMyNum(0): ()=>setMyNum(myNum-1)}>decreament</button>
            </div>
        </div>
    </>
  )
}

export default UseState