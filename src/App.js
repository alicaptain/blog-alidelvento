import { Link, Route, Routes } from "react-router-dom";

import "./App.css";
import Home from "./pages/Home";
import ButtBar from "./components/ButtBar";
import ATale from "./pages/ATale";
import WriteTale from "./components/WriteTale";
import Settings from "./pages/Settings";
import Login from "./pages/Login";
import GetIn from "./pages/GetIn";

function App() {
  const user = false;
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={user ? <Home /> : <Login />} />
        <Route path="/GetIn" element={user ? <Home /> : <GetIn />} />
        <Route path="/WriteTale" element={user ? <WriteTale /> : <GetIn />} />
        <Route path="/Settings" element={user ? <Settings /> : <GetIn />} />

        <Route path="/tales/:taleId" element={<ATale />} />
      </Routes>
      <ButtBar />
    </>
  );
}

export default App;
