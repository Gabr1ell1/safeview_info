import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from "./pages/home"
import About from "./pages/about"

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}
