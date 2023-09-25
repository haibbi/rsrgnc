import './App.css'
import Task from "./ui/task/Task.tsx";
import { CounterProvider } from "./player/player.ts";
import PlayerCurrencyBar from "./ui/player/PlayerCurrencyBar.tsx";

function App() {

  const tasks = [
    {
      title: 'Gizli Sözleşme',
      description: 'Yüksek profilli bir işadamının iş yerini ziyaret ederek gizli bilgileri çal.'
    },
    {
      title: 'Casusluk Görevleri',
      description: ' Rakip çetelerin sırlarını öğrenmek için casusluk yapmalısın. Bilgi topla ve düşmanlarını zayıflatmak için kritik bilgileri kullan.'
    },
  ];

  return (
    <CounterProvider>
      <div className="h-screen flex items-center justify-center flex-col">
        <PlayerCurrencyBar />
        {
          tasks.map((task, index) =>
            <Task
              key={index}
              title={task.title}
              description={task.description}
            />)
        }
      </div>
    </CounterProvider>

  )
}

export default App
