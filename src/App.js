import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Component/Pages/Home/Home/Home";
import Items from "./Component/Pages/Home/Items/Items";
import Survey from "./Component/Pages/Home/Survey/Survey";
import Login from "./Component/Pages/Login/Login/Login";
import Registration from "./Component/Pages/Login/Registration/Registration";
import Header from "./Component/Pages/Shared/Header/Header";
import NotFound from "./Component/Pages/Shared/NotFound/NotFound";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/items" element={<Items />} />
        <Route path="/survey" element={<Survey />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
