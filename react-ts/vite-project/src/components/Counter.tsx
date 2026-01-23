import { useState } from "react"

export const Counter = () =>{

    const [counts, setCount] = useState<number | string>(0)  // any other data type is not assignable to this state, as it is expecting number

    return <div>
        <p>Cups ordered: {counts}</p>
        <button onClick={()=>{
            setCount((prev) =>{
                if(typeof prev ==="string"){
                return prev+1
                }
                return prev
            })
        }}>Order one more</button>
    </div>
}