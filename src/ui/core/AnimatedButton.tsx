import React from "react";
import Button, { ButtonProps } from "./Button.tsx";
import { animated, useSpring } from '@react-spring/web'
import { ReactComponent as GoldCoin } from '../gold-coin.svg'

const AnimatedButton: React.FC<ButtonProps> = ({onClick, ...rest}) => {
  const [springs, api] = useSpring(() => ({
    from: {
      y: 0,
      display: 'none'
    },
  }));

  const handleClick = () => {
    api.start({
      from: {
        display: 'none',
        y: 10,
      },
      to: {
        display: 'initial',
        y: -40,
      },
      onResolve: (result, ctrl, item) => {
        console.log('onResolve', {result, ctrl, item});
        ctrl.set({
          display: 'none'
        })
      }
    });
  };

  return (
    <>
      <animated.div
        style={{
          position: 'absolute',
          ...springs
        }}
      >
        <GoldCoin className="h-5 w-5 mr-1" />
      </animated.div>
      <Button onClick={(e) => {
        onClick?.(e);
        handleClick();
      }} {...rest} />
    </>
  );
}

export default AnimatedButton;
