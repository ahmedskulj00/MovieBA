import { UserAuthContextProvider } from "./context/UserAuthContext";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Auth from "./pages/Auth/Auth";

function App() {
  return (
    <UserAuthContextProvider>
      <div className="App">
        <Routes>
          <Route path="/" element={<Auth />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </div>
    </UserAuthContextProvider>
  );
}

export default App;
