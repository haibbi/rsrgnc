import Currency from "./ui/Currency";

function App() {

  return (
    <div className="h-screen flex items-center justify-center flex-col">
      <Currency amount={1234.56} />
      <h1
        className="underline decoration-blue-500 font-bold text-center text-9xl"
      >Resurgence</h1>
    </div>
  )
}

export default App
