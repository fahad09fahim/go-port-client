import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Component/Pages/Home/Home/Home";
import Header from "./Component/Pages/Shared/Header/Header";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
