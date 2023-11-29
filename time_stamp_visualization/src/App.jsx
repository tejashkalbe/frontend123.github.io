import { useState } from 'react'
import Forms from './components/Forms'
import Linechart from './components/Linechart'
import './App.css'

function App() {
  const [fetchstate,setFetchstate] = useState(1);

  return (
    <>
    <Forms fetchstate={fetchstate} setFetchstate={setFetchstate}/>
    <Linechart fetchstate={fetchstate} setFetchstate={setFetchstate}/>
    </>
  )
}

export default App
