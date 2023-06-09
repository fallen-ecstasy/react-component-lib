import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import Home from "./screens/Home"

const App = () => (
  <Router>
    {/* <header>
        Add your navbar code here if you want common navbar.
      </header> */}

    <Routes>
      <Route exact path="/" element={<Home />} />
    </Routes>
  </Router>
)

export default App
