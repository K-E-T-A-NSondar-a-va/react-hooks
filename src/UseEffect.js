import React, { useEffect, useState } from 'react'

const UseEffect = () => {

  const [myNum, setMyNum] = useState(0);

  // Use effects run automatically whenever any state changes:
//   useEffect(() => {
//     console.log("hiii");
//   });

  // if we put the empty array it will run only the once when page is reloaded:
//   useEffect(() => {
//     console.log("hii")
//   },[]);


// running the useEffect every time the state chages:
useEffect(() => {
    document.title = `chats(${myNum})`;  // see in the tab
})

  return (
    <>
        <div className="container">
            <p>{myNum}</p>
            <div className="display-inline-block">
                <button onClick={() =>  setMyNum(myNum+1)}>increament</button>
                {/* <button onClick={() => setMyNum(myNum-1)}>decreament</button> */}
                {/* stop decrementing while it is 0 */}
                <button onClick={myNum == 0?() => setMyNum(0): ()=>setMyNum(myNum-1)}>read 1 chat</button>
            </div>
        </div>
    </>
  )
}

export default UseEffect