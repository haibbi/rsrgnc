import Currency from "./ui/Currency";
import Task from "./ui/Task";
import { useState } from "react";

function App() {
  const [amount, setAmount] = useState(0);

  const handleTaskCompletion = (reward: number) => {
    // Rastgele bir ödül hesapla (0 ile 500 arasında)
    reward = Math.floor(Math.random() * reward);
    setAmount(amount + reward);
  };

  return (
    <div className="flex items-center justify-center flex-col">
      <Currency amount={amount} />
      <Task
        title="Silah Kaçakçılığı"
        details="Yakındaki bir limana yasa dışı silah sevkiyatı yapılıyor. Bu fırsattan yararlanıp bir kargo ele geçirin."
        reward="Maksimum 500$ ve 1 adet nadir silah"
        risk="%15 (Polis baskını riski var)"
        duration="3" // 15 saniye
        onClick={() => handleTaskCompletion(500)}
        imageUrl={'/task_1.webp'}
      />
      <Task
        title="Şantaj Operasyonu"
        details="Zengin bir iş adamının sırlarını öğrenin ve ondan fidye talep edin."
        reward="Maksimum 700$ veya 5 sosyal puan (oyuncu seçer)."
        risk="%20 (Hedef, sizi yetkililere ihbar edebilir)."
        duration="10" // 15 saniye
        onClick={() => handleTaskCompletion(700)}
        imageUrl={'/task_2.webp'}
      />
    </div>
  );
}

export default App;
