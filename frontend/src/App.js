import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import RegistryPage from "./pages/RegistryPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/registry" element={<RegistryPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
