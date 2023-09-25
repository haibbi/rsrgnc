import Currency from "../Currency.tsx";
import { useCounterContext } from "../../player/player.ts";

const PlayerCurrencyBar = () => {
  const {count} = useCounterContext();
  return (
    <div className="absolute top-0 right-0">
      <Currency amount={count} />
    </div>
  );
};

export default PlayerCurrencyBar;
