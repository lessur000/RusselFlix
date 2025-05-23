import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import CardView from "../components/ui/CardView";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/view/:id" element={<CardView />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
