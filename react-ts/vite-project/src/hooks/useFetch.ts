import { useState } from "react";


interface FetchState<T>{
    data: T | null;
    loading:boolean
    error:string | null
}


const useFetch = <T,>(url:String):FetchState<T> =>{
    const [state, setState] = useState<FetchState<T>>({
        data:null,
        loading:true,
        error:null
    })

    return state;
}

export default useFetch