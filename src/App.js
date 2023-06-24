import "./App.css";
import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NoteState from "./context/notes/NoteState";
import Alert from "./components/Alert";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { AlertState } from "./context/notes/alertContext";

function App() {
  return (
    <>
      <NoteState>
        <AlertState>
          <BrowserRouter>
            <Navbar />
            <Alert alert={{ message: "hi", type: "danger" }} />
            <div className="container">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
              </Routes>
            </div>
          </BrowserRouter>
        </AlertState>
      </NoteState>
    </>
  );
}

export default App;
