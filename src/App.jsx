import './App.css'
import { Routes, Route } from "react-router-dom";
import Home from './components/Home'
import Add from './components/Add' 
import Edit from './components/Edit'

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Add />} />
        <Route path="/edit" element={<Edit />} />
      </Routes>
    </div>
  )
}

export default App
