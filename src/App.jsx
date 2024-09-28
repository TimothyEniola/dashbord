import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Signup from "./Pages/Signup/Signup";
import Account from "./Pages/Account/Account";
import Empty from "./Pages/Empty/Empty";
function App() {
  return (
    <div>
      {/* <Signup/> 
        <Account/> */}

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/Account" element={<Account />} />
          <Route path="/Empty" element={<Empty />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
