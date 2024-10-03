
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Create from "./Components/Create";
import Read from "./Components/Read";
import Update from "./Components/Update";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route exact path="/" element={<Create />} />
          <Route exact path="/Read" element={<Read />} />
          <Route path="/update" element={<Update />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
