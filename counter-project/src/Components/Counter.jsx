
import { useState } from 'react';
import {Button, Card} from "react-bootstrap"


function Counter() {
  let [count, setCount] = useState(0);
  function incrementHandler(){
    setCount(count+=  1)

  }
  function decrementHandler(){
    setCount(count -= 1)
  }
  function resetHandler(){
    setCount(0)

  }
  function changeHandler(e){
    let inputVal =Number(e.target.value)
    setCount(count +inputVal  )
  }

  return (
    <>
    <h1>{count}</h1>
    <Card>
    <Card.Title>Counter App</Card.Title>
    <Card.Footer>
      <input type="text" className='form-control mb-2'placeholder='enter here' onChange={changeHandler} /><br></br>
      <Button variant="primary" className ="me-2" onClick={incrementHandler}>Increment</Button>
      <Button variant="danger" className ="me-2" onClick={resetHandler}>Reset</Button>
      <Button variant="warning" className ="me-2" onClick={decrementHandler}>Decrement</Button>
    </Card.Footer>
      
    </Card>
    </>
  )
}

export default Counter
