import { useState } from "react";
import LoginPage2 from "./ui/Login2";

function App() {
  const [amount, setAmount] = useState(0);

  const handleTaskCompletion = (reward: number) => {
    // Rastgele bir ödül hesapla (0 ile 500 arasında)
    reward = Math.floor(Math.random() * reward);
    setAmount(amount + reward);
  };

  return (
    <LoginPage2 />
  );
}

export default App;
