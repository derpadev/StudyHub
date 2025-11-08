import { Routes, Route } from "react-router"
import { Home } from "./components/Home"

function App() {
  return (
  <div>
    <div>
      <Routes>
        <Route path="/" element={<Home />}/>
      </Routes>
    </div>
  </div>
  )
}

export default App
