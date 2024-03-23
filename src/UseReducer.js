import { useReducer } from "react"

const reducer = (state, action) => {
    if(action.type === "ICR")
        state = state + 1;
    if(state > 0 && action.type === "DCR") {
        // if(state == 0)
        //     return state;
        state = state - 1;
    }
    return state;
}

const UseReducer = () => {

    const[state, dispatch] = useReducer(reducer, 0);

    return (
      <>
          <div className="container">
              <p>{state}</p>
              <div className="display-inline-block">
                  <button onClick={() =>  dispatch({type: "ICR"})}>increament</button>
                  {/* <button onClick={() => setMyNum(myNum-1)}>decreament</button> */}
                  {/* stop decrementing while it is 0 */}
                  <button onClick={() => dispatch({type: "DCR"})}>decreament</button>
              </div>
          </div>
      </>
    )
}

export default UseReducer