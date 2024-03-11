import "./App.css";
import Resume from "./Resume/Resume";
import Home from "./Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Resume" element={<Resume />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
