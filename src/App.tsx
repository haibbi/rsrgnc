import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage2 from "./ui/Login2";
import MafiaCraftingPage from "./ui/crafting";

function App() {
  const [amount, setAmount] = useState(0);

  const handleTaskCompletion = (reward: number) => {
    // Rastgele bir ödül hesapla (0 ile 500 arasında)
    reward = Math.floor(Math.random() * reward);
    setAmount(amount + reward);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage2 />} />
        <Route path="/crafting" element={<MafiaCraftingPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
