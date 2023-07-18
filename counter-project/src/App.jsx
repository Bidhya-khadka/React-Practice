
import './App.css'
import {Button, Card} from "react-bootstrap"


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    counter app
    <Card>
    <Card.Title>0</Card.Title>
    <Card.Footer>
      <Button variant="primary" className ="me-2">Increment</Button>
      <Button variant="danger" className ="me-2">Reset</Button>
      <Button variant="warning" className ="me-2">Decrement</Button>
    </Card.Footer>
      
    </Card>
    </>
  )
}

export default App
