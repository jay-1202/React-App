import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./Component/Header";
import Footer from "./Component/Footer";
import Home from "./Component/Home";
import Task1 from "./Component/Task1"

function App() {
  return (
    <>
      <Header title="React@pp" />
      {/* Changable Portion */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/task1" element={<Task1 />} />
      </Routes>
      <Footer title="React@pp" design="JC" />
    </>
  );
}

export default App;
