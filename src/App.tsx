import './App.css'

import CreditCardForm from './CreditCardForm'
import reactLogo from './assets/react.svg'
import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>Payment form</h1>
      <CreditCardForm />
    </div>
  )
}

export default App
