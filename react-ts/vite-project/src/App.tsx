import './App.css'
import { Card } from './components/Card.tsx'
import { ChaiCard } from './components/ChaiCard.tsx'
import Chailist from './components/Chailist.tsx'
import { Counter } from './components/Counter.tsx'
import OrderForm from './components/OrderForm.tsx'
import type { Chai } from './types/types.ts'

function App() {

  const items:Chai[] = [
    {
      id:456,
      name:"Masala Chai",
      price:45
    },
    {
      id:457,
      name:"Ginger Chai",
      price:79
    },
  ]



  return (
    <>
      <h2>Hello, React Typescript</h2>
      <ChaiCard n={"Suraj"} price={58} />
      <Counter />
      <Chailist items={items} />
      <OrderForm onSubmit={(order)=>{
        console.log("Order", order)
      }} />
      <Card title='Classes' footer={<h3>Hello, from IT department</h3>}>
        <h1>Vaar Zaara</h1>
      </Card>
    </>
  )
}

export default App
