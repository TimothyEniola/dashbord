import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Signup from "./Pages/Signup/Signup";
import Account from "./Pages/Account/Account";
function App() {
  return (
    <div>
      {/* <Signup/> 
        <Account/> */}

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/Account" element={<Account />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
