import { Route, Routes } from "react-router-dom";
import "./App.css";
import Blogs from "./Component/Pages/Home/Blogs/Blogs";
import Home from "./Component/Pages/Home/Home/Home";
import ItemDetails from "./Component/Pages/Home/ItemDetails/ItemDetails";
import Items from "./Component/Pages/Home/Items/Items";
import Survey from "./Component/Pages/Home/Survey/Survey";
import TrustedShop from "./Component/Pages/Home/TrustedShop/TrustedShop";
import Login from "./Component/Pages/Login/Login/Login";
import Registration from "./Component/Pages/Login/Registration/Registration";
import RequireAuth from "./Component/Pages/Login/RequireAuth/RequireAuth";
import Footer from "./Component/Pages/Shared/Footer/Footer";
import Header from "./Component/Pages/Shared/Header/Header";
import NotFound from "./Component/Pages/Shared/NotFound/NotFound";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/items" element={<Items />} />
        <Route
          path="/items/:itemId"
          element={
            <RequireAuth>
              <ItemDetails></ItemDetails>
            </RequireAuth>
          }
        />
        <Route path="/survey" element={<Survey />} />
        <Route
          path="/trustedShop"
          element={
            <RequireAuth>
              <TrustedShop />
            </RequireAuth>
          }
        />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
