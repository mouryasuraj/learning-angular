

import type React from "react"
import type { OrderOnSubmit } from "../types/types"
import { useState } from "react"

interface OrderFormProps {
    onSubmit(order:OrderOnSubmit):void
}

const OrderForm = ({onSubmit}:OrderFormProps) =>{

    const [name,setName] = useState<string>("")
    const [price,setPrice] = useState<number>(0)


    return <form onSubmit={(e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        onSubmit({name, price})
    }}>
        <label>Name</label>
        <input type="text" value={name} onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{
            setName(e.target.value || "")
        }} />
        <label>Price</label>
        <input type="text" value={price} onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{
            setPrice(Number(e.target.value) || 0)
        }} />
        <button type="submit">Submit</button>
        <h2>{}</h2>
    </form>
}

export default OrderForm