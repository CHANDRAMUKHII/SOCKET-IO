
import "./App.css";
import Home from "./components/Home";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Form from "./components/Form";

import io from "socket.io-client";
import Submitted from "./components/Submitted";
import { useState } from "react";

const socket = io.connect("http://10.1.48.46:8090/");
function App() {
  const [soc_id, setid] = useState("");
  const [randomId, setRandomId] = useState(Math.floor(Math.random() * 100));
  socket.on("message", (id) => {
    console.log((id));
    setid(parseInt(id));

  });
  return (
    
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Home id={randomId} submit={randomId === soc_id} />} />
          <Route path="/:id" element={<Form />} />
          <Route path="/submit" element={<Submitted />} />
        </Routes>
      </BrowserRouter>
    
  );
}

export default App;
