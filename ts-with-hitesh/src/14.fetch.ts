import axios from 'axios'
import type { AxiosResponse } from 'axios'


interface Todo {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}

// Call API 
const fetchData = async () => {
    try {
        const response:AxiosResponse<Todo> = await axios.get<Todo>("https://jsonplaceholder.typicode.com/todos/4")  // here AxiosResponse is a Generic, we can pass type declaration so that the expected response should come
        console.log(response.data)
    } catch (error: any) {
        // console.log(error.message)   // Here, typescript don't know which data type will come and error is tring to find message in its object so, what happens if its not there, it can lead to error. To fix this, we have put type 'any' and we are checking below that is error was from axios then only it will get 'message' property inside object
        if(axios.isAxiosError(error)){
            if(error.response){
                return console.log(error.response.status)
            }
            console.log(error.message)
            return
        }
        console.log("Error was not from axios")
    }
}
fetchData()