import type { Chai } from "../types/types.ts"

interface ChaiListProps{
    items:Chai[]
}

const Chailist = ({items}:ChaiListProps) =>{
    return <div style={{display:"flex", flexDirection:"column", gap:"10px"}}>
        {items.map((data)=>{
            return <div style={{display:'flex', gap:"10px", alignItems:"center", justifyContent:"center", backgroundColor:"lightblue", borderRadius:"5px"}} key={data.id}>
                <h4>{data.name}</h4>
                <h4>{data.price}</h4>
            </div>
        })}
    </div>
}

export default Chailist